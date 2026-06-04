import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error("MONGODB_URI bulunamadı");
}

const client = new MongoClient(uri);

export async function connectDB() {
  await client.connect();
  return client.db("kartkutusu");
}

export { client };