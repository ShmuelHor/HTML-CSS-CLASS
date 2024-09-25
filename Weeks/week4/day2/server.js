import express from 'express';
import newsRouter from './routes/routes.js'
const app = express();
app.use(express.json())


const PORT = 3000;
app.use("/users",newsRouter);

app.listen(PORT, ()=>{console.log(`server is listen to ${PORT}`)});
