const { MongoClient } = require("mongodb")
 
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017"
 
const client = new MongoClient(uri, { useUnifiedTopology: true })
 
async function run() {
  try {
    await client.connect()
    console.log("Connected Successfully to server")
 
    const database = client.db("fruitsDB")
    const fruitsCollection = database.collection("fruits")
 
    const cursor = fruitsCollection.find({})
 
    const docs = [
      {
        name: "Apple",
        score: 8,
        review: "Great Fruit",
      },
      {
        name: "Orange",
        score: 6,
        review: "Kind Sour",
      },
      {
        name: "Banana",
        score: 9,
        review: "Great Stuff!",
      },
    ]
    const option={ordered: true};
 
    const result=await fruitsCollection.insertMany(docs,option)
 
    console.log(`${result.insertedCount} documents were inserted`);
    //finding that element which have score greater than 5
    const query = { score: {$gt:5} }
 
    const product = await fruitsCollection.findOne(query)
    console.log("Found the document");
    console.log(product)
    //     if ((await cursor.count()) === 0) {
    //       console.log("No documents found!")
    //     }
    
    await cursor.forEach((fruit) => {
      //To print the inserted data
      // console.log(fruit) 
    })
    database.collection("posts").countDocuments(
      {}, // filters
      {}, // options
      function (error, result) {
        //   console.log(result)
      }
     )
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
 
run().catch(console.dir)
