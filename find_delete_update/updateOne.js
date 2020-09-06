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
 
    //fazendo update de maria //$set 
 let usuarios =  { $set: {login : "maria", senha : "12345"}}
 

//Instanciar objeto(usuarios) 
const colecao = db.db("usuarios")
    
let filtro = { login : "maria" };
                                            
                        //Inserir varios(objeto)                  //Function callback
      colecao.collection("usuarios").updateOne(filtro, usuarios, function(erro, resultado){
        if(erro)
            console.log("Erro ao atualizar documento: " + erro);
        else
            console.log("Documento Atualizado com sucesso");
    }); /* Para inserir vários documentos, bastaria utilizar a função insertMany, 
           para a qual poderíamos passar um array de objetos como primeiro argumento.*/ 







 
    // fim da conexão
    db.close();
  });