import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '.';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): IProduct {
  const { method } = req.query;
  switch (method) {
    case 'GET':
      break;

    default:
      res.status(400).json({ name: 'John Doe' });
      break;
  }
}
