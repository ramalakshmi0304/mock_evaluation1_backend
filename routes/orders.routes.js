import express from "express";
import { readFileSync, writeFileSync} from "fs";

const router = express.router();

const readData=()=>{
const data = readFileSync("/db.json","utf-8")
return JSON.parse(data,null,2)

}

const writeData =(data)=>{
writeFileSync ("/db.json",JSON.stringify(data))
};

orderRouter.post("/", (req,res)=>{
    
    const data = readData();

    newOrder={

        id: Date.now().toString(),
        productId: req.body.productId,
        quantity: req.body.quantity,
        totalAmount:(product.price * quantity),
        status: placed,
        createdAt: Date.now()
    }
    
    data.orders.push(newOrder)
    writeData (data);
    res.status(201).json({message:"new order created"})
});


orderRouter.get("/", (req,res)=>{
const data = readData()
res.status(200).json({message:"all orders"})

});

orderRouter.delete("/:orderId",(res,req)=>{
const data= readData()
const filteredOrders= data.orders.filter(order=> order.id !== req.params.orderId)
if(filteredOrders.length === data.orders.length || order.createdAt === currentDate)
    return res.status(400).json({message:"order not found"})
})

data.orders=filteredOrders;
writeData(data);
res.status(200).json({message:"cancelled order successfully"})

orderRouter.patch("/change-status/:orderId", (res,req)=>{
const data= writeData();

const userIndex= data.orders.findIndex(order=> order.id=== req.params.orderId)
if (userIndex === -1){
    return res.status(404).send({message:"order not found"});
}
const existingOrder = orders[orderIndex];
order[OrderIndex] ={...existingOrder, ...req.body};

res.status(200).json(orders[orderIndex]);

});

export default orderRouter;