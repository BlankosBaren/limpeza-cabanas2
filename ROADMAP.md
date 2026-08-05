# Diário de Limpeza das Cabanas

## Objetivo do aplicativo
PWA (aplicativo web instalável) para controle operacional da limpeza de cabanas: acompanha cômodos e itens de checklist por cabana/dia, cronometra o tempo de limpeza, organiza escala e programação diária, registra ocorrências/danos com fotos, gera PDF do checklist e aplica gamificação (conquistas, sequência de dias, metas mensais) para engajar a equipe. Funciona 100% offline, com dados salvos localmente no dispositivo (IndexedDB).

## Situação atual
- Versão atual do pacote: **v30** (`CONFIG.sistema.versao = 'v30'`), agora reempacotada como v31 apenas com esta documentação adicionada.
- Aplicativo single-file: toda a lógica está em `index.html` (~4.590 linhas), acompanhado de `sw.js` (Service Worker) e `manifest.webmanifest` (PWA).
- Modo administrador protegido por senha master (`7777` no código atual, apenas trava de uso, não segurança forte).

## Arquitetura
- **PWA**: `manifest.webmanifest` define nome, ícones, tema e modo `standalone`, instalável em Android/iPhone.
- **IndexedDB**: banco `cabanas-limpeza-db` (store `dados`) é a fonte de verdade dos dados; há também uma chave de estado (`cabanas-limpeza-v2`) para bootstrap/consistência.
- **Service Worker** (`sw.js`, cache `limpeza-cabanas-v30`): cacheia apenas os arquivos estáticos locais (HTML, manifest, ícones); nunca intercepta `blob:`/`data:`, preservando backups, PDFs e fotos fora do cache.
- **Backup**: exportação/importação de JSON versionado (`backup.formatVersion`), com validações de tamanho, JSON e compatibilidade, além de rollback automático se a restauração falhar no meio do processo.
- **Cronômetros**: módulo TIMER mede o tempo de limpeza por cômodo/cabana/dia.
- **Dashboard**: módulo RENDER monta a tela principal, sidebar e visão de cabanas/cômodos com indicadores de progresso.
- **Escala/Programação**: módulo de Calendário / Dia Operacional / Escala / Sequência controla quais cabanas estão programadas em cada dia e a sequência de dias válidos.
- **Gamificação**: módulo de Conquistas (9 conquistas definidas) + módulo de Toasts/Gamificação (celebrações, confete, marcos de meta mensal em 25/50/75/100%).
- **Fotos**: módulo de Fotos & Ocorrências permite registrar danos com descrição e fotos anexadas.
- **PDF**: módulo PDF & E-mail gera checklist em PDF (via jsPDF) por cabana/dia, incluindo fotos de danos, com opção de abrir rascunho de e-mail (`mailto:`) para envio manual.

## Funcionalidades concluídas
- Cadastro e gestão de cabanas e cômodos, com itens de checklist por cômodo.
- Marcação de itens concluídos por cabana/dia, com cálculo de progresso.
- Cronômetro de limpeza por cômodo/cabana/dia.
- Calendário/dia operacional com escala e sequência de dias válidos.
- Registro de ocorrências/danos com descrição e fotos.
- Geração de PDF do checklist (com fotos de danos) e abertura de rascunho de e-mail para envio.
- Sistema de conquistas (9 itens) com celebração visual (confete/toasts).
- Metas mensais com marcos percentuais (25/50/75/100%) e mensagens dedicadas.
- Backup: exportação e importação de dados em JSON versionado, com validações e rollback automático em caso de falha.
- Painel administrativo protegido por senha master.
- Persistência local via IndexedDB, com autosave (delay configurável).
- Funcionamento 100% offline via Service Worker (cache de arquivos estáticos).
- Instalável como PWA em Android (Chrome) e iPhone (Safari — Adicionar à Tela de Início).
- Menu mobile em sidebar recolhível; tema claro adaptado para celular; área mínima de toque de 44px; contraste reforçado em botões de confirmação; calendário adaptado à largura no celular.
- Tratamento global de erros não capturados (log no console sem travar a aba).

