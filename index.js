const express = require(`express`);
const app = express();
const path = require(`path`);
const router = express.Router();

router.get(`/`, (req,res) =>{
    res.sendFile(path.join(__dirname+`/HTML/index.html`));

});


router.get(`/lista`,(req,res)=>{
    res.sendFile(path.join(__dirname+`/HTML/lista.html`))
});

app.use(`/`, router);
app.listen(process.env.port || 3000);