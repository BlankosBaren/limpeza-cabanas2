# Foundations

## Propósito do aplicativo
Ser o diário de bordo digital da limpeza das cabanas: registrar o que foi feito, acompanhar o tempo de cada limpeza, organizar a escala do dia e reconhecer o esforço da equipe — funcionando de forma confiável mesmo sem internet.

## Usuários

**Funcionária**
Executa a limpeza no dia a dia; usa o app no celular, muitas vezes com pressa, para marcar itens do checklist, cronometrar o tempo e registrar ocorrências com fotos.

**Administrador**
Acompanha o progresso da equipe, organiza a escala/programação, acessa o painel administrativo protegido por senha e gera relatórios em PDF.

**Proprietários**
Interessados na visão geral de que as cabanas estão sendo cuidadas; consomem principalmente o resultado (PDF, dashboard de progresso), não a operação do dia a dia.

## Contexto de uso
- **Celular** — principal dispositivo de uso, sobretudo pela funcionária em campo.
- **Desktop** — usado eventualmente pelo administrador para visão geral e relatórios.
- **Offline** — a operação diária precisa funcionar mesmo sem conexão.
- **Internet lenta** — quando há conexão, ela pode ser instável ou lenta; o app não pode depender dela para as tarefas básicas.
- **Uso diário** — o app é aberto todos os dias como parte da rotina de trabalho.
- **Uso com pressa** — muitas interações acontecem entre uma tarefa e outra, sem tempo para "aprender a usar".
- **Uso em ambientes externos** — luz solar direta, mãos ocupadas, telas tocadas rapidamente; exige alto contraste e áreas de toque generosas.

## Objetivos de UX
- **Rapidez** — cada ação do dia a dia deve ser concluída em poucos toques.
- **Clareza** — o estado de qualquer tarefa deve ser óbvio à primeira vista.
- **Confiabilidade** — a pessoa precisa confiar que o que ela registrou não vai se perder.
- **Conforto** — usar o app não deve gerar cansaço visual ou cognitivo, mesmo em uso repetido.
- **Natureza** — a experiência remete ao ambiente das cabanas, não a um sistema corporativo genérico.
- **Gamificação elegante** — reconhecimento do esforço presente, mas nunca competindo pela atenção com a tarefa em si.

## Objetivos de UI
- **Visual premium** — aparência cuidada, nunca de rascunho ou protótipo.
- **Pouco ruído visual** — cada tela mostra só o que é necessário naquele momento.
- **Hierarquia clara** — o que é mais importante numa tela é o que mais se destaca visualmente.
- **Leitura rápida** — textos e status legíveis num relance, sem exigir foco prolongado.
- **Botões fáceis de tocar** — áreas de toque generosas, pensadas para uso com uma mão e em movimento.
- **Excelente contraste** — legível mesmo sob luz solar direta ou telas de baixa qualidade.

## Filosofia
O aplicativo deve facilitar o trabalho. Ele nunca deve chamar mais atenção do que a tarefa que está sendo feita — a interface existe para apoiar a limpeza das cabanas, não para se destacar por si mesma.

## Regras permanentes
- Mobile First.
- Offline First.
- Poucos toques.
- Poucas decisões.
- Sempre preservar dados.
- Nunca sacrificar clareza por estética.

## Anti padrões
- Botões pequenos.
- Telas poluídas.
- Animações exageradas.
- Muitas cores.
- Muito texto.
- Baixo contraste.
- Elementos difíceis de tocar.

## Critérios de qualidade
Toda nova tela deve responder:
- É simples?
- É clara?
- É rápida?
- É bonita?
- É consistente?
- É confortável no celular?
