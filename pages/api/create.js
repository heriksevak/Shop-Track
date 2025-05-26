import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const client = await clientPromise;
    const db = client.db('shoptrackDB');
    const collection = db.collection('products');

    const product = req.body;
    const result = await collection.insertOne(product);

    res.status(201).json({ insertedId: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong', details: error });
  }
}
