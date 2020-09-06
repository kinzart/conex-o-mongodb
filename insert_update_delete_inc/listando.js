var MongoClient = require('mongodb').MongoClient;
var servidor = 'mongodb://localhost:27017/db_laranja';
MongoClient.connect(servidor, function(erro, db) {
    if(erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else
        console.log("Conexão estabelecida com sucesso.");
   

    //Pegando a db atraves de uma variavel //Nesse caso criando uma collection("clientes")
    var colecao = db.db("clientes");
    //var filtro = { } //Qual documento identificaremos?
    var filtro = { "endereco.estado":"RJ"}
    // filtro = {} //quando vazio ele lista todos!
    //Apontando á collection, //Buscando pelo filtro() // trocando tal atributo instanciado na var troca 
    colecao.collection("clientes").find(filtro, function(erro, documentos){
            documentos.forEach(function(doc) {
                console.log("_______________________");
                console.log("Codigo: " + doc.codigo);
                console.log("Nome: " + doc.nome);
                console.log("Status: " + doc.status);
            }, this);
       
      if(erro)
          console.log("Erro ao inserir documento: " + erro);
      else
          console.log("Documento inserido com sucesso");
        });
    db.close();
}); 