# GraphQL API Bootstrap

Bootstrap project for a GraphQL API Server using Apollo Server, Typescript, Prisma, PostgreSQL and Docker.

## Run Locally

The project is using PNPM but any package manager will work.

```bash
  git clone https://github.com/juniovitorino/graphql-server-typescript
```

Go to the project directory

```bash
  cd graphql-server-typescript
```

Install dependencies

```bash
  pnpm install
```

## Running the project

### Docker
First start PostgreSQL container.
```bash
docker compose up
```

Now you can start the server using PNPM, Yarn or NPM.

### PNPM
```bash
pnpm dev
```

### Prisma and Prisma Studio

1. First create a .env file in the root directory and fill with the content bellow:
```bash
 API_SERVER_PORT=4000
DATABASE_URL="postgresql://postgres:password@localhost:5432/graphql_api_development?schema=public"
```
2. Now create migration and setup database tables;
```bash
pnpm exec prisma migrate dev --skip-generate
```

3. Finally you can run Prisma Studio
```bash
pnpm exec prisma studio
```

> Note: For more details drop a message at frowea@gmail.com
