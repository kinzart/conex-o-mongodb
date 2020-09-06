var MongoClient = require('mongodb').MongoClient;
var servidor = 'mongodb://localhost:27017/db_laranja';
MongoClient.connect(servidor, function(erro, db) {
    if(erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else
        console.log("Conexão estabelecida com sucesso.");
   

    //Pegando a db atraves de uma variavel //Nesse caso criando uma collection("clientes")
    var colecao = db.db("clientes");
    var filtro = { codigo : 1 } //Qual documento identificaremos?
    var troca = {$set: { "endereco.numero" : "999"}}

    //Apontando á collection, //Atualizando pelo filtro(cod 1) // trocando tal atributo instanciado na var troca 
    colecao.collection("clientes").updateOne(filtro, troca, function(erro){
      if(erro)
          console.log("Erro ao inserir documento: " + erro);
      else
          console.log("Documento inserido com sucesso");
    });
    db.close();
}); 