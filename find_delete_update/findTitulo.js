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
    
var indice = { conteudo : "text" };
colecao.createIndex(indice);
let filtro = { $text : { $search : "Erro de compilacao"} };
                                            
                        //Inserir varios(objeto)                  //Function callback
      colecao.collection("topicos").find(filtro).toArray(function(erro, documentos){
      documentos.forEach(function(doc) {
        console.log("Título: " + doc.titulo);
        console.log("Conteúdo: " + doc.conteudo);
        console.log("Tags: " + doc.tags);
        console.log("---");
    }, this);
    }); /* Para inserir vários documentos, bastaria utilizar a função insertMany, 
           para a qual poderíamos passar um array de objetos como primeiro argumento.*/ 







 
    // fim da conexão
    db.close();
  });