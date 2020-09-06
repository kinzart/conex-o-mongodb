var MongoClient = require('mongodb').MongoClient;
// import == Solicitando banco a var MongoCliente
var servidor = 'mongodb://localhost:27017/db_laranja';
// Armazenando url do banco, no caso na var "servidor"
                    //colamos a url atraves da var servidor
MongoClient.connect(servidor, function(erro, db) {
  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else
    console.log("Conexão estabelecida com sucesso.");
 
//Instanciar objeto(usuarios) 
const colecao = db.db("topicos")
    

let filtro = { };
                                            
                        //Inserir varios(objeto)                  //Function callback
      colecao.collection("topicos").find(filtro).toArray(function(erro, documentos){
       console.log(documentos)
    }); /* Para inserir vários documentos, bastaria utilizar a função insertMany, 
           para a qual poderíamos passar um array de objetos como primeiro argumento.*/ 







 
    // fim da conexão
    db.close();
  });