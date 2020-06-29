const MongoClient = require('mongodb').MongoClient;

//const user = "Thiago";
//const pass = "bancodedadosigit"

//const uri = `mongodb+srv://${user}:${pass}@movieapi.z0kfu.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const uri = `mongodb+srv://Thiago:bancodedadosigti@movieapi.z0kfu.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
client.connect(async (err) => {
  //obter coleção da base de dados
  const collection = client.db("moviedb").collection("movies");

  // buscar todos os elementos
  const documents = await collection.find().toArray();
  console.log(documents);

  // buscar apenas aqueles onde o ator é Sylvester Stallone
  const RockyBalboa = await collection.find({mainActor: "Sylverster Stallone"}).toArray();

  console.log("==========================================================")
  console.log(RockyBalboa);
  console.log("==========================================================")

  // Listar base de dados
  const dataBaseList = await client.db().admin().listDatabases();
  console.log(dataBaseList);

  /*
  dataBaseList.array.forEach(db => {
    console.log(` - ${db.name}`)
  })
  */

  client.close();
});
