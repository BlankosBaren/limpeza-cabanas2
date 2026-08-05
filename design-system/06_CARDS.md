# Cards

Componente base: `.cc-card`. Aplicado de forma aditiva sobre os containers já existentes (`.cc-mission-card`, `.cc-goal-card`, `.cc-streak-chip`, `.cc-room-card`, `.cc-admin-card`, `.cc-ach-card`, `.cc-admin-backup-summary`, `.cc-day-complete-stat`), sem remover suas classes ou lógica originais.

## Componente base — `.cc-card`
Fundo `#fffbf1`, texto `#2e2b26`, borda sutil, `border-radius: 20px`, `padding: 18px` e sombra leve em duas camadas (difusa + próxima). Transições suaves em sombra, borda e transformação.

## Variantes
| Classe | Uso |
|---|---|
| `.cc-card-flat` | Sem elevação, apenas borda discreta — sequência, resumos, cartões administrativos |
| `.cc-card-raised` | Elevação premium para dar mais destaque quando necessário |
| `.cc-card-interactive` | Cartões clicáveis (ex.: cartão de área/cômodo) |
| `.cc-card-success` | Estado concluído (ex.: conquista desbloqueada) |
| `.cc-card-warning` | Pendência ou atenção |
| `.cc-card-danger` | Ocorrência ou dano |
| `.cc-card-muted` | Informação secundária ou bloqueada (ex.: conquista bloqueada) |
| `.cc-card-highlight` | Missão do dia e meta mensal — destaque principal da tela |

## Quando usar
Em blocos que já são unidades independentes de conteúdo: missão do dia, meta mensal, cartões de sequência, resumo de backup, estatísticas do modal "dia concluído", cartões de área/cômodo, cartões administrativos e cartões de conquistas.

## Quando não usar
Linhas de checklist, botões, células de calendário, campos de formulário, modais inteiros, elementos decorativos, e qualquer elemento do calendário, do checklist, do Dashboard (tabelas/gráficos) ou da programação — esses permanecem fora do escopo desta sprint.

## Estados
- **Sucesso**: fundo verde muito claro, borda verde discreta, texto em tom verde escuro (usado nas conquistas desbloqueadas).
- **Atenção**: fundo dourado muito claro, borda dourada discreta.
- **Perigo**: fundo terracota muito claro, borda terracota discreta.
- **Bloqueado**: fundo neutro com texto legível, sem depender apenas de opacidade baixa (usado nas conquistas bloqueadas, que também mantêm o rótulo "Bloqueada").

## Interações (`.cc-card-interactive`)
- **Hover**: leve elevação e borda mais nítida, sem deslocamento exagerado.
- **Pressed**: `translateY(1px) scale(0.995)` com sombra reduzida.
- **Focus**: contorno dourado de 3px, sempre visível via `:focus-visible`.
- Aplicado apenas a cartões já clicáveis (ex.: cartão de área/cômodo); cartões decorativos não recebem esse comportamento.

## Responsividade
Até 640px: `border-radius` reduzido para 16px, `padding` entre 14–16px, sombras mais discretas — sem alterar a largura total disponível nem gerar rolagem horizontal. Em desktop/tablet, a densidade e as grades existentes são preservadas.

## Acessibilidade
- Contraste mantido em todas as variantes.
- Foco visível em cartões interativos via `:focus-visible`.
- `@media (prefers-reduced-motion: reduce)` remove transições e transformações de hover/pressed.
- Nenhum atributo ARIA existente foi removido.

## Exemplos de combinação com os botões da V35
Um cartão `.cc-card .cc-card-highlight` (missão do dia) pode conter um botão `.cc-btn .cc-btn-primary` como ação principal, e um cartão `.cc-card .cc-card-flat` (resumo de backup) pode ser seguido por `.cc-btn .cc-btn-secondary` (cancelar) e `.cc-btn .cc-btn-primary` (confirmar), mantendo consistência visual entre os dois componentes do Design System.
