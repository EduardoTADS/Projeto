const express = require(`express`); //framework para controlar as rotas.
const app = express();
const path = require(`path`);
const router = express.Router(); // acessando rotas com express.

//metodo GET do protocolo HTTP, funciona de forma padrão 
    //pedindo uma requisição e esperando uma resposta, informações trafegam via URL, diferente do metodo POST 
router.get(`/`, (req,res) =>{
    res.sendFile(path.join(__dirname+`/HTML/index.html`));

});


//metodo GET do protocolo HTTP, funciona de forma padrão 
    //pedindo uma requisição e esperando uma resposta, informações trafegam via URL, diferente do metodo POST 
    
router.get(`/lista`,(req,res)=>{
    res.sendFile(path.join(__dirname+`/HTML/lista.html`))
});

//ROUTER metodo que acessa a rota via express
app.use(`/`, router);
//LISTEN acessa a(o) porta/servidor atraves da constante app
app.listen(process.env.port || 3000);
