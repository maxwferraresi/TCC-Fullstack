# Projeto Docker com NestJS, TypeORM e Angular

Este é um projeto que utiliza Docker para gerenciar os contêineres, NestJS como framework back-end, TypeORM como ORM (Object-Relational Mapping) e Angular para o front-end.

## Back-end (NestJS e TypeORM)
<details>
  <summary>NestJS</summary>
  <br/>
  NestJS é um framework para construir aplicativos web eficientes e escaláveis em Node.js. Ele utiliza conceitos modernos como injeção de dependência, modularidade e arquitetura orientada a componentes para simplificar o desenvolvimento.
</details>
<details>
  <summary>TypeORM</summary>
  <br/>
  TypeORM é um ORM (Object-Relational Mapping) para Node.js e TypeScript, que permite interagir com bancos de dados relacionais usando objetos JavaScript. Ele oferece suporte a uma variedade de bancos de dados, incluindo MySQL, PostgreSQL, SQLite e outros.
</details>
<details>
  <summary>Documentação API</summary>
  <blockquote>
    <details>
      <summary>Autores</summary>
      
  #### `POST` `http://localhost:3000/autores`
  Cria um novo autor.
  
  **Parâmetros:**
  - `nome` (string, obrigatório): O nome do autor.
  - `idade` (number, obrigatório): A idade do autor.
  
  **Exemplo de Requisição:**
  ```json
  {
    "nome": "João",
    "idade": 30
  }
  ```

  #### `PATCH` `http://localhost:3000/autores/:id`
  Atualiza um autor.
  
  **Parâmetros:**
  - `nome` (string, opcional): O nome do autor.
  - `idade` (number, opcional): A idade do autor.
  
  **Exemplo de Requisição:**
  ```json
  {
    "nome": "Maria"
  }
  ```

  #### `DELETE` `http://localhost:3000/autores/:id`
  Deleta um autor com o ID informado.

  #### `GET` ALL `http://localhost:3000/autores`
  Retorna todos os autores.

  
  **Exemplo de Retorno:**
  ```json
  [
      {
          "id": 1,
          "nome": "João",
          "idade": "30"
      }
  ]
  ```

  #### `GET` BY ID `http://localhost:3000/autores/:id`
  Retorna o autor com o ID informado.

  
  **Exemplo de Retorno:**
  ```json
    {
        "id": 1,
        "nome": "João",
        "idade": "30"
    }
  ```

  #### `GET` BY NOME `http://localhost:3000/autores/nome/:nome`
  Retorna todos os autores que contenham o valor informado.

  
  **Exemplo de Retorno:**
  ```json
  [
      {
          "id": 1,
          "nome": "João",
          "idade": "30"
      }
  ]
  ```
  </details>
  <details>
      <summary>Editoras</summary>
      
  #### `POST` `http://localhost:3000/editoras`
  Cria uma nova editora.
  
  **Parâmetros:**
  - `nome` (string, obrigatório): O nome da editora.
  - `endereco` (number, obrigatório): O endereco da editora.
  - `telefone` (number, obrigatório): O telefone da editora.
  
  **Exemplo de Requisição:**
  ```json
  {
    "nome": "Editora",
    "endereco": "Rua 1",
    "telefone": "11991329139"
  }
  ```

  #### `PATCH` `http://localhost:3000/editoras/:id`
  Atualiza uma editora.
  
  **Parâmetros:**
  - `nome` (string, opcional): O nome da editora.
  - `endereco` (number, opcional): O endereco da editora.
  - `telefone` (number, opcional): O telefone da editora.
  
  **Exemplo de Requisição:**
  ```json
  {
    "nome": "Editora"
  }
  ```

  #### `DELETE` `http://localhost:3000/editoras/:id`
  Deleta uma editora com o ID informado.

  #### `GET` ALL `http://localhost:3000/autores`
  Retorna todos as editora.

  
  **Exemplo de Retorno:**
  ```json
  [
    {
      "nome": "Editora",
      "endereco": "Rua 1",
      "telefone": "11991329139"
    }
  ]
  ```

  #### `GET` BY ID `http://localhost:3000/editoras/:id`
  Retorna a editora com o ID informado.

  
  **Exemplo de Retorno:**
  ```json
    {
      "nome": "Editora",
      "endereco": "Rua 1",
      "telefone": "11991329139"
    }
  ```

  #### `GET` BY NOME `http://localhost:3000/editoras/nome/:nome`
  Retorna todos as editoras que contenham o valor informado.

  
  **Exemplo de Retorno:**
  ```json
  [
    {
      "nome": "Editora",
      "endereco": "Rua 1",
      "telefone": "11991329139"
    }
  ]
  ```
  </details>
  <details>
      <summary>Livros</summary>
      
  #### `POST` `http://localhost:3000/livros`
  Cria um novo livro.
  <br/>
  ***Para criar um livro é necessário ter criado um autor e uma editora anteriormente.***
  
  **Parâmetros:**
  - `titulo` (string, obrigatório): O titulo do livro.
  - `autorId` (number, obrigatório): O id do autor do livro.
  - `editoraId` (number, obrigatório): O id da editora do livro.
  
  **Exemplo de Requisição:**
  ```json
  {
    "titulo": "Teste 2",
    "autorId": 3,
    "editoraId": 2
  }
  ```

  #### `PATCH` `http://localhost:3000/livros/:id`
  Atualiza um livro.
  
  **Parâmetros:**
  - `titulo` (string, obrigatório): O titulo do livro.
  - `autorId` (number, obrigatório): O id do autor do livro.
  - `editoraId` (number, obrigatório): O id da editora do livro..
  
  **Exemplo de Requisição:**
  ```json
  {
    "titulo": "Livro"
  }
  ```

  #### `DELETE` `http://localhost:3000/livros/:id`
  Deleta um livro com o ID informado.

  #### `GET` ALL `http://localhost:3000/livros`
  Retorna todos os livros.

  
  **Exemplo de Retorno:**
  ```json
  [
    {
      "titulo": "Teste 2",
      "autorId": 3,
      "editoraId": 2
    }
  ]
  ```

  #### `GET` BY ID `http://localhost:3000/livros/:id`
  Retorna o livro com o ID informado.

  
  **Exemplo de Retorno:**
  ```json
    {
      "titulo": "Teste 2",
      "autorId": 3,
      "editoraId": 2
    }
  ```

  #### `GET` BY NOME `http://localhost:3000/livros/titulo/:titulo`
  Retorna todos os livros que contenham o valor informado.

  
  **Exemplo de Retorno:**
  ```json
  [
    {
      "titulo": "Teste 2",
      "autorId": 3,
      "editoraId": 2
    }
  ]
  ```
  </details>
  </blockquote>
</details>

## Front-end (Angular)
<details>
  <summary>Angular</summary>
  <br/>
  Angular é uma plataforma de desenvolvimento para a construção de aplicativos web robustos e escaláveis. Ele oferece um conjunto abrangente de recursos para desenvolvimento front-end, incluindo uma estrutura MVC, injeção de dependência, roteamento e muito mais.
</details>

## Docker

#### Docker Compose
- O arquivo `docker-compose.yml` é utilizado para definir e executar os serviços Docker necessários para o projeto.
- Ele inclui configurações para o back-end (NestJS) e o banco de dados (mysql) e front-end (Angular).

## Como Executar o Projeto

1. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
2. Clone o repositório do projeto.
3. Navegue até o diretório raiz do projeto no terminal.
4. Execute o comando `docker compose up` para construir e iniciar os contêineres Docker.
5. O front-end estará disponível em `http://localhost:4200` e o back-end em `http://localhost:3000`.
