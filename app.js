const express = require('express');
const path = require('path');
const app = express();

let publicPath = path.resolve(__dirname,'./public');
let home =  path.resolve(__dirname,'./views/home.html');

app.use(express.static(publicPath));

app.get('/',(req, res)=>{
    res.sendFile(home)
});

app.get('/register',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/login',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
// aqui se levanta el servidor
let puerto =  process.env.PORT || 3000;
app.listen(puerto, ()=>{
    console.log('Server Up! ;) Puerto: ' + puerto);
});
