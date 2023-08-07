import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: string;
  email: string;
  password: string;
}

const users: User[] = [{ id: '1', email: 'test@test.com', password: 'test' }];

function authenticateUser({
  email,
  password,
}: Pick<User, 'email' | 'password'>) {
  return users.find((u) => u.email === email && u.password === password);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = authenticateUser({ email, password });

    if (!process.env.JWT_SECRET) {
      res.status(500).json({ error: 'Server error' });
      throw new Error('JWT_SECRET을 설정해주세요');
    }

    if (user) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        }
      );

      res.status(200).json({ token, user });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
