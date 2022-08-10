const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.listen(3030, ()=>{
    console.log('Servidor funcionando en puerto 3030');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});