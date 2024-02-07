# Desafio Fullstack: Agenda Pessoal

# Backend

## Instruções para Configuração do Projeto:
- Clonar o Repositório:
    - Clone o repositório utilizando o branch "main".

- Instalar Dependências:
    - Execute `npm i` ou `yarn` para instalar as dependências do projeto.

- Configurar o Ambiente:
    - Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example` fornecido.
    - Configure seu banco de dados PostgreSQL com o mesmo nome especificado no arquivo `.env`.

- Migração do Banco de Dados:
    - Execute a migração das tabelas do TypeORM para o seu banco de dados usando o comando:
        - `npm run typeorm migration:run -- -d ./src/data-source.ts`
        - ou
        - `yarn typeorm migration:run -d ./src/data-source.ts`

- Iniciar o Projeto Localmente:
    - Inicie o projeto localmente utilizando um dos comandos a seguir:
        - `npm run dev`
        - ou
        - `yarn dev`

## Requisitos do Serviço

Este serviço backend disponibiliza uma API REST para criar, listar, atualizar e excluir dados do banco de dados.

- Banco de Dados: PostgreSQL
- Tecnologias: TypeScript, TypeORM, Node.js, Express e outras bibliotecas.

| Method | Endpoint     | Usage Outcome              | Permission         |
|--------|--------------|----------------------------|--------------------|
| POST   | /login       | User login                 | N/A                |
| POST   | /users       | Create a new user          | N/A                |
| GET    | /users       | List all users             | Authenticated user |
| GET    | /users/id    | Read a user based on ID    | Authenticated user |
| PATCH  | /users/id    | Update a user              | Account owner      |
| DELETE | /users/id    | Delete a user              | Account owner      |
| POST   | /contacts    | Create a contact           | Authenticated user |
| GET    | /contacts    | List all contacts          | Authenticated user |
| GET    | /contacts/id | Read a contact based on ID | Authenticated user |
| PATCH  | /contacts/id | Update a contact           | Owner and Manager  |
| DELETE | /contacts/id | Delete a contact           | Owner and Manager  |

# Desafio Fullstack -- Frontend

## Instruções de Configuração do Projeto:

- Clonar o Repositório:
   Comece clonando o repositório usando o branch "main".

- Instalar Dependências:
    Utilize `npm i` ou `yarn` para instalar as dependências necessárias do projeto.

- Executar a Aplicação Localmente:
    Para uma experiência local perfeita, certifique-se de que a API local para este projeto está em execução em sua máquina.
    Execute o seguinte comando para executar a aplicação frontend localmente:
    ```
    npm run dev
    ```
    ou
    ```
    yarn dev
    ```

## Requisitos do Serviço

Este serviço frontend utiliza uma API REST (Backend) para criar, listar, atualizar e excluir dados do banco de dados.

### Tecnologias Utilizadas:

- TypeScript
- React
- Zod
- Styled-components
- Axios
- React-router-dom
- React-hook-form
- React-hook-form
- outras bibliotecas relevantes

### Dependência da API Local:

Certifique-se de que a API local esteja em execução antes de iniciar o projeto frontend.
Consulte a seção [Backend](#backend) para obter mais informações.