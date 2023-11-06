import { db } from "../config/db.connect.js";

export async function getAll(body) {
  const result = await db.collection("users").find(body).toArray();
  return result;
}

export async function insertUser (body){ 
  await db.collection("users").insertOne(body); 
}

export async function updateUser (body) {
  await db.collection("users").updateOne({name:body.name},{$set:{email:body.email}});
}

export async function deleteUser (body) {
  await db.collection("users").updateOne({name:body.name},{$unset:{email:body.email}});
}

