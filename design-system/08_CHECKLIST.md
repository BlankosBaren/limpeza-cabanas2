# Checklist Premium

Componente base: `.cc-checklist-item`, aplicado de forma aditiva sobre a linha de tarefa já existente (`.cc-item`), o checkbox (`.cc-check`) e o botão de dano (`.cc-damage-btn`). Não altera IDs, eventos, persistência, cálculos de progresso/cronômetro nem regras de conclusão, dano ou foto.

## Estrutura da tarefa
Cartão leve: `border-radius: 15px` (14px em telas ≤640px), borda discreta, fundo `#fffbf1`, sombra mínima, espaçamento `11px 13px`, transição suave em fundo/borda.

## Estados visuais
| Classe | Uso | Estilo |
|---|---|---|
| `.cc-checklist-item-pending` | Pendente | Fundo branco suave, pronta para execução |
| `.cc-checklist-item-completed` | Concluída | Fundo verde muito claro, borda verde suave, texto com opacidade 0,72 (nunca ilegível) |
| `.cc-checklist-item-damaged` (com `.has-damage`) | Danificada | Fundo e borda terracota suave; diferenciação também por texto ("Danificado ⚠") e botão ativo, nunca só por cor |
| `.cc-checklist-item-readonly` | Amanhã / dia concluído | Fundo neutro sutil; preserva integralmente a regra de bloqueio já existente (`.cc-locked`) |

## Checkbox Premium
`.cc-checklist-check` mantém o elemento original (`.cc-check`, com `data-toggle`), ampliando a área de toque para ~44px via `::before` (não altera o hit-test, que continua no próprio elemento) e o visual (22px, cantos 6px). Estado concluído reaproveita a marca `::after` original com nova posição. `:focus-visible` com contorno dourado de 3px. Estado desabilitado (`.cc-checklist-check-disabled`, aplicado quando o dia está bloqueado) com cursor `not-allowed`.

## Botão Danificado
Mantém `.cc-damage-btn` e o atributo `data-damage` (evento inalterado). Quando ativo (`flagged`), recebe também a variante oficial `.cc-btn-danger` (V35), com `min-height` maior e foco visível. Quando inativo, mantém a aparência discreta já existente (contorno terracota).

## Cartões dos cômodos
Nenhuma alteração de estrutura — os cartões continuam usando `.cc-room-card .cc-card .cc-card-interactive` (V36), sem redesenho nem mudança de cálculo de progresso.

## Cabeçalho do cômodo
`.cc-checklist-room-head` permite quebra de linha (`flex-wrap`) no celular, evitando corte de nomes ou sobreposição entre ícone, cronômetro e título. Título reduzido para 21px e ícone para 38px em telas ≤640px.

## Progresso
`.cc-checklist-progress` apenas aumenta a altura da barra (12px) e arredonda o preenchimento — o cálculo de porcentagem e a animação de largura já existentes não foram tocados.

## Texto longo
`.cc-checklist-item-label` usa `overflow-wrap: anywhere` e `line-height: 1.4` para quebrar textos longos sem truncamento nem sobreposição.

## Mobile
Em ≤640px o botão Danificado ocupa a largura total quando cai para a segunda linha (sem depender de `margin-left`), sem rolagem horizontal, sem sobrepor checkbox, texto ou ações administrativas.

## Somente leitura (amanhã)
A regra `.cc-locked` original (pointer-events e opacidade dos controles) foi integralmente preservada; `.cc-checklist-item-readonly` apenas suaviza o fundo do cartão para que o texto continue legível.

## Acessibilidade
Contraste mantido em todos os estados, foco visível no checkbox e no botão de dano, estados nunca dependem só de cor (ícone/texto acompanham), `prefers-reduced-motion` remove transições. Nenhum atributo ARIA/tabindex existente foi removido; nenhum novo comportamento de teclado foi adicionado (o checklist não era navegável por teclado antes desta sprint e continua assim).
