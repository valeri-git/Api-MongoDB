import { MongoClient, ServerApiVersion } from "mongodb"
const uri = "mongodb+srv://SirBeo:BsTHViYpIr2mzG56@cluster0.hyyn5fu.mongodb.net/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

await client.connect();

export const db = client.db("meineNeueDatenbank")