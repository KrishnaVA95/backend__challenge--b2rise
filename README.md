# Index

* [Introdução](#introdução)
* [BaseURL](#baseurl)
* [Endpoints](#endpoints)


# Instruções

-  Clone o repositório
```
git clone <URL-GITHUB>
```

-  Criar banco de dados postegres

`Conectado no terminal interativo do PostgreSQL (psql)`
```
psql -U postgres
```

`Postgres user default password`
```
1234
```

`Create Database`
```
CREATE DATABASE <name-your-database> ; 
```

`desconectar terminal interativo do PostgreSQL` 
```
ctrl + c
```

-  Criar arquivo .env 
```json
DATABASE_URL="postgres://<USER>:<PASS>@<HOST>:<PORT>/<DATABASE>"
SECRET_KEY="#%$*&**&&-09875$hddsa%TT"
```
- exemplo:
```json
DATABASE_URL="postgresql://postgres:1234@localhost:5432/db_store"
```

-  Executar Migraçoens
```
npm run typeorm migration:run -- -d ./src/data-source
```

-  Instale a node modules
```
npm install
```

-  Rodar servidor
```
npm run dev
```

# BaseURL:
```
 localhost:3000
```

# Endpoints 
| Método | Endpoint                   | Responsabilidade                                   | 
| ------ | -------------------------- | -------------------------------------------------  | 
| POST   | /users                     | Criação de usuário                                 | 
| GET    | /users                     | Lista todos os usuários                            | 
| PATCH  | /users/:id                 | Atualiza um usuário                                | 
| DELETE | /users/:id                 | Deleta um usuário                                  | 
| POST   | /login                     | Gera o token de autenticação                       | 
| POST   | /products                  | Criação de produto                                 | 
| GET    | /products                  | Lista todos os produtos                            | 
| GET    | /products/:id              | Busca um produto pelo id                           | 
| GET    | /products/:category        | Lista todos produtos que pertencem a uma categoria | 
| PATCH  | /products/:id              | Atualiza um produto                                | 
| DELETE | /products/:id              | Deleta um produto                                  | 
