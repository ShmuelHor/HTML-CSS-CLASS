const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const users = [
    { name: "Yossi", id: '101' },
    { name: "Sarah", id: '202' },
    { name: "Maya", id: '303' },
    { name: "David", id: '404' }
];
app.use(express.json())

app.post('/getdata',(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.id);
    res.status(200).json({massage:"ok"})
})

app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    
    try {
        const ress = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userId}`);
        
        if (ress.status !== 200) {
            throw new Error('uint');
        }
        
        res.status(200).json({
            name: ress.data.name, 
            id: ress.data.id, 
            type: ress.data.types[0].type.name
        });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
    }
});

// app.use(middlewareExample)
// function middlewareExample(req,res){
//     console.log(req.path)
//     console.log("middleware work")
    
// }

app.get('/example',(req,res)=>{
    res.send("example page")
})

app.listen(PORT, ()=>{console.log(`server is listen to ${PORT}`)});