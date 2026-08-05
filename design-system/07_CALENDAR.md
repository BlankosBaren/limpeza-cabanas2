# Calendário Premium

Componente base: `.cc-calendar-day`, aplicado de forma aditiva sobre a célula já existente (`.cc-cal-cell`), sem remover suas classes, sem alterar `computeDayStatus`, `scheduledCabins`, `selectedDate` ou as regras de acesso.

## Componente base — `.cc-calendar-day`
Cartão leve: `border-radius: 16px` (14px em telas ≤640px), borda discreta, fundo `#fffbf1`, sombra mínima (sem sombras pesadas), transição suave em borda/sombra/fundo. Mantém `aspect-ratio: 1` no desktop e altura fixa confortável no mobile (herdado de `.cc-cal-cell`).

## Estados visuais
| Classe | Uso | Estilo |
|---|---|---|
| `.cc-calendar-day-today` | Dia atual | Borda verde escura 2px, fundo verde muito claro, selo "Hoje" |
| `.cc-calendar-day-selected` | Dia selecionado (reservado para uso futuro em grade) | Borda dourada 2px + anel de foco |
| `.cc-calendar-day-today.cc-calendar-day-selected` | Combinação sem conflito | Anel duplo (fundo verde + anel dourado), sem sobrepor a borda |
| `.cc-calendar-day-readonly` | Amanhã (consulta) | Borda tracejada azul, fundo azul muito suave, selo "Amanhã", ícone de olho (já existente) |
| `.cc-calendar-day-future.cc-calendar-day-locked` | Datas futuras bloqueadas | Fundo neutro claro, texto legível, ícone de cadeado (já existente) |
| `.cc-calendar-day-completed` | Concluído | Fundo verde suave, número sempre visível |
| `.cc-calendar-day-pending` | Incompleto | Fundo terracota suave |
| `.cc-calendar-day-dayoff` | Folga | Fundo verde acinzentado suave |
| `.cc-calendar-day-no-cleaning` | Sem limpeza | Fundo neutro/bege suave |
| `.cc-calendar-day-absence-justified` | Ausência justificada | Fundo dourado suave |
| `.cc-calendar-day-absence-unjustified` | Ausência não justificada | Fundo terracota suave (mais forte que pendente) |

Todos os estados também preservam o ícone e o texto operacional já existentes (`.cc-cal-icon-wrap`, `.cc-cal-label`), portanto nenhum estado depende só da cor.

## Hierarquia interna do dia
1. Número do dia no topo (`.cc-cal-daynum`), sempre visível.
2. Ícone/status ao centro (`.cc-cal-icon-wrap`).
3. Selo "Hoje"/"Amanhã" no canto superior (`.cc-calendar-badge`) — somente em telas >640px, para nunca sobrepor o `.cc-cal-dot` (canto que passa a absoluto no mobile).
4. Dot de progresso (`.cc-cal-dot`) discreto.

## Cabeçalho
`.cc-cal-nav`, `.cc-cal-month-label`, `.cc-cal-nav-btn` e `.cc-cal-today-btn` já seguem os Premium Buttons (V35); layout, área de toque (44px) e navegação entre meses preservados integralmente.

## Responsividade
- 320–430px: sete colunas, sem rolagem horizontal, `border-radius` 14px, selo textual oculto (ícone central já comunica o estado).
- Tablet (641–1024px): densidade intermediária preservada (`gap` e fontes já existentes).
- Desktop: largura máxima já limitada pelas regras V16; `.cc-calendar-day` não aumenta células além do já definido.

## Interações
Hover (`:hover`) só produz efeito com mouse (`@media (hover: none)` neutraliza em touch); pressed usa `translateY(1px)`; foco usa `:focus-visible` com contorno dourado de 3px. Nenhum listener novo foi adicionado — tudo via CSS.

## Acessibilidade
Contraste mantido, foco visível, estados nunca dependem só de cor (ícone + texto + fundo), `tabindex`/ARIA existentes preservados, `@media (prefers-reduced-motion: reduce)` remove transições/transform.

## Regras preservadas (não alteradas nesta sprint)
Hoje disponível para a funcionária; amanhã clicável somente para consulta (nunca parecendo desabilitado); datas futuras bloqueadas; administrador com acesso total; folgas, ausências e "sem limpeza" com os ícones/textos operacionais originais.
