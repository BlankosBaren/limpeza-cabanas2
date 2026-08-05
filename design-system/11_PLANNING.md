# Central de Planejamento

Seção administrativa do Design System v41. Fornece análise de carga operacional para o dia seguinte baseada em histórico registrado.

## Visão geral

Central de Planejamento calcula automaticamente a carga de trabalho prevista para amanhã usando:

- Schedule (programação do dia seguinte)
- Histórico de durações por cabana
- Quantidade de cômodos por cabana

Todos os dados são calculados em tempo real, sem gravação no banco.

Acessível via botão `📅 Planejamento` no modo administrativo.

## Indicadores calculados

### 1. Data e carga prevista

**Origem**: data do sistema e cálculos abaixo.

**Cálculo**: determina o dia seguinte e classifica a carga em 5 níveis.

**Exibição**: card destacado com data, nível de carga em cores (verde → vermelho), recomendação e aviso de baseamento histórico.

### 2. Quantidade de cabanas programadas

**Origem**: `state.schedule[tomorrowStr]` array de cabana IDs.

**Cálculo**: conta quantas cabanas estão na programação de amanhã.

**Exibição**: número grande (24–32px) em card neutro.

**"Sem dados suficientes"**: quando não houver programação para amanhã.

### 3. Tempo total previsto para amanhã

**Origem**: soma do tempo médio histórico de cada cabana programada.

**Cálculo**:
1. Para cada cabana na programação de amanhã:
   - Busca todas as durações registradas no histórico (dias/comodos)
   - Calcula a média de duração
2. Soma todas as médias

**Exibição**: em minutos (ex: "240min").

**"Sem dados suficientes"**: quando as cabanas não tiverem histórico de duração.

### 4. Quantidade prevista de cômodos

**Origem**: quantidade de cômodos por cabana (fixo em 3 neste aplicativo).

**Cálculo**: quantidade de cabanas programadas × 3.

**Exibição**: número (ex: "12").

### 5. Classificação automática de carga

**Origem**: tempo total previsto.

**Cálculo**:
- Tempo < 60 min → **Muito Baixa** (recomendação: "Planejamento confortável.")
- Tempo 60–120 min → **Baixa** (recomendação: "Planejamento confortável.")
- Tempo 120–240 min → **Média** (recomendação: "Planejamento normal.")
- Tempo 240–360 min → **Alta** (recomendação: "Recomenda-se iniciar cedo.")
- Tempo ≥ 360 min → **Muito Alta** (recomendação: "Alta carga prevista.")

**Exibição**: rótulo em cor apropriada (pine para baixa, gold para média, rust para alta).

**Cores**:
- Muito Baixa/Baixa: `var(--pine)` (verde)
- Média: `var(--gold)` (dourado)
- Alta/Muito Alta: `var(--rust)` (terracota)

### 6. Recomendação automática

**Origem**: classificação de carga acima.

**Geração**: não utiliza IA, apenas regras simples baseadas em faixas de tempo.

**Mensagens**:
- Muito Baixa: "Planejamento confortável."
- Baixa: "Planejamento confortável."
- Média: "Planejamento normal."
- Alta: "Recomenda-se iniciar cedo."
- Muito Alta: "Alta carga prevista."

**Rodapé**: "As estimativas são baseadas no histórico registrado."

### 7. Lista de cabanas programadas

**Origem**: cada cabana na programação de amanhã.

**Exibição**: tabela com:
- Nome da cabana
- Tempo médio histórico em minutos (entre parênteses como "(xxx min - média)")

**Ordem**: conforme a programação.

## Estrutura de dados (input)

Lê apenas de:

```javascript
{
  schedule: {
    "YYYY-MM-DD": ["cabana-id-1", "cabana-id-2", ...]
  },
  cabanas: {
    "cabana-id": {
      nome: "string",
      dias: {
        "YYYY-MM-DD": {
          comodos: {
            "comodo-id": {
              duracao: number (segundos)
            }
          }
        }
      }
    }
  }
}
```

## Sem gravação no banco

Nenhum indicador é persistido. Todos os cálculos acontecem em memória. IndexedDB não é alterado, backup não é tocado.

## Responsividade

### Mobile (≤ 640px)

- Card de carga destacado no topo
- Cards de métricas em até 2 colunas
- Tabela de cabanas com overflow-x interno
- Padding reduzido, mantendo legibilidade

### Tablet/Desktop

- Card de carga destacado no topo
- Cards de métricas em até 3 colunas
- Tabela legível com espaçamento normal

## Acessibilidade

- Card principal usa `.cc-card-highlight` do Design System
- Cards de métricas usam `.cc-card-flat`
- Contraste adequado (WCAG AA)
- Cores não são único indicador (também textos e números)
- Foco visível no botão "📅 Planejamento"
- Nenhum ARIA existente foi removido

## Preservação completa

Nada foi alterado em:

- Checklist Premium
- Calendário Premium
- Cronômetros
- Fotos e ocorrências
- Escala de trabalho
- Programação (schedule) — apenas lida
- Conquistas e gamificação
- Backup e restauração
- Dashboard Gerencial
- Analytics Operacional
- Senha master
- Armazenamento offline e PWA
- IndexedDB e persistência

## Combinação com componentes

Central de Planejamento usa:

1. **Premium Cards** (`.cc-card-highlight`, `.cc-card-flat`)
2. **Dashboard Premium** — integrada ao painel administrativo
3. **Analytics Premium** — acesso ao histórico de dados
4. **Tipografia** do Design System (Fjalla One para títulos, Rubik para corpo)
5. **Cores** da paleta (pine, rust, gold)
6. **Espaçamento** consistente (8px, 12px, 16px, 20px)

## Integração com modo administrativo

Acessado via botão no painel administrativo (entre Dashboard e sair). Botão aparece apenas quando `adminMode === true`.

Botão: `📅 Planejamento`
Função: `openPlanning()`
Modal: `ccPlanningOverlay`

## Tratamento de casos limite

### Sem programação para amanhã

Exibe: "Sem dados suficientes para amanhã"
Card neutro
Nenhum indicador é calculado

### Programação existe, mas cabanas sem histórico

Exibe a quantidade de cabanas programadas
Tempo total = 0 (soma de vazios)
Carga = "Muito Baixa"
Recomendação: "Planejamento confortável."

Aviso em rodapé é mantido: "As estimativas são baseadas no histórico registrado."

### Data muda (reinicialização)

Cálculos são feitos sempre para o dia seguinte (tomorrow = hoje + 1 dia).
Se abrir à meia-noite, mostra dados de amanhã.

## Versão atual

v41. Todos os 6 indicadores implementados e funcionais.

## Futuras expansões (v42+)

- Filtro de período para análise histórica de cargas
- Gráfico de tendência semanal de carga
- Comparação com dias anteriores
- Alertas de picos de carga
- Sugestões de redistribuição de cabanas
