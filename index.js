const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')


consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

  // toda vez que quiser acessar o banco de dados usar app.db, que está apontado para o knex
app.db =db


app.use(NomeDesenvolvedor())


function NomeDesenvolvedor() {
  return(req,res,next) =>{
    console.log('Anderson Pereira Dev.')
    next()
  }
}

app.get('/',(req,res,next) => {
    res.status(200).send('Meu primeiro Backend')
    console.log('Meu primeiro webservice')

  next()
})

app.get('/Nfe/:numero',(req,res,next) => {
    res.status(200).send('Número da Nfe: ' +req.params.numero)
    console.log('Meu primeiro webservice')

  next()
})

app.get('/chavenfe',(req,res,next) => {
    res.status(200).send('A chave da NFE é: ' +req.query.chave)
    console.log('Meu primeiro webservice')

  next()
})


app.post('/auth',(req,res,next) => {
    //res.status(200).send('Acesso solicitado para o email: ' + JSON.stringify(req.body.email))
    res.status(200).send('Acesso solicitado para o email: ' + req.body.dependentes[0].nome )
    console.log('Meu primeiro webservice')

  next()
})



app.listen(3000,() => {
    console.log('Backend executando...')

})