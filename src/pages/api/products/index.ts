// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { IProductRequest } from '../../../resources/interfaces/IRequest';
import type {
  IProductResponse,
  IGetProductResponse,
} from '../../../resources/interfaces/IResponse';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req.query;
  switch (method) {
    case 'GET':
      const products = await productsController.getAll();
      res.status(200).json({
        success: true,
        products,
      });
      break;

    default:
      res.status(400).json({ name: 'John Doe' });
      break;
  }
}
