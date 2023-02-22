var Db  = require('./services/dboperations');
const dboperations = require('./services/dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { rows } = require('mssql');
const { response, request } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   // console.log('Operação feita com sucesso!!');
   next();
})

//GET
router.route('/pessoas').get((request,response)=>{

    dboperations.getPessoas().then(result => {
       response.json(result);
    })
})

//GET PARAMS
router.route('/orders/:name').get((request,response)=>{

   dboperations.getOrder(request.params.name).then(result => {
      response.json(result[0]);
   })

})

//POST
router.route('/create').post((request,response)=>{

    let add = {...request.body}

    dboperations.Create(add).then(result => {
       response.status(201).json(result);
    })

})

//POST 
router.route('/create/pessoas').post((request,response) => {
   let add = {...request.body}

   dboperations.CreatePessoas(add).then(result => {
      response.status(201).json(result);
   })
})

//PUT 
router.route('/orders/update/:id').put((req, res) => {
   
   let add = {...req.body}
   let id_pessoa = req.params.id

   dboperations.Update(id_pessoa, add).then(result => {
      res.status(200).json({message: 'Update realizado com sucesso!!'})
   })
})

//POST
router.route('/userip').post((req, res)=>{

   let add = {...req.body}

   dboperations.Insert(add).then(result => {
      res.status(201).json(result);
   })

})

//DELETE 
router.route('/orders/delete/:id').delete((request, response) => {

   dboperations.deleteOrder(request.params.id).then(result => {
      response.status(200).json({message: 'Deletado com sucesso!!!'});
   })
})




var port = process.env.PORT || 8090;
app.listen(port);
console.log('Api rodando em: http://localhost:'+port);



