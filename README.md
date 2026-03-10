# Order API

API REST desenvolvida em **Node.js** para gerenciamento de pedidos.  
O projeto foi criado como parte de um desafio técnico e demonstra boas práticas de desenvolvimento backend com **Express** e **MongoDB**.

## Objetivo

Criar uma API capaz de gerenciar pedidos permitindo operações de:

* Criar pedidos
* Buscar pedidos por ID
* Listar pedidos
* Atualizar pedidos
* Deletar pedidos

Além disso, a API realiza transformação de dados (**mapping**) entre o payload recebido e o modelo persistido no banco de dados.

## Tecnologias Utilizadas

* **Node.js**
* **Express**
* **MongoDB**
* **Mongoose**
* **Nodemon** (desenvolvimento)

---

## Estrutura do Projeto

```text
order-api
│
├── src
│   ├── controllers
│   │     orderController.js
│   │
│   ├── models
│   │     Order.js
│   │
│   ├── routes
│   │     orderRoutes.js
│   │
│   ├── services
│   │     orderService.js
│   │
│   └── app.js
│
├── server.js
├── package.json
└── README.md
```

## Responsabilidades das camadas

| Camada | Função |
| :--- | :--- |
| **Controllers** | Recebem as requisições HTTP |
| **Services** | Contêm a lógica de negócio |
| **Models** | Definem os schemas do MongoDB |
| **Routes** | Definem os endpoints da API |
| **App** | Configuração da aplicação |


## Instalação

#### Clone o repositório:

```Bash
git clone https://github.com/leonildolinck/teste-tecnico-jitterbit.git
```

#### Entre na pasta do projeto:

```Bash
cd teste-tecnico-jitterbit
```

#### Instale as dependências:

```Bash
npm install
```


## Executando a aplicação

Rodar em modo desenvolvimento:

```bash
npm run dev
```
Ou em modo normal:

```bash
npm start
```
Servidor rodará em: http://localhost:3000


## Conexão com Banco de Dados
A API utiliza MongoDB. Certifique-se de que o MongoDB esteja rodando localmente:
```bash
mongodb://localhost:27017/orderdb
```

## Transformação de Dados (Mapping)
A API recebe um JSON (Input) e o transforma antes de salvar no banco (Output). Essa transformação ocorre na camada service.

Input JSON:

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```
Output (Banco de Dados):

```json
{
  "orderId": "v10089015vdb-01",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```


## Endpoints e Finalização

## Endpoints da API

* **Criar pedido:** `POST /order`
* **Buscar pedido por ID:** `GET /order/:id`
* **Listar todos os pedidos:** `GET /order/list`
* **Atualizar pedido:** `PUT /order/:id`
* **Deletar pedido:** `DELETE /order/:id`

## Exemplo de Requisição (cURL)

```json
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--data '{
    "numeroPedido": "v10089015vdb-01",
    "valorTotal": 10000,
    "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
    "items": [
        {
            "idItem": "2434",
            "quantidadeItem": 1,
            "valorItem": 1000
        }
    ]
}'
```

## Testes com Postman

```json
{
	"id": "43e44939-828f-4c29-8670-e155f87e93dd",
	"name": "teste-tecnico-jitterbit",
	"timestamp": "2026-03-10T02:54:28.001Z",
	"collection_id": "40504311-f2024541-bd4a-45e1-84e3-a1a647a09868",
	"folder_id": 0,
	"environment_id": "0",
	"totalPass": 0,
	"delay": 0,
	"persist": true,
	"status": "finished",
	"startedAt": "2026-03-10T02:54:27.322Z",
	"totalFail": 0,
	"results": [
		{
			"id": "502d7db8-09ad-4ffe-bdcf-a3bc3c264ae1",
			"name": "Deletar Pedido",
			"url": "http://localhost:3000/order/v10089015vdb-01",
			"time": 6,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				6
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "7b191731-b83b-4926-bfab-8d070b75f11c",
			"name": "Listar pedidos",
			"url": "http://localhost:3000/order/list",
			"time": 4,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				4
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "63de4e07-5e00-4b2d-b1a4-13f1d2ac9032",
			"name": "Buscar Pedido",
			"url": "http://localhost:3000/order/v10089015vdb-01",
			"time": 4,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				4
			],
			"allTests": [
				{}
			]
		},
		{
			"id": "435622a8-fb65-4d5f-929e-691fe00d7d01",
			"name": "Criar Pedido",
			"url": "http://localhost:3000/order",
			"time": 4,
			"responseCode": {
				"code": 201,
				"name": "Created"
			},
			"tests": {},
			"testPassFailCounts": {},
			"times": [
				4
			],
			"allTests": [
				{}
			]
		}
	],
	"count": 1,
	"totalTime": 18,
	"collection": {
		"requests": [
			{
				"id": "502d7db8-09ad-4ffe-bdcf-a3bc3c264ae1",
				"method": "DELETE"
			},
			{
				"id": "7b191731-b83b-4926-bfab-8d070b75f11c",
				"method": "GET"
			},
			{
				"id": "63de4e07-5e00-4b2d-b1a4-13f1d2ac9032",
				"method": "GET"
			},
			{
				"id": "435622a8-fb65-4d5f-929e-691fe00d7d01",
				"method": "POST"
			}
		]
	}
}
```

### Possíveis Melhorias

- Implementar autenticação com JWT

- Adicionar Swagger para documentação da API

- Criar testes automatizados

- Adicionar validação de dados

## Conclusão

Neste projeto, exploramos as etapas da criação de uma API em Node.js, desde o provisionamento de infraestrutura até o teste com Postman.

Sinta-se a vontade para fazer qualquer comentário ou sugestão!

## Contato

- **Email:** leonildolinck@gmail.com  
- **Discord:** leonildo  
- **LinkedIn:** [linkedin.com/in/leonildolinck](https://linkedin.com/in/leonildolinck)