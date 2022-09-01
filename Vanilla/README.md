#STUDIO SOL

## TESTE FRONT-END 2022 - QUAL É O NÚMERO

---

- Visão geral
  O problema consiste em receber um número através de uma requisição e implementar
  um jogo para acertar este número através de palpites. Ao errar um palpite, irá ser informado se
  o número obtido é maior ou menor do que o palpite feito. O palpite realizado ou status code de
  erro de requisição devem ser exibidos na tela no formato de LED de 7 segmentos. O palpite
  será obtido como entrada em um campo de texto, que deverá ser processado apenas quando o
  botão ENVIAR for clicado.
  Para solucionar o problema proposto, você deverá implementar a solução utilizando,
  HTML, CSS e Javascript.

### USED

- Js Vanilla
- Scss
- Html
- Webpack
- Babel

### DEV DEPENDÊNCIAS

- > NPM i - Para instalar as dependências de desenvolvimento

### COMANDS

- > DEV: NPM RUN DEV
- > BUILD: NPM RUN BUILD
- > WATCH: NPM RUN WATCH

#### ESTRUTURA DE PASTAS

- /SRC: Pasta principal do projeto
  - index.js : Injeção do App na DOM
  - App.js : Princial, responsável por montar a tela e suas regras de negócios
  - /ASSETS: Pasta responsável por armazenar os arquivos de estilo e imagens geral do projeto
    - /IMGS
    - /STYLES
  - /COMPONENTS: Pasta responsável por armazenar os componentes do projeto
    - / ButtonNewGame : Componente responsável pelo botão Nova Partida
      - index.js
      - \_style.scss
    - / ContainerGuess : Componente responsável pelo palpite da Partida, contendo o Input/Button
      - index.js
      - \_style.scss
    - / Message : Componente para exibir a mensagem de jogo
      - index.js
      - \_style.scss
    - / Number : Componente do número digital de sete seguimentos e sua lógica de exibição
      - index.js
      - \_styles.scss
  - /SERVICES: Pasta responsável por armazenar os servi;cos do projeto
    - Api.js : Responsável por realizar acesso a API de get número
    - Storage.js : Estado da aplicação
