const orderService = require('../services/orderService');

exports.create = async (req,res) => {

  try{

    const order = await orderService.createOrder(req.body);

    res.status(201).json(order);

  }catch(err){

    res.status(500).json({
      error:"Erro ao criar pedido"
    });

  }

}

exports.get = async (req,res)=>{

  try{

    const order = await orderService.getOrder(req.params.id);

    if(!order)
      return res.status(404).json({message:"Pedido não encontrado"})

    res.json(order);

  }catch(err){

    res.status(500).json({error:"Erro ao buscar pedido"})

  }

}

exports.list = async (req,res)=>{

  const orders = await orderService.listOrders();

  res.json(orders)

}

exports.update = async (req,res)=>{

  try{

    const order = await orderService.updateOrder(
      req.params.id,
      req.body
    )

    res.json(order)

  }catch(err){

    res.status(500).json({error:"Erro ao atualizar pedido"})

  }

}

exports.remove = async (req,res)=>{

  try{

    await orderService.deleteOrder(req.params.id)

    res.json({
      message:"Pedido removido"
    })

  }catch(err){

    res.status(500).json({
      error:"Erro ao deletar pedido"
    })

  }

}
