// Service Worker - Diário de Limpeza das Cabanas (V23)
// Faz cache apenas dos arquivos locais da PWA. Nunca toca em IndexedDB,
// backups, PDFs ou fotos - esses fluxos não passam pelo Service Worker
// de forma alguma (downloads, blob: e data: não são interceptados).

const CACHE_NAME = 'limpeza-cabanas-v30';

const LOCAL_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(LOCAL_FILES))
      .catch(error => {
        // Não esconder a falha: se um arquivo local essencial não puder ser
        // armazenado, a instalação deste Service Worker deve falhar, para
        // nunca funcionar "pela metade" sem suporte real a offline.
        console.error('Falha ao armazenar arquivos essenciais.', error);
        throw error;
      })
  );
  // skipWaiting é seguro aqui: o SW não guarda nenhum dado operacional,
  // apenas arquivos estáticos. Os dados reais vivem no IndexedDB, que não
  // é tocado por este arquivo.
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        // Remove somente caches antigos deste mesmo aplicativo (prefixo
        // "limpeza-cabanas-"); preserva qualquer outro cache que exista
        // na origem.
        if (key.startsWith('limpeza-cabanas-') && key !== CACHE_NAME) {
          return caches.delete(key);
        }
        return null;
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;

  // Atende somente GET.
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Ignora protocolos diferentes de HTTP/HTTPS (blob:, data:, chrome-extension:, etc.)
  // e nunca intercepta blob: ou data: (usados em downloads de backup, PDF e fotos).
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (req.url.startsWith('blob:') || req.url.startsWith('data:')) return;

  const isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin) {
    // Arquivos locais da aplicação: cache primeiro, com atualização em segundo
    // plano quando uma nova versão instalada disponibilizar arquivos novos.
    event.respondWith(
      caches.match(req).then(cached => {
        const network = fetch(req).then(res => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
  } else {
    // Recursos externos (Google Fonts, jsPDF via CDN): tenta a rede primeiro
    // e usa o cache como reserva se já estiver disponível. Uma falha externa
    // nunca é convertida em uma resposta HTML incorreta - se não houver nada
    // em cache, a falha simplesmente propaga e o próprio aplicativo já trata
    // a ausência de fonte ou de jsPDF com os recursos existentes.
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match(req).then(cached => {
        if (cached) return cached;
        return Promise.reject(new Error('Recurso externo indisponível e sem cache.'));
      }))
    );
  }
});
