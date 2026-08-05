# Product Principles

## Missão do aplicativo
Tornar o registro diário da limpeza das cabanas simples, confiável e gratificante para quem executa o trabalho — mesmo offline, mesmo em campo, mesmo com pressa.

## Visão
Ser o diário de bordo padrão de qualquer operação de limpeza de cabanas/pousadas: uma ferramenta tão natural de usar quanto anotar num caderno, mas que organiza, celebra e nunca perde o histórico do trabalho.

## Valores
- O trabalho da equipe de campo vem antes da conveniência de quem administra.
- Dado nunca se perde: offline é regra, não exceção.
- Simplicidade é uma escolha deliberada, não ausência de recursos.
- Reconhecimento do esforço faz parte do produto, não é acessório.
- Toda evolução respeita o que já existe.

## Experiência desejada
Abrir o app no celular, ver imediatamente o que precisa ser feito hoje, marcar o progresso em poucos toques, e sentir — pela leveza da interface e pelas pequenas celebrações — que o trabalho concluído foi notado e vale a pena.

────────────────────────────

## Os 10 princípios do produto

### 1. Simplicidade
**Objetivo:** cada tela deve ter um propósito único e óbvio, sem exigir explicação.
**Como influencia futuras decisões:** qualquer funcionalidade nova precisa justificar sua presença; se complica mais do que resolve, não entra.
**Exemplos práticos:** manter o checklist como lista direta de itens marcáveis, sem etapas extras para concluir uma tarefa simples.

### 2. Clareza
**Objetivo:** o estado de qualquer informação (concluído, pendente, com ocorrência) deve ser reconhecível à primeira vista.
**Como influencia futuras decisões:** preferir ícone + texto + cor combinados a depender de uma única pista visual.
**Exemplos práticos:** progresso de uma cabana sempre visível no dashboard sem precisar abrir o detalhe.

### 3. Mobile First
**Objetivo:** toda decisão de layout e interação nasce pensando na tela pequena e no uso com uma mão.
**Como influencia futuras decisões:** recursos que só funcionam bem em telas grandes são adaptados ou repensados antes de entrar.
**Exemplos práticos:** áreas de toque generosas, menu em sidebar recolhível, calendário adaptado à largura do celular.

### 4. Velocidade
**Objetivo:** a operação diária (marcar item, registrar ocorrência, ver progresso) deve ser rápida, sem telas de espera.
**Como influencia futuras decisões:** funcionalidades pesadas (relatórios, IA) não podem atrasar as ações do dia a dia.
**Exemplos práticos:** autosave em segundo plano, sem bloquear a interação do usuário.

### 5. Continuidade
**Objetivo:** o histórico e o progresso da equipe nunca se perdem, mesmo entre versões e dispositivos.
**Como influencia futuras decisões:** toda nova versão precisa ler os dados/backups da anterior sem exigir migração manual.
**Exemplos práticos:** backup em JSON versionado, com rollback automático se a importação falhar.

### 6. Segurança
**Objetivo:** proteger os dados registrados e o acesso a funções administrativas, sem burocratizar o uso comum.
**Como influencia futuras decisões:** funções sensíveis (edição de cabanas, exclusão de dados) ficam atrás de confirmação/senha administrativa; o uso diário permanece livre de fricção.
**Exemplos práticos:** modo administrador protegido por senha master, separado do fluxo normal de checklist.

### 7. Natureza
**Objetivo:** a identidade visual e o tom do produto remetem ao ambiente das cabanas — natural, terroso, acolhedor.
**Como influencia futuras decisões:** paleta, ícones e linguagem evitam referências urbanas/corporativas frias.
**Exemplos práticos:** paleta conceitual em bege, branco e verde como base, conforme definido nas diretrizes visuais.

### 8. Profissionalismo
**Objetivo:** apesar de leve, o app precisa transmitir seriedade — é uma ferramenta de trabalho real.
**Como influencia futuras decisões:** gamificação e estética nunca podem comprometer a legibilidade ou a credibilidade dos registros (ex.: PDF gerado para envio).
**Exemplos práticos:** checklist e PDF de limpeza mantêm formatação limpa e objetiva, sem excesso de elementos lúdicos.

### 9. Gamificação Elegante
**Objetivo:** reconhecer o esforço da equipe sem transformar o trabalho em competição pesada ou infantilizar o produto.
**Como influencia futuras decisões:** conquistas e celebrações são discretas, pontuais e opcionais de se explorar — nunca obrigatórias para concluir uma tarefa.
**Exemplos práticos:** conquistas guardadas em espaço próprio; celebração (confete/toast) breve ao bater metas mensais, sem interromper o fluxo de trabalho.

### 10. Evolução Contínua
**Objetivo:** o produto deve crescer em versões pequenas e seguras, sempre construindo sobre o que já funciona.
**Como influencia futuras decisões:** cada sprint gera uma nova versão isolada, nunca sobrescrevendo a anterior; funcionalidades antigas nunca são removidas sem substituição equivalente.
**Exemplos práticos:** histórico de versões V1 a V34 seguindo sempre o mesmo padrão de nova pasta + novo ZIP.

────────────────────────────

## Decisões que nunca devem ser tomadas
- Nunca criar telas poluídas.
- Nunca esconder ações importantes.
- Nunca quebrar compatibilidade dos backups.
- Nunca criar fluxos longos para tarefas simples.
- Nunca usar cores agressivas.
- Nunca adicionar animações exageradas.
- Nunca tornar o aplicativo infantil.
- Nunca remover funcionalidades existentes sem substituição equivalente.
- Nunca sobrescrever uma versão anterior.
- Nunca comprometer o funcionamento offline.

────────────────────────────

## Checklist para futuras funcionalidades
Toda nova funcionalidade deve responder "sim" a todas as perguntas abaixo antes de ser aceita:
- É simples?
- É intuitiva?
- Funciona bem no celular?
- Mantém consistência com o restante do produto?
- Segue a identidade visual definida?
- Preserva o desempenho do aplicativo?
- Não quebra versões anteriores nem backups existentes?
