// Libraries
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
    title: string;
    summary: string;
    slug: string;
    image: string;
};

export default function Cards({
    title,
    summary,
    slug,
    image,
}: Props) {
    return (
        <>
            <Card className='flex-col w-full max-w-[48rem]'>
                <CardHeader
                    shadow={false}
                    floated={false}
                    className='shrink-0 m-0 h-36'
                >
                    <img
                        src={`/assets/${image}.jpg`}
                        alt='image'
                        className='object-cover object-center'
                    />
                </CardHeader>
                <CardBody className='p-4 flex-1 flex flex-col justify-between'>
                    <Typography
                        variant='h2'
                        color='blue'
                        className='mb-2 text-xl'
                    >
                        {title}
                    </Typography>
                    <Typography
                        color='gray'
                        className='font-normal pb-2 text-xs'
                    >
                        {summary}
                    </Typography>
                    <Link href={slug} className='inline-block'>
                        <Button
                            variant='text'
                            className='flex items-center gap-2 text-xs border border-blue-300'
                        >
                            En savoir plus
                            <ArrowLongRightIcon
                                strokeWidth={2}
                                className='w-4 h-4'
                            />
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </>
    );
}
