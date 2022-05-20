<h1 align="center">Git explorer</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.1.0-blue" 
    alt="React Ver. ^18.1.0"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E4.6.4-blue"
    alt="Typescript Ver. 4.6.4" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2022-green" 
    alt="Ignite-2022"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<br>

<h3 align="center">Prévia do projeto</h3>

![cover](.github/project-preview.png?style=flat)

<br>

## 💻 Projeto

Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Nele aborda a criação de um projeto do zero em <strong>JavaScript</strong>  e depois refatorado para <strong>TypeScript</strong>, também contém a configuração <strong>Webpack</strong> e <strong>Babel</strong> do zero.

Contendo anotações e comentários particulares servindo de consulta para novos projetos.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)


## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash

$ git clone https://github.com/Jonathan-Rios/ignite-react-fundamentals.git

$ cd ignite-react-fundamentals
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install # ou yarn

# Iniciar o projeto
$ npm run dev  # ou yarn dev
```
- O app estará disponível no seu browser pelo endereço http://localhost:8080.

## 📜 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />


---

<br />

## 📝 Anotações pessoais

<br />

<h3>Criação do projeto e dependências </h3>

```bash

# Criando o package.json
➜ yarn init -y # Criando o package.json
➜ yarn add react # Instalando o react
➜ yarn add react-dom # Permiti o react comunicar com a arvore de elementos do html
➜ yarn add -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
    @babel/core         # É a main do Babel 99% das funcionalidades do babel.
    @babel/cli          # Permite usar o babel via command line.
    @babel/preset-env   # Biblioteca que verifica o ambiente executado para transpilar da melhor forma possível
    @babel/preset-react # Sem ele, não é possível entender e transpilar o React, só javascript puro.

➜ yarn add -D webpack webpack-cli webpack-dev-server

➜ yarn add -D babel-loader # Realiza integração entre webpack e babel

➜ yarn -D add html-webpack-plugin # Quando usamos o yarn webpack, temos que adicionar o bundle.js no index.html, esse cara é o que gera o index.html pronto (com o bundle) já dentro da dist

➜ yarn add -D webpack-dev-server # Automatiza as modificações, sem precisar ficar rodando ➜ yarn webpack

➜ yarn add -D cross-env # Define variáveis ambiente independente do SO da pessoa.

➜ yarn add -D style-loader css-loader # Permite que o webpack consiga ler o import de css.

➜ yarn add -D sass-loader # Permite o webpack entender o sass

➜ yarn add -D node-sass # import o sass.

➜ yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh # Esse cara evita que, quando salvamos algo o webpack reseta pro Total Zero a aplicação, perdendo tudo em memória ( states, etc. ), porem em um caso que estamos testando um carrinho com uns 15 itens lá, alteramos algo e ter que fazer novamente.
```
<h3>Transformando o projeto de Js para Typescript</h3>


```bash
# Transformando o projeto de Js para Typescript
➜ yarn add -D typescript

➜ yarn tsc --init # Adiciona o arquivo tsconfig.json com algumas configs.

➜ yarn add -D @babel/preset-typescript # Vá no babel.config.js e adicione o preset '@babel/preset-typescript'

➜ yarn add -D @types/react-dom

# [Se precisar] 
➜ yarn add -D @types/react # Agora parece que já vem dentro

# Obs. Sobre as configurações a seguir, o Diego pegou as configs de um template que já existia. Ele removeu algumas default que não iam ser utilizadas, e adicionou outras.

# Resultado final do tsconfig.js:
    {
      "compilerOptions": {
        "lib": [   # Adiciona tipagens que antes não teríamos, por exemplo as de HTML (InputHtmlAttributes)
          "dom",
          "dom.iterable",
          "esnext"
        ],
        "jsx": "react-jsx", # Necessário para usar React, se não vai dar ruim tacar html dentro de javascript.
        "moduleResolution": "node",
        "resolveJsonModule": true, # Permite adicionar arquivos .json
        "allowJs": true, # Permite .js também, e não só .ts
        "noEmit": true, # Se gerar o build da aplicação, não emitir o código dela.
        "isolatedModules": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true, # Ativa o modo script do javascript
        "skipLibCheck": true
      },
      "include": ["src"] # Onde nosso código vai estar
    }
    
# Alterações em outros arquivos

webpack.config.js
  # No modules -> 
  test: /\. (j|t)sx$/, permitindo .tsx ou .jsx.
  #No resolve -> 
  extensions: ['.js', '.jsx', '.ts', '.tsx']
  #No entry   -> 
  path.resolve(__dirname, 'src', 'index.tsx')
```

<h3>Reflexões e curiosidades </h3>

  - Robot.txt # o arquivo que fica na public, indica o google qual páginas indexar e qual ignorar
  - Não muda nada se usar .js ou .jsx no react.
  - Demonstrando como usa o babel em arquivo único  
      ➜ yarn babel src/index.js --out-file dist/bundle.js
  - __dirname = Sempre que usamos esse __dirname, ele vai pegar o diretório atual do lugar que vc digitou, tipo um pwd no terminal.
  - Novo recurso de ou , o "??" no javascript que tem quase a mesma utilidade do ||, difere que ele aceita o '0' como válido diferente do ||.  
  - Imutabilidade, o conceito de state quando usamos o setAlgo nó criamos um novo array, ao invés de adicionar um item ao array existente (.push).
  - Typescript é um Superset (Segundo o site deles), mas uma galera importante chama de linguagem, hahah tnt faz.
  - Type e Interface tem poucas diferenças, mas queremos no typescript usar type, pois interface é mais para casos de heranças e herdar contratos
  - Limpando o tsconfig.json - selecione  o "/* ", aperte [Ctrl + Shift + L] depois segure shift + Home e delete.



---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)