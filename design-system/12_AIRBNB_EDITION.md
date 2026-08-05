# 12 — V50: Airbnb Edition

Camada visual aditiva sobre o design system existente (V15→V38). Não altera
classes, IDs, dados, cálculos, persistência, IndexedDB, Service Worker ou
qualquer comportamento — apenas a apresentação.

## Conceito visual
Cruzamento de Airbnb (clareza, cartões flutuantes, sombras leves), Apple
Human Interface (hierarquia, respiro, foco no conteúdo), hotel boutique
(tipografia serifada em destaques, calor) e natureza/cabana premium
(verde floresta, bege quente, textura quase imperceptível). Gamificação
elegante: conquistas, streaks e badges mantidos, porém sóbrios — sem
aparência infantil.

## Paleta
Reaproveita a base já existente (`--ink`, `--paper`, `--paper-card`,
`--pine`, `--pine-dark`, `--rust`, `--moss`, `--gold`), dessaturada para
alto contraste sem cores vivas:
- Bege quente: `--paper` (#e5dfcf) / textura de fundo em pontos discretos
- Branco suave: `--paper-card` (#f8f5ec) e branco puro em cards/modais
- Verde floresta: `--pine` / `--pine-dark` (sidebar, ações primárias)
- Dourado fosco: `--gold` (destaques, foco, conquistas)
- Cinza pedra: `--stone` / `--stone-soft` (trilhos, texto secundário)
- Terracota (dano/alerta): `--rust`, mantido dessaturado

Cores ligadas a status dinâmicos gerados via JavaScript (hoje, atraso,
ausência etc.) foram preservadas exatamente para não gerar divergência
entre o HTML estático e as classes aplicadas via script.

## Tipografia
- Corpo e UI: IBM Plex Sans (inalterado, sem redução de tamanho)
- Números/dados: IBM Plex Mono (inalterado)
- Destaques (título da cabana, modais, conquistas, títulos de dia):
  **Fraunces** (serifada, peso 600) substitui a antiga Fjalla One
  condensada, trazendo o tom boutique.

## Espaçamentos
Padronizados via tokens: `--main` 34/40px (desktop), 20/16px (mobile);
cartões e modais com padding consistente (18–30px conforme contexto).

## Hierarquia de raio e sombra
- `--r-sm` 12px (inputs, botões, tabs)
- `--r-md` 18px (toasts, chips, tabelas)
- `--r-lg` 26px (modais, calendário)
- `--r-xl` 32px (moldura do app)
- `--r-pill` cápsula (badges, barra de progresso)
- `--shadow-1/2/3`: sombras muito leves e difusas, inspiradas no Airbnb
  (sem escurecer o fundo, apenas sugerir elevação)

## Fundo
Textura de pontos duplos em baixa opacidade (~5%), gerada por CSS
(`radial-gradient`), sem imagens — impacto zero em performance.

## Microinterações
Hover com leve elevação (`translateY(-1px)`) e sombra suave; pressed com
`scale(0.98)`; fade e transições curtas (150–180ms). Tudo respeita
`prefers-reduced-motion: reduce` (transições e animações neutralizadas
globalmente dentro do app).

## Princípios
1. Reconhecimento imediato: mesma estrutura, mesmos ícones e fluxos.
2. Nunca infantil: sem cores saturadas, sem formas exageradas.
3. Mobile-first: testado sem rolagem horizontal em 320–430px.
4. Zero risco funcional: camada 100% aditiva em CSS, sem tocar em
   lógica, dados ou armazenamento.
