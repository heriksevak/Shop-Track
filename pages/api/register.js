// pages/api/register.js
import clientPromise from '../../src/lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { shopName, emailAddress,contactInformation,password,confirmPassword,securityAnswer } = req.body;
  const client = await clientPromise;
  const db = client.db("shoptrackDB");
  const user = await db.collection("users").findOne({ emailAddress });

  if (user) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  await db.collection("users").insertOne({shopName,contactInformation,securityAnswer, emailAddress, password: hashed });

  res.status(200).json({ message: "Registered successfully" });
}
