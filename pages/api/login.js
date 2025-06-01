// pages/api/login.js
import clientPromise from '../../src/lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { emailAddress, password } = req.body;
  const client = await clientPromise;
  const db = client.db("shoptrackDB");
  const user = await db.collection("users").findOne({ emailAddress });

  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  res.status(200).json({ message: "Login successful" });
}