## Backlog

### Alta prioridade
- Centro de Administração Premium (planejado para V31).
- Revisão de fluxo de migração de dados entre origens (documentado, mas manual).

### Média prioridade
- Interface Premium (planejado para V32).
- Melhorias de acessibilidade além do já implementado (contraste, área de toque).

### Baixa prioridade
- Inteligência Operacional (planejado para V33).
- IA e Relatórios Inteligentes (planejado para V34).

## Próximas versões
- **V31** — Centro de Administração Premium
- **V32** — Interface Premium
- **V33** — Inteligência Operacional
- **V34** — IA e Relatórios Inteligentes

## Regras permanentes
- Nunca remover funcionalidades existentes.
- Nunca quebrar compatibilidade dos backups.
- Sempre criar nova versão (nunca sobrescrever versões anteriores).
- Sempre manter funcionamento offline.
- Sempre preservar o IndexedDB.
- Sempre manter compatibilidade com backups antigos.
- Sempre manter a PWA funcional.

## Estrutura de pastas
```
Limpeza_Cabanas_Gamificado_v31_PWA/
├── index.html                 (aplicativo completo: HTML + CSS + JS)
├── manifest.webmanifest       (configuração da PWA)
├── sw.js                      (Service Worker / cache offline)
├── INSTRUCOES_PUBLICACAO.txt  (guia de publicação e migração de dados)
├── ROADMAP.md                 (este documento — novo na V31)
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-maskable-192.png
    └── icon-maskable-512.png
```

## Histórico de versões
O código-fonte da V30 não contém um changelog completo linha a linha de V1 a V30 — apenas alguns comentários pontuais de sprints específicas ficaram registrados no HTML/CSS. Para não inventar informação não verificável, o histórico abaixo lista somente o que está de fato documentado no código; as versões não comentadas explicitamente não puderam ser descritas individualmente.

- **V15 a V17**: ajustes registrados em CSS/JS sem descrição textual detalhada no código.
- **V19**: ajuste pontual registrado no código, sem descrição textual detalhada.
- **V22**: versão de referência citada em `INSTRUCOES_PUBLICACAO.txt` como "arquivo HTML antigo" anterior à publicação como PWA — ponto de partida do processo de migração de dados via backup.
- **V23**: versão citada no cabeçalho de `sw.js` como origem do texto do Service Worker atual.
- **V25**: introdução do menu mobile em sidebar recolhível, área mínima de toque de 44px, calendário adaptado à largura no celular, e criação de `INSTRUCOES_PUBLICACAO.txt` (publicação como PWA em endereço HTTPS).
- **V26**: tema claro adaptado para o celular.
- **V27**: contraste reforçado nos botões de confirmação.
- **V28**: ajuste pontual registrado no código, sem descrição textual detalhada.
- **V30**: versão consolidada atual, cache do Service Worker atualizado para `limpeza-cabanas-v30`, `CONFIG.sistema.versao = 'v30'`.

## Como desenvolver
- Fazer mudanças pequenas e incrementais.
- Poucas funcionalidades novas por versão.
- Sempre gerar um novo ZIP ao final da sprint.
- Sempre criar uma nova pasta de versão (nunca reaproveitar a pasta anterior).
- Nunca alterar os arquivos da versão anterior.
- Sempre validar que HTML, CSS, JS e Service Worker continuam funcionando offline antes de entregar.
- Sempre validar que backups antigos continuam podendo ser importados.

## Entrega
- Pasta: `Limpeza_Cabanas_Gamificado_v31_PWA`
- ZIP: `Limpeza_Cabanas_Gamificado_v31_PWA.zip`
- Único arquivo novo: `ROADMAP.md`
- Todo o restante permanece idêntico à V30.
