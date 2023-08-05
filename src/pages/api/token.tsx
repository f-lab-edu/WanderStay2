import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: string;
  email: string;
}

const users: User[] = [{ id: '1', email: 'test@test.com' }];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { token } = req.body;

    if (!process.env.JWT_SECRET) {
      res.status(500).json({ error: 'Server error' });
      throw new Error('JWT_SECRET을 설정해주세요');
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as {
        id: string;
        email: string;
      };

      const user = users.find((u) => u.id === decodedToken.id);

      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
