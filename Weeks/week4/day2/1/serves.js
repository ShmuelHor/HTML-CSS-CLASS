import express from 'express';
import newsRouter from './routes/newsRoutes.js'
const app = express();
const PORT = 3000

app.get("/",(req,res)=>{res.send("Home")})
app.use("/news",newsRouter);

app.listen(PORT,()=>{console.log("server on")})