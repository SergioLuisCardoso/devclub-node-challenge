# devclub-node-challenge
<!--This application simulates the registration of orders for a hamburger shop, including customer name, order description and value. The system later adds an ID, allows change, cancellation and displays the status of the order.
-->
Este aplicativo simula o cadastro de pedidos para uma hamburgueria, incluindo nome do cliente, descrição do pedido e valor. 
O sistema posteriormente adiciona um ID, permite alteração, cancelamento e exibe o status do pedido.

<img src="/assets/video-demonstration.gif" alt="video demonstration">

<!--
> Routes screen: 
GET /order, PUT / order/:id, DELETE / Order/:id, GET / Order/:id, PATCH / and Order/:id using Insomnia.
-->
> Rotas da aplicação (GET /order, PUT / order/:id, DELETE / Order/:id, GET / Order/:id, PATCH / and Order/:id) exibidos na tela do Insomnia.

<img src="/assets/image-terminal.jpg" alt="terminal image">

> Exibição dos Middlewares "checkOrderId" e "methUrl" no terminal do VSCode.

## 🛸 Sobre o desafio

Esta aplicação simula o cadastro, alteração e status dos pedidos de uma hamburgueria utilizando [Node](https://nodejs.org/en/) e [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /order`: A rota recebe o `pedido do cliente`, o `nome do cliente` e `o valor do pedido`, essas informações são passadas dentro do corpo(body) da requisição, e com esses dados registra-se o novo pedido dentro de um array no seguinte formato: `{ id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" }`. O ID é gerado automaticamente, dentro do código utilizando UUID V4 assim que o pedido é criado, neste estágio o status exibe a mensagem "Em preparação".


- `GET /order`: Essa rota lista todos os pedidos já feitos.

- `PUT /order/:id`: Essa rota altera um pedido já feito. Pode-se alterar,um ou todos os dados do pedido.O `id` do pedido, por padrão, é enviado nos parâmetros da rota.

- `DELETE /order/:id`: Essa rota deleta um pedido já realizado, com o `id` enviado nos parâmetros da rota.

- `GET /order/:id`: Essa rota recebe o `id` nos parâmetros e retorna um pedido específico.

- `PATCH /order/:id`: Essa rota recebe o `id` nos parâmetros e sempre que acionada, altera o status do pedido recebido, pelo id para "Pronto".


### Exemplo

Se chamar a rota `POST /order` repassando `{ order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }`,
o array deve fica desta forma:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
```


Se chamar a rota `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8`,
o array sogfre a seguinte alteração:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];
```

### Middlewares

- Middleware checkOrderId
Utilizado em todas rotas que recebem o parâmetro ID, verifica se o ID passado existe. Caso não exista, retorne uma mensagem de erro, caso contrário permite que requisição continue normalmente;

- Middleware methUrl
Chamado em todas requisições que tenha um console.log.
Mostra o método da requisiçao (GET, POST, PUT, DELETE e PATCH) seguido da url da requisição.

##### Exemplo
[POST] - /order




### 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#devclub-node-challenge)<br>