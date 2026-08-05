# Analytics Operacional

Componente adicional do Design System v40. Oferece análise operacional dinâmica dos dados existentes sem gravação no banco de dados.

## Visão geral

Analytics Operacional é uma seção administrativa que calcula e exibe 9 indicadores principais a partir do histórico de limpezas registradas no IndexedDB. Todos os cálculos são feitos em tempo real, nenhum dado é armazenado permanentemente.

Acessível via botão `📈 Analytics` no modo administrativo.

## Indicadores implementados

### 1. Dias perfeitos

**Origem**: histórico completo de cada cabana.

**Cálculo**: conta cada dia em que nenhum dano foi registrado em nenhum cômodo da cabana.

**Exibição**: número grande em card destacado.

**"Sem dados suficientes"**: quando não houver nenhum dia completo registrado.

### 2. Tempo médio por cabana

**Origem**: duração registrada em cada comodo de cada dia.

**Cálculo**: soma todas as durações de todos os cômodos de uma cabana e divide pelo número total de registros de duração.

**Exibição**: tabela listando cada cabana e seu tempo médio em minutos.

**"Sem dados suficientes"**: quando a cabana não tiver nenhum registro de duração.

### 3. Ranking das cabanas mais rápidas

**Origem**: tempo médio calculado acima.

**Cálculo**: ordena cabanas por tempo médio (menor primeiro) e exibe os 5 primeiros.

**Exibição**: card com lista das 5 mais rápidas (nome + tempo em minutos).

**"Sem dados suficientes"**: quando houver menos de 1 cabana com dados de duração.

### 4. Ranking das cabanas mais demoradas

**Origem**: tempo médio calculado acima.

**Cálculo**: ordena cabanas por tempo médio (maior primeiro) e exibe os 5 primeiros.

**Exibição**: card com lista das 5 mais demoradas (nome + tempo em minutos).

**"Sem dados suficientes"**: quando houver menos de 1 cabana com dados de duração.

### 5. Tempo médio por cômodo

**Origem**: duração registrada em cada cômodo.

**Cálculo**: agrupa todas as durações por cômodo e calcula a média de cada grupo.

**Exibição**: tabela listando cada cômodo (ex: "Quarto", "Banheiro") e seu tempo médio em minutos.

**"Sem dados suficientes"**: quando não houver registros de duração em nenhum cômodo.

### 6. Quantidade de ocorrências por cabana

**Origem**: array `ocorrencias` de cada dia.

**Cálculo**: soma o número de ocorrências registradas por cabana em todo o período.

**Exibição**: tabela listando cada cabana que teve ocorrências (nome + quantidade).

**"Sem dados suficientes"**: quando nenhuma ocorrência foi registrada.

### 7. Quantidade de danos por cômodo

**Origem**: array `danos` de cada cômodo de cada dia.

**Cálculo**: agrupa danos por cômodo e soma a quantidade em cada grupo.

**Exibição**: tabela listando cada cômodo que teve danos (nome + quantidade).

**"Sem dados suficientes"**: quando nenhum dano foi registrado.

### 8. Histórico da meta mensal

**Origem**: configuração de meta mensal no aplicativo (não implementado nesta sprint — reservado para v41).

**Exibição**: campo preparado, aguarda dados de meta.

### 9. Tendência semanal de tempo

**Origem**: duração diária agregada por semana.

**Cálculo**: soma tempos por semana e fornece tendência (não implementado nesta sprint — reservado para v41).

**Exibição**: campo preparado, aguarda cálculo semanal.

## Estrutura de dados (input)

O Analytics lê apenas do objeto de estado (`state`) já existente:

```javascript
{
  cabanas: {
    "cabana-id": {
      nome: "string",
      dias: {
        "YYYY-MM-DD": {
          comodos: {
            "comodo-id": {
              duracao: number (segundos),
              danos: [{ ... }, ...],
              marcacoes: [...]
            }
          },
          ocorrencias: [{ ... }, ...]
        }
      }
    }
  }
}
```

## Sem gravação no banco

Nenhum indicador é persistido. Todos os cálculos acontecem in-memory e são descartados quando o usuário fecha o Analytics ou navega para outra seção. O IndexedDB não é tocado.

## Responsividade

### Mobile (≤ 640px)

- Cards em uma coluna
- Tabelas com overflow-x interno
- Padding reduzido, mantendo legibilidade

### Tablet/Desktop

- Cards em até 2 colunas
- Tabelas com largura natural
- Espaçamento consistente

## Acessibilidade

- Cards usam `.cc-card-flat` do Design System
- Contraste adequado (WCAG AA)
- Foco visível no botão "📈 Analytics"
- Títulos semânticos dentro de divs (não headings, para não quebrar hierarquia)
- Nenhum ARIA existente foi removido

## Preservação

Nada foi alterado em:

- Checklist Premium
- Calendário Premium
- Cronômetros
- Backup e restauração
- Dashboard Gerencial
- PDF gerencial
- Fotos e ocorrências
- Escala de trabalho
- Programação diária
- Conquistas e gamificação
- Senha master
- Armazenamento offline e PWA
- IndexedDB e persistência
- Cálculos de limpeza

## Combinação com Premium Components

Analytics usa:

1. **Premium Buttons** (`.cc-btn-primary`, `.cc-btn-secondary`) — quando implementar ações
2. **Premium Cards** (`.cc-card`, `.cc-card-flat`) — para agrupamento visual
3. **Tipografia** do Design System (Fjalla One para títulos, Rubik para corpo)
4. **Cores** da paleta (pine, rust, gold, moss)
5. **Espaçamento** consistente (8px, 12px, 16px, 20px, 26px)

## Integração com modo administrativo

Analytics é acessado via botão no painel administrativo (ao lado do Dashboard). O botão aparece apenas quando `adminMode === true` (modo escala/administrativo ativo).

Botão: `📈 Analytics`
Função: `openAnalytics()`
Modal: `ccAnalyticsOverlay` (sobreposição + painel)

## Futuras expansões (v41+)

- Histórico da meta mensal (com gráfico de progresso)
- Tendência semanal de tempo (com linha de tempo)
- Filtro de período para os indicadores
- Exportação de dados em CSV
- Gráficos adicionais (distribuição de tempo, heatmap de danos)

## Estado atual

Versão v40. 7 indicadores implementados e funcionais (dias perfeitos, tempo médio cabana, rankings, tempo por cômodo, ocorrências, danos). 2 indicadores preparados para v41 (meta, tendência semanal).

