const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 80;
const HOST = process.env.HOST;

const app = express(); // initialisation lancer l'application

app.use('/',express.static(path.join(__dirname,'angular','browser'))); //__dirname = path de fichier(qui contient npm init), midelware

app.get('', (req,res) =>{
    res.sendFile(path.join(__dirname,'angular','browser','index.html')); 
})

app.listen(PORT,()=>{  //demarage de serveur
    console.log(`serveur running at http://localhost:${PORT}`)

}) 