# Dashboard Premium

Componente oficial do Design System v39. Moderniza a aparência do painel administrativo seguindo padrões de Airbnb, Apple e hotel boutique, com gamificação elegante e visual profissional.

## Estrutura geral

O Dashboard Gerencial preserva toda a lógica operacional (cálculos, filtros, indicadores, tabelas, gráficos, histórico, PDF e regras de acesso) e moderniza apenas a hierarquia visual, espaçamento, agrupamento e legibilidade.

### Seções principais

1. **Cabeçalho** — período, filtros, exportação
2. **Indicadores** — resumo operacional em cards
3. **Tabela de desempenho** — cabanas e status
4. **Histórico diário** — linha do tempo de limpezas
5. **Ocorrências** — incidentes do período
6. **Gráficos** — limpezas e tempo por dia
7. **Meta mensal** — destaque quando aplicável
8. **Modais** — detalhamento e complementos

Nenhuma seção foi removida. A ordem lógica das informações é mantida, com ajustes apenas para melhor legibilidade.

## Cabeçalho do Dashboard

Modernizado visualmente com:

- **Título e subtítulo**: hierarquia clara, uso de tipografia de título
- **Seletor de período**: espaçamento consistente
- **Datas personalizadas**: campo legível sem truncamento
- **Botão Exportar relatório em PDF**: Premium Button `.cc-btn-primary`
- **Botão fechar**: ícone discreto `✕` com foco visível

### Responsividade

**Mobile (< 640px)**:
- Controles empilhados verticalmente
- Campos ocupam largura disponível (100%)
- Sem sobreposição
- Botões com altura mínima de 48px
- Foco visível em todos os elementos interativos

**Desktop**:
- Organização horizontal quando houver espaço
- Botões ao lado dos campos
- Densidade equilibrada

## Cards de indicadores

Implementado via classe `.cc-dashboard-metric`, reutilizando `.cc-card` base:

```html
<div class="cc-card cc-dashboard-metric cc-dashboard-metric-success">
  <div class="cc-dashboard-metric-icon">🏠</div>
  <div class="cc-dashboard-metric-label">Cabanas limpas</div>
  <div class="cc-dashboard-metric-value">12</div>
  <div class="cc-dashboard-metric-desc">de 15 agendadas</div>
</div>
```

Cada card apresenta:

- Ícone discreto (emoji ou SVG, 24px)
- Rótulo (texto pequeno, cor neutra)
- Valor principal (número grande, legível)
- Descrição curta quando existente (texto auxiliar)
- Hierarquia clara com espaçamento consistente

### Variantes

| Classe | Uso |
|---|---|
| `.cc-dashboard-metric-neutral` | Informação neutra, sem conotação |
| `.cc-dashboard-metric-success` | Métricas positivas ou completas |
| `.cc-dashboard-metric-warning` | Atenção, pendências suaves |
| `.cc-dashboard-metric-danger` | Alertas, ocorrências críticas |
| `.cc-dashboard-metric-highlight` | Destaque especial (meta ativa) |

**Não diferenciamos apenas por cor**. Cada variante também usa:

- Ícone apropriado
- Rótulo descritivo
- Borda ou selo visual sutil
- Sem exagero de cores

### Valores principais

Garantias de formatação:

- Números grandes e legíveis (font-size: 28–32px)
- Tempo formatado sem quebra ruim (ex: "2h 34m" em uma linha)
- Porcentagens destacadas (ex: "87%")
- Valores ausentes como "—" (nunca vazio)
- Textos longos quebram corretamente sem corte
- Fonte nunca reduzida a ponto de perder legibilidade

## Resumo do período

Indicadores organizados em grupos visuais claros:

1. **Operação**: cabanas limpas, atrasadas, pendentes
2. **Tempo**: total, médio, máximo
3. **Ocorrências**: danos, pontos críticos, alertas
4. **Meta e desempenho**: percentual, sequência, conquistas

Nenhuma aba ou ocultação de informação. Títulos de seção discretos quando necessário (ex: "Operação", "Tempo").

## Tabela de desempenho por cabana

Preserva integralmente lógica e ordenação.

Melhorias visuais:

- **Cabeçalho**: fundo sutil, texto enfatizado, alinhamento claro
- **Linhas**: padding consistente, separação clara
- **Zebra discreta**: apenas se for muito clara (opcional)
- **Hover (desktop)**: leve elevação ou mudança de fundo
- **Responsividade**:
  - Desktop: grade normal
  - Tablet: ajuste de largura
  - Mobile: rolagem horizontal **interna à tabela** (não gera scroll na página inteira)

Valores alinhados à direita (números). Célula de cabana mais legível com nome completo.

**Não transformado em cartões nesta sprint.**

## Histórico diário

Preserva:
- Linhas clicáveis
- Botão "Mostrar mais"
- Modal de detalhamento
- Ordenação

Melhorias visuais:

- Separação das linhas clara (borda sutil ou espaçamento)
- Status visual apropriado (ícone + cor)
- Datas legíveis (formato "01 de ago" ou "01/08")
- Indicadores bem alinhados
- Feedback de clique visível (transição suave)

**Mobile**: rolagem horizontal apenas dentro da tabela, não na página inteira.

## Ocorrências do período

Preserva toda a lógica.

Modernização:

- **Cabeçalho**: hierarquia clara
- **Linhas**: espaçamento, alinhamento, status
- **Descrições**: texto completo, quebras naturais
- **Quantidade de fotos**: indicador discreto
- **Ação de visualizar**: botão ou link com foco visível

Estado de atenção elegante. Não exageramos em vermelho. Imagens não são carregadas completas na tabela (apenas miniaturas).

## Gráficos

Preservam cálculos completamente.

Modernização:

- **Título**: tipografia clara
- **Área do gráfico**: espaçamento limpo
- **Rótulos**: legíveis (datas, valores)
- **Barras**:
  - Limpezas: verde principal (`var(--pine)`)
  - Tempo: dourado/verde escuro (`var(--gold)` ou `#6b8045`)
  - Cantos arredondados
  - Largura consistente
  - Transição suave
- **Legenda textual**: descrição clara
- **Rolagem horizontal**: preservada quando necessário
- **Cores consistentes**: com paleta da aplicação

Não adicionamos bibliotecas. Não criamos animações pesadas. Estrutura Canvas/SVG mantém.

## Barras dos gráficos

Padrão visual:

- Cantos arredondados (`border-radius: 2px`)
- Largura consistente (ex: 6–8px entre barras)
- Transição suave (`transition: all 0.3s ease`)
- Valor zero: sem barra visível
- Valor positivo pequeno: ainda legível (altura mínima 3–4px)

Não modificamos valores ou lista de dias.

## Meta mensal

**Quando visível no mês atual**:

Destaque premium sem exagero usando `.cc-card .cc-card-highlight`:
- Percentual bem legível
- Sequência atual e melhor sequência organizadas
- Conquistas desbloqueadas preservadas

**Quando o período não for o mês atual**:

Preservamos a ocultação existente (nenhuma lógica mudou).

## Estado sem dados

Padronização:

- Mensagem: "Sem dados no período."
- Card neutro ou área vazia elegante
- Nunca mostramos gráfico quebrado
- Nunca mostramos tabela vazia com cabeçalhos desnecessários quando há lógica de ocultação
- Regra de exibição preservada

## Modal de detalhamento do dia

Preserva conteúdo completamente em somente leitura.

Modernização visual:

- **Cabeçalho**: Premium Modal Header
- **Status**: cor e ícone apropriados
- **Resumo**: hierarquia clara
- **Cabanas**: listagem legível
- **Tempos**: formatação consistente
- **Ocorrências**: descrição + miniaturas
- **Botão fechar**: ícone `✕` com foco visível

Uso de Premium Cards internamente quando houver blocos independentes. Nenhum cálculo foi alterado.

## Modal de ocorrência

Preserva descrição e miniaturas completamente.

Melhorias:

- **Hierarquia**: título, descrição, fotos claramente separados
- **Espaçamento**: padding e gap consistentes
- **Legibilidade**: font-sizes apropriadas
- **Botão fechar**: acessível
- **Miniaturas**: organizadas em linha (flex), com gap
- **Comportamento**: somente leitura (nenhuma edição)

## PDF gerencial

Não foi alterado. Geração, conteúdo, paginação, margens e lógica preservados. Botão usa Premium Button `.cc-btn-primary`.

## Responsividade

### Mobile (≤ 640px)

Prioridade máxima. Validado em:
- 320px (iPhone SE)
- 360px (Galaxy A12)
- 390px (iPhone 12)
- 412px (Pixel 4)
- 430px (iPhone 14)

Garantias:

- Uma coluna para cards
- Filtros empilhados
- Tabelas com rolagem **interna** (não externaliza scroll da página)
- Gráficos com rolagem **interna**
- Sem rolagem horizontal da página inteira
- Botão fechar sempre acessível (canto superior direito)
- Textos legíveis (font-size mínimo 14px)
- Valores grandes sem corte
- Altura mínima de toque: 48px

### Tablet (641px — 1024px)

- Duas colunas quando houver espaço
- Tabelas legíveis com ajuste de largura
- Gráficos organizados com padding apropriado

### Desktop (> 1024px)

- Grade equilibrada
- Boa densidade (não desperdiça espaço)
- Cards não excessivamente largos (máx 400–500px quando em duas colunas)
- Gráficos lado a lado quando já houver estrutura compatível
- Nenhum layout complexo introduzido

## Acessibilidade

Garantias:

- **Foco visível**: todos os botões e links com `:focus-visible` (contorno dourado 3px)
- **Tabelas**: cabeçalhos semânticos (`<th>`)
- **Linhas clicáveis**: acessíveis via `role="button"` ou `<button>` quando apropriado
- **Contraste**: conforme WCAG AA (mínimo 4.5:1 para texto pequeno)
- **Ícones**: acompanhados por texto ou `aria-label` (não dependem só de cor/ícone)
- **Cores**: não são a única forma de comunicar status (também usamos ícone, borda, texto)
- **Redução de movimento**: `@media (prefers-reduced-motion: reduce)` remove transições e transformações
- **ARIA existente**: nenhum atributo foi removido

## Segurança da implementação

Alterações seguras:

- CSS do Dashboard (novas classes, espaçamento)
- Classes visuais necessárias (`.cc-dashboard-metric`, `.cc-dashboard-metric-*`)
- Marcação mínima necessária (nova div/span para layout, mantendo o DOM semântico)

Preservação total:

- Função `computePeriodSummary()`
- Filtros (período, datas personalizadas)
- Ordenadores (lógica de coluna)
- Renderização de dados (nenhuma cópia ou transformação)
- Cálculos (indicadores, totais, médias)
- Histórico (recuperação, exibição)
- Ocorrências (lógica, contagem)
- Gráficos (dados, geração Canvas)
- PDF (jsPDF, conteúdo)
- Eventos (cliques, modais)
- Persistência (IndexedDB, autosave)

## Combinação com Premium Buttons e Premium Cards

O Dashboard usa:

1. **Premium Buttons** (`.cc-btn-primary`, `.cc-btn-secondary`) no cabeçalho e modais
2. **Premium Cards** (`.cc-card`, `.cc-card-flat`, `.cc-card-highlight`) para indicadores e blocos de resumo
3. **Tipografia** do Design System (Fjalla One para títulos, Rubik para corpo)
4. **Cores** da paleta unificada (pine, rust, gold, moss)
5. **Espaçamento** consistente (8px, 12px, 16px, 20px, 26px)

Nenhum componente premium foi removido. A combinação é aditiva e mantém a consistência.

## Documentação do código

Todas as classes `.cc-dashboard-*` e variações estão comentadas no CSS do index.html com:

- Propósito
- Responsividade
- Estados (hover, focus)
- Compatibilidade com componentes existentes

Modais novos seguem o padrão `.cc-modal` + `.cc-admin-panel` existente.

## Conclusão

O Dashboard Premium é o quinto componente oficial do Design System (após Foundations, Buttons, Cards e Calendar). Moderniza visualmente o painel administrativo mantendo 100% da funcionalidade, lógica operacional e compatibilidade com a PWA offline.
