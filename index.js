
const express = require('express')
const { path } = require('express/lib/application')
const uuid = require('uuid')
const port = 3000
const app = express()
app.use(express.json())


const orders = []

const checkOrderId = (request, response, next) =>{
    const { id } = request.params
    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "Order not found" })
    }

   
    request.orderIndex = index

    next()
  
}

const methUrl = (request, require, next) =>{
    const method = request.method
    const path = request.path
    console.log(`[${method}] - ${path}`)
    
    next()

}


app.get('/order', methUrl, (request, response) => {

    return response.json(orders)
})


app.post('/order', methUrl,     (request, response) => {
    const { order, clientName, price } = request.body
    const status = "Em preparação"
    const user = { id: uuid.v4(), order, clientName, price, status }
   
    orders.push(user)

    return response.status(201).json(user)  

})


app.put('/order/:id', methUrl, checkOrderId, (request, response) => {  

    const { id } = request.params
    const { order, clientName, price } = request.body
    const status = "Em preparação"
    const index = request.orderIndex    

    const updateOrder = { id, order, clientName, price, status }
   
    orders[index] = updateOrder

    return response.json(updateOrder)
})

app.patch('/order/:id', checkOrderId, methUrl, (request, response) => {  

    const index = request.orderIndex
    const { id, order, clientName, price } = orders[index]
    const finalOrderStatus = {id, order, clientName, price, status: "Pronto"}
          
    orders[index] = finalOrderStatus

    return response.json(finalOrderStatus)
})


app.delete('/order/:id', checkOrderId, (request, response) => {
    
    const index = request.orderIndex
    orders.splice(index, 1)

    return response.status(204).json()
})




















app.listen(port, () => {
    console.log(`🛸 Server started at port ${port}`)
})