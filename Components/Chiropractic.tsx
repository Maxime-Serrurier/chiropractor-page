// Libraries
import React from 'react';
import Image from 'next/image';

type Props = {};

const Chiropractic = (props: Props) => {
    // JSX
    return (
        <>
            <section className='relative flex items-center justify-center'>
                <div className='w-full bg-center bg-no-repeat bg-contain opacity-40 py-36 bg-header' />
                <div className='absolute flex items-center'>
                    <Image
                        src='/assets/chiro.webp'
                        alt='Chiropractor'
                        width={200}
                        height={200}
                        quality={100}
                    />
                    <h1 className='flex flex-col space-y-8 text-5xl text-[#376CA3] font-medium tracking-wide drop-shadow-2xl'>
                        <span className='self-start'>
                            Cabinet Chiropratique
                        </span>
                        <span className='self-end'>
                            Ludivine Serrurier
                        </span>
                    </h1>
                </div>
            </section>
        </>
    );
};

export default Chiropractic;
