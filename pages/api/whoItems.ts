// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { whoItems } from '../../data/data';
import { WhoItems } from '../../typings';

type Data = {
    whoItems: WhoItems[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ whoItems });
}
