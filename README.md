# Projeto Docker com NestJS, TypeORM e Angular

Este é um projeto que utiliza Docker para gerenciar os contêineres, NestJS como framework back-end, TypeORM como ORM (Object-Relational Mapping) e Angular para o front-end.

## Back-end (NestJS e TypeORM)

### NestJS
NestJS é um framework para construir aplicativos web eficientes e escaláveis em Node.js. Ele utiliza conceitos modernos como injeção de dependência, modularidade e arquitetura orientada a componentes para simplificar o desenvolvimento.

### TypeORM
TypeORM é um ORM (Object-Relational Mapping) para Node.js e TypeScript, que permite interagir com bancos de dados relacionais usando objetos JavaScript. Ele oferece suporte a uma variedade de bancos de dados, incluindo MySQL, PostgreSQL, SQLite e outros.

## Front-end (Angular)

### Angular
Angular é uma plataforma de desenvolvimento para a construção de aplicativos web robustos e escaláveis. Ele oferece um conjunto abrangente de recursos para desenvolvimento front-end, incluindo uma estrutura MVC, injeção de dependência, roteamento e muito mais.

#### Estrutura do Projeto
- O código-fonte do front-end está localizado no diretório `frontend`.
- Os componentes, serviços e outros artefatos Angular são organizados de acordo com as práticas recomendadas do Angular.

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
