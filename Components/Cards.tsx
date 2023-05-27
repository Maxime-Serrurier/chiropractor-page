import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Example() {
    return (
        <>
            <Card className='flex-col w-full max-w-[48rem]'>
                <CardHeader
                    shadow={false}
                    floated={false}
                    className='shrink-0 m-0'
                >
                    <img
                        src='/assets/colonne-vertebrale.jpg'
                        alt='image'
                        className='object-cover'
                    />
                </CardHeader>
                <CardBody className='p-4'>
                    <Typography
                        variant='h2'
                        color='blue'
                        className='mb-2 text-xl'
                    >
                        La Chiropraxie
                    </Typography>
                    <Typography
                        color='gray'
                        className='font-normal pb-2 text-xs'
                    >
                        1ère profession de santé manuelle et 3ème
                        profession de santé, au niveau international.
                    </Typography>
                    <a href='#' className='inline-block'>
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
                    </a>
                </CardBody>
            </Card>
        </>
    );
}
