// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { cardsItems } from '../../data/data';
import { CardsItems } from '../../typings';
type Data = {
    cardsItems: CardsItems[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ cardsItems });
}
