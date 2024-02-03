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
| POST   | /products                  | Criação de produto                                 | 
| GET    | /products                  | Lista todos os produtos, com filtros e paginação   | 
| GET    | /products/:id              | Busca um produto pelo id                           |  
| PATCH  | /products/:id              | Atualiza um produto                                | 
| DELETE | /products/:id              | Deleta um produto                                  | 
| POST   | /purchaseOrder             | Gerar ordem de compra, de um usuário               | 
| GET    | /purchaseOrder/users/:id   | Listar ordem de compra, de um usuário, com filtros | 
| POST   | /purchaseOrder/item        | Gerar item para um ordem de compra                 | 


## Endpoints - Casos de Sucesso, Produtos

### Busca de produtos com paginação e com a possibilidade de utilização de filtros

`GET /products` - FORMATO DA REQUISIÇÃO, SEM PAGINAÇÃO E SEM FILTROS

Resposta: `status 200`

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

Resposta: `status 200`
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

Resposta: `status 200`
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

Resposta: `status 200`
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


Resposta: `status 200`
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

### Bucar produto pelo id
`GET /products/60096951-81d5-4569-ae70-c2deed1d9d43` -- FORMATO DA REQUISIÇÃO

Não necessita corpo de requisição 

Resposta: `status 200`
```json
{
	"id": "60096951-81d5-4569-ae70-c2deed1d9d43",
	"title": "A Tester",
	"price": 59.99,
	"description": "Product, A Tester, update ",
	"category": "electronics",
	"image": "urlfakesjdjfs"
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
Resposta: `status 201`
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

### Atualização de produto 
`PATCH  /products/60096951-81d5-4569-ae70-c2deed1d9d43` -- FORMATO DA REQUISIÇÃO

Corpo:
```json
{
	"description": "Product, A Tester, update "
}
```

Resposta: `status 200`
```json
{
	"id": "60096951-81d5-4569-ae70-c2deed1d9d43",
	"title": "A Tester",
	"price": 59.99,
	"description": "Product, A Tester, update ",
	"category": "electronics",
	"image": "urlfakesjdjfs"
}
```

### Deleção de produto 

`DELETE - /products/86bc6ac6-6762-4fb6-8256-e5b462e8b1c1` -- FORMATO DA REQUISIÇÃO

Não necessita corpo de requisição 

Resposta: `status 204`


## Endpoints - Casos de Sucesso, Users

### Criação de Usuário 

`POST /users` -- FORMATO DA REQUISIÇÃO

Corpo:
```json
{
	"email": "tester.a@gmail.com",
	"username": "Tester 1000",
	"password": "1234",
	"first_name": "Tester",
	"last_name": "1000"
}
```
Resposta: `status 201`
```json
{
	"id": "76438565-cb26-439f-a423-63816a7fb810",
	"email": "tester.a@gmail.com",
	"username": "Tester 1000",
	"first_name": "Tester",
	"last_name": "1000"
}
```

### Atualização de usuário 
`PATCH  /users/76438565-cb26-439f-a423-63816a7fb810` -- FORMATO DA REQUISIÇÃO

Corpo:
```json
{
	"email": "tester.update@gmail.com"
}
```

Resposta: `status 200`
```json
{
	"id": "76438565-cb26-439f-a423-63816a7fb810",
	"email": "tester.update@gmail.com",
	"username": "Tester 1000",
	"first_name": "Tester",
	"last_name": "1000"
}
```

### Listar todos usuários

`GET - /users` -- FORMATO DA REQUISIÇÃO

Não necessita corpo de requisição 

Resposta: `status 200`
```json
[
	{
		"id": "07eeb39a-3ad0-4632-9f86-bafffb3796d4",
		"email": "varela.a@gmail.com",
		"username": "KVA",
		"first_name": "Krishna",
		"last_name": "Varela"
	},
	{
		"id": "76438565-cb26-439f-a423-63816a7fb810",
		"email": "tester.update@gmail.com",
		"username": "Tester 1000",
		"first_name": "Tester",
		"last_name": "1000"
	}
]
```

### Deleção de usuário 

`DELETE - /users/76438565-cb26-439f-a423-63816a7fb810` -- FORMATO DA REQUISIÇÃO

Não necessita corpo de requisição 

Resposta: `status 204`

## Endpoints - Casos de Sucesso, PurchaseOrders

### Criação de ordem de compra 

`POST /purchaseOrder` -- FORMATO DA REQUISIÇÃO

Corpo:
```json
{
	"user_id": "07eeb39a-3ad0-4632-9f86-bafffb3796d4"
}
```
Resposta: `status 201`
```json
{
	"user": {
		"id": "07eeb39a-3ad0-4632-9f86-bafffb3796d4",
		"email": "varela.a@gmail.com",
		"username": "KVA",
		"password": "$2a$10$PGmOGq7C82x/TMqs2x9F5eCNuKci2vr7Fudczv5Fdx9ofxJHkXedi",
		"first_name": "Krishna",
		"last_name": "Varela"
	},
	"id": "054a4479-11cf-4c98-9bc6-ea6b35aff881",
	"date": "2024-02-02T16:52:52.192Z"
}
```

### Listagem de ordens de compra por usuário

`GET /purchaseOrder/users/07eeb39a-3ad0-4632-9f86-bafffb3796d4` -- FORMATO DA REQUISIÇÃO SEM FILTROS 

Resposta: `status 200`
```json
{
	"id": "07eeb39a-3ad0-4632-9f86-bafffb3796d4",
	"email": "varela.a@gmail.com",
	"username": "KVA",
	"password": "$2a$10$PGmOGq7C82x/TMqs2x9F5eCNuKci2vr7Fudczv5Fdx9ofxJHkXedi",
	"first_name": "Krishna",
	"last_name": "Varela",
	"purchase_order": [
		{
			"id": "054a4479-11cf-4c98-9bc6-ea6b35aff881",
			"date": "2024-02-02T16:52:52.192Z",
			"items": [
				{
					"id": "f16928be-963a-4739-9903-06e098542ab6",
					"quantity": 2,
					"price": "119.98"
				},
				{
					"id": "4439758c-d89e-4b7e-b602-e0da11c87298",
					"quantity": 5,
					"price": "39.45"
				}
			]
		},
		{
			"id": "f9e5c293-06e5-4cb9-b752-90768047803c",
			"date": "2024-02-02T16:45:08.315Z",
			"items": []
		}
	]
}
```

`GET /purchaseOrder/users/07eeb39a-3ad0-4632-9f86-bafffb3796d4?filters={"date":"2024-02-02T16:52:52.192Z"}` -- FORMATO DA REQUISIÇÃO COM FILTROS 

Resposta: `status 200`
```json
{
	"id": "07eeb39a-3ad0-4632-9f86-bafffb3796d4",
	"email": "varela.a@gmail.com",
	"username": "KVA",
	"password": "$2a$10$PGmOGq7C82x/TMqs2x9F5eCNuKci2vr7Fudczv5Fdx9ofxJHkXedi",
	"first_name": "Krishna",
	"last_name": "Varela",
	"purchase_order": [
		{
			"id": "054a4479-11cf-4c98-9bc6-ea6b35aff881",
			"date": "2024-02-02T16:52:52.192Z",
			"items": [
				{
					"id": "f16928be-963a-4739-9903-06e098542ab6",
					"quantity": 2,
					"price": "119.98"
				},
				{
					"id": "4439758c-d89e-4b7e-b602-e0da11c87298",
					"quantity": 5,
					"price": "39.45"
				}
			]
		}
	]
}
```


## Endpoints - Casos de Sucesso, PurchaseOrdersItems

### Adicionar produto em uma  ordem de compra 

`POST /purchaseOrder/item` -- FORMATO DA REQUISIÇÃO

Corpo:
```json
{
	"product_id": "60096951-81d5-4569-ae70-c2deed1d9d43",
	"purchase_order_id": "054a4479-11cf-4c98-9bc6-ea6b35aff881",
	"quantity": 2
}
```
Resposta: `status 201`
```json
{
	"quantity": 2,
	"price": 119.98,
	"product": {
		"id": "60096951-81d5-4569-ae70-c2deed1d9d43",
		"title": "A Tester",
		"price": "59.99",
		"description": "tester description",
		"category": "electronics",
		"image": "urlfakesjdjfs"
	},
	"purchaseOrder": {
		"id": "054a4479-11cf-4c98-9bc6-ea6b35aff881",
		"date": "2024-02-02T16:52:52.192Z"
	},
	"id": "f16928be-963a-4739-9903-06e098542ab6"
}
```