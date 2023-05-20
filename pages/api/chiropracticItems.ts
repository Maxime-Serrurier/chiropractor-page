// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { chiropracticItems } from '../../data/data';
import { ChiropracticItems } from '../../typings';

type Data = {
    chiropracticItems: ChiropracticItems[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ chiropracticItems });
}
