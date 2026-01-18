import express from "express";
import { readFileSync, writeFileSync} from "fs";

const router = express.router();

const readFile=()=>{
const data = readFileSync("/db.json","utf-8")
return JSON.parse(data,null,2)

}

const writeFile =(data)=>{
writeFileSync ("/db.json",JSON.stringify(data))
};

orderRouter.post("/", (req,res)=>{
    
    const data = readFile();

    newOrder={

        id: Date.now().toString(),
        productId:
        quantity:
        totalAmount:product.price * quantity,
        status:
        createdAt: Date();
    }
    data.orders.push(newOrder)
    writeFile (data);
    res.status(201).json("new order created")
})


router


