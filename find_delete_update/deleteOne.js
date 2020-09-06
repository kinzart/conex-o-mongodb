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
const colecao = db.db("usuarios")
    
let filtro = { login : "joel" };
                                            
                        //Inserir varios(objeto)                  //Function callback
      colecao.collection("usuarios").deleteOne(filtro, function(erro, resultado){
        if(erro)
            console.log("Erro ao remover documento: " + erro);
        else
            console.log("Documento Removido com sucesso");
    }); /* Para inserir vários documentos, bastaria utilizar a função insertMany, 
           para a qual poderíamos passar um array de objetos como primeiro argumento.*/ 







 
    // fim da conexão
    db.close();
  });