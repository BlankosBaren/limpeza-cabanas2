# Buttons

Componente base: `.cc-btn` (já existente no projeto).
Variantes oficiais do Design System, adicionadas na V35: `.cc-btn-primary`, `.cc-btn-secondary`, `.cc-btn-success`, `.cc-btn-warning`, `.cc-btn-danger`, `.cc-btn-ghost`, `.cc-btn-disabled`.

As variantes são aditivas: foram aplicadas junto às classes de estilo já existentes (`.cc-primary`, `.cc-danger`), sem removê-las, preservando 100% do comportamento e da aparência previamente validada.

## Todas as variantes

| Classe | Aparência | Uso |
|---|---|---|
| `.cc-btn-primary` | Verde pinheiro em degradê, texto claro, forte contraste | Ação principal da tela (salvar, confirmar, exportar) |
| `.cc-btn-secondary` | Fundo claro (papel), borda sutil, texto neutro | Ação alternativa/neutra (cancelar, mostrar mais) |
| `.cc-btn-success` | Verde pinheiro sólido | Confirmação positiva de conclusão |
| `.cc-btn-warning` | Dourado | Ação que exige atenção antes de prosseguir (ex.: remover uma marcação) |
| `.cc-btn-danger` | Tom terracota sobre fundo suave | Ação destrutiva ou irreversível (excluir cabana) |
| `.cc-btn-ghost` | Transparente, sem borda visível | Ação terciária, de baixo destaque visual |
| `.cc-btn-disabled` | Opacidade reduzida, sem sombra | Estado indisponível (também aplicado automaticamente via `disabled`) |

## Quando utilizar cada uma
- **Primary/Success**: use apenas uma ação primária por tela ou modal — a que o usuário mais provavelmente quer tomar.
- **Secondary**: ações de escape ou complementares (cancelar, voltar, ver mais).
- **Warning**: ações que alteram algo já registrado, mas de forma recuperável.
- **Danger**: ações destrutivas e permanentes; sempre acompanhadas de confirmação.
- **Ghost**: ações discretas, dentro de contextos já carregados visualmente.

## Estados
- **Default**: aparência de repouso, com sombra leve.
- **Hover**: leve elevação (`translateY(-1px)`) e aumento sutil de brilho.
- **Pressed (active)**: escala reduzida (~0.985) e sombra removida, simulando o botão "afundando".
- **Focus (teclado)**: contorno dourado de 3px, sempre visível — nunca removido sem substituto.
- **Disabled**: opacidade reduzida, cursor `not-allowed`, sem sombra nem transformação.

## Boas práticas
- Usar no máximo um botão `.cc-btn-primary`/`.cc-btn-success` visível por vez em cada tela ou modal.
- Manter o texto do botão curto e no infinitivo/imperativo ("Salvar", "Excluir cabana").
- Não usar `.cc-btn-danger` para ações que não sejam realmente destrutivas.
- Sempre combinar a variante com a classe base `.cc-btn` (nunca usar a variante isolada).

## Acessibilidade
- Altura mínima de 48px garante área de toque confortável em qualquer celular.
- Contraste de texto/fundo alto em todas as variantes, inclusive `warning`.
- O anel de foco (`outline`) é sempre mantido para navegação por teclado — nunca deve ser removido sem um substituto de igual visibilidade.
- Estado `disabled` é comunicado tanto visualmente (opacidade) quanto pelo atributo HTML `disabled`, mantendo leitores de tela informados.
