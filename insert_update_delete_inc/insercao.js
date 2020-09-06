var MongoClient = require('mongodb').MongoClient;
var servidor = 'mongodb://localhost:27017/db_laranja';
MongoClient.connect(servidor, function(erro, db) {
    if(erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else
        console.log("Conexão estabelecida com sucesso.");
   
    //inicio ---> JSON
        var cliente = {
        codigo : 3,
        nome : "Luiz Claudio",
        endereco : {
            logradouro : "Rua Mar vermelho",
            numero : "431",
            bairro : "Bairro Rio Vermelho",
            cidade : "Florianopolis",
            estado : "SC"
        },
        status : "Ativo",
        pontos : 22
    } //fim ---> JSON

    //Pegando a db atraves de uma variavel //Nesse caso criando uma collection("clientes")
    var colecao = db.db("clientes");

    //Apontando a colletion //inserindo nossa JSON com a funcao de teste 
    colecao.collection("clientes").insertOne(cliente, function(erro, resultado){
      if(erro)
          console.log("Erro ao inserir documento: " + erro);
      else
          console.log("Documento inserido com sucesso");
    });
    db.close();
}); 