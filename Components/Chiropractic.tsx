// Libraries
import React from 'react';
import Image from 'next/image';

type Props = {};

const Chiropractic = (props: Props) => {
    // JSX
    return (
        <>
            <section className='absolute z-20 flex items-center justify-center p-8 bg-[#FFF] bg-opacity-60 rounded-xl drop-shadow-lg max-w-[70%] max-h-[70%]'>
                <div className='flex items-center'>
                    <Image
                        src='/assets/chiro.webp'
                        alt='Chiropractor'
                        // width={window.innerWidth >= 376 ? 200 : 100}
                        // height={window.innerWidth >= 376 ? 200 : 100}
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
