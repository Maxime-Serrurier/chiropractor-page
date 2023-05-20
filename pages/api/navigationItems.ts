// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { navigationItems } from '../../data/data';
import { NavigationItems } from '../../typings';
type Data = {
    navigationItems: NavigationItems[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ navigationItems });
}
