// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { consultationItems } from '../../data/data';
import { ConsultationItems } from '../../typings';

type Data = {
    consultationItems: ConsultationItems[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ consultationItems });
}
