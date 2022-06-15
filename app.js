const express = require('express');
const path = require('path');
const app = express();

let publicPath = path.resolve(__dirname,'./public');
let home =  path.resolve(__dirname,'./views/home.html');

app.use(express.static(publicPath));

app.get('/',(req, res)=>{
    res.sendFile(home)
});

app.get('/home',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/homeProfe.html'))
})

app.get('/ejemplo',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/ejemplo.html'))
})

// aqui se levanta el servidor

app.listen(3000, ()=>{
    console.log('Server Up! ;)');
});
