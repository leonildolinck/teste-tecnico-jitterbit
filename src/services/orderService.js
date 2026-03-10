const Order = require('../models/Order');

function mapOrder(data){

  return {
    orderId: data.numeroPedido,
    value: data.valorTotal,
    creationDate: new Date(data.dataCriacao),
    items: data.items.map(item => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  }
}

async function createOrder(data){

  const mapped = mapOrder(data);

  const order = new Order(mapped);

  return await order.save();
}

async function getOrder(orderId){
  return await Order.findOne({orderId});
}

async function listOrders(){
  return await Order.find();
}

async function updateOrder(orderId,data){

  const mapped = mapOrder(data);

  return await Order.findOneAndUpdate(
    {orderId},
    mapped,
    {new:true}
  )
}

async function deleteOrder(orderId){
  return await Order.findOneAndDelete({orderId});
}

module.exports = {
  createOrder,
  getOrder,
  listOrders,
  updateOrder,
  deleteOrder
}
