import express from "express";
import orderRouter from "./routes/orders.routes.js"
import productRouter from "./routes/products.routes.js"
import analyticsRouter from "./routes/analytics.routes.js"


const app = express();
const PORT =3000;

app.use (express.json());

app.router("/orders",orderRouter);
app.router("/analytics",analyticsRouter);

app.listen(PORT, ()=>{
    console.log(`message:server is running on ${PORT}`)

})