// Libraries
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// Component
import MyDropdown from './MyDropDown';
import { NavigationItems } from '../typings';

type Props = { navigationItems: NavigationItems[] };

const Hero = ({ navigationItems }: Props) => {
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
            <nav className='py-4 bg-[#3D9BE9]/40'>
                <ul className='text-[#FFF] flex justify-center gap-x-8 text-xl drop-shadow-xl'>
                    <li>
                        <Link href='/'>Accueil</Link>
                    </li>
                    {navigationItems?.map((navigationItem, index) => (
                        <li key={index}>
                            <MyDropdown
                                title={navigationItem.title}
                            />
                        </li>
                    ))}
                    <Link href='/prendre-rendez-vous'>
                        Prendre rendez-vous
                    </Link>
                    <Link href='/contact'>Contact</Link>
                </ul>
            </nav>
        </>
    );
};

export default Hero;
