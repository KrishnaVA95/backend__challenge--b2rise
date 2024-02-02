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


## Endpoints - Casos de Sucesso

### Busca de produtos com paginação e com a possibilidade de utilização de filtros

`GET /products` - FORMATO DA REQUISIÇÃO, SEM PAGINAÇÃO E SEM FILTROS

Resposta:

```json
{
	"page": null,
	"perPage": null,
	"data": [
		{
			"id": "60096951-81d5-4569-ae70-c2deed1d9d43",
			"title": "A Tester",
			"price": 59.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		},
		{
			"id": "81b46858-2d5f-4980-864d-70656e858791",
			"title": "B Tester",
			"price": 69.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		},
		{
			"id": "befed5e5-734a-4a1c-99cd-966348df1bf0",
			"title": "c Tester",
			"price": 7.89,
			"description": "tester description",
			"category": "food",
			"image": "urlfakesjdjfs"
		},
		{
			"id": "f21eb44c-3eab-4c69-8778-f9ad8071510c",
			"title": "D Tester",
			"price": 7.89,
			"description": "tester description",
			"category": "food",
			"image": "urlfakesjdjfs"
		}
	]
}
```

`GET /products?filters[category]=electronics` - FORMATO DA REQUISIÇÃO, SEM PAGINAÇÃO E COM FILTRO 

Resposta:
```json
{
	"page": null,
	"perPage": null,
	"data": [
		{
			"id": "60096951-81d5-4569-ae70-c2deed1d9d43",
			"title": "A Tester",
			"price": 59.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		},
		{
			"id": "81b46858-2d5f-4980-864d-70656e858791",
			"title": "B Tester",
			"price": 69.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		}
	]
}
```

`GET /products?page=1&perPage=3` - FORMATO DA REQUISIÇÃO, COM PAGINAÇÃO E SEM FILTROS

Resposta:
```json
{
	"page": 1,
	"perPage": 3,
	"data": [
		{
			"id": "60096951-81d5-4569-ae70-c2deed1d9d43",
			"title": "A Tester",
			"price": 59.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		},
		{
			"id": "81b46858-2d5f-4980-864d-70656e858791",
			"title": "B Tester",
			"price": 69.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		},
		{
			"id": "befed5e5-734a-4a1c-99cd-966348df1bf0",
			"title": "c Tester",
			"price": 7.89,
			"description": "tester description",
			"category": "food",
			"image": "urlfakesjdjfs"
		}
	]
}
```

`GET /products?page=1&perPage=3&filters[category]=electronics` - FORMATO DA REQUISIÇÃO, COM PAGINAÇÃO E COM FILTRO 

Resposta:
```json
{
	"page": 1,
	"perPage": 3,
	"data": [
		{
			"id": "60096951-81d5-4569-ae70-c2deed1d9d43",
			"title": "A Tester",
			"price": 59.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		},
		{
			"id": "81b46858-2d5f-4980-864d-70656e858791",
			"title": "B Tester",
			"price": 69.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		}
	]
}
```

`GET /products?page=1&perPage=3&filters[category]=electronics&filters[price]=69.99` - FORMATO DA REQUISIÇÃO, COM PAGINAÇÃO E COM FILTROS MULTIPLOS 


Resposta:
```json
{
	"page": 1,
	"perPage": 3,
	"data": [
		{
			"id": "81b46858-2d5f-4980-864d-70656e858791",
			"title": "B Tester",
			"price": 69.99,
			"description": "tester description",
			"category": "electronics",
			"image": "urlfakesjdjfs"
		}
	]
}
```

### Criação de produto 

`POST /products` -- FORMATO DA REQUISIÇÃO

Corpo:
```json
{
	"title": "A Tester",
	"price": 59.99,
	"description": "tester description",
	"category": "electronics",
	"image": "urlfakesjdjfs"
}
```
Resposta:
```json
{
	"title": "A Tester",
	"price": 59.99,
	"description": "tester description",
	"category": "electronics",
	"image": "urlfakesjdjfs",
	"id": "60096951-81d5-4569-ae70-c2deed1d9d43"
}
```