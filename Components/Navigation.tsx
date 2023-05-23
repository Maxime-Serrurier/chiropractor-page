// Libraries
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// Component
import MyDropdown from './MyDropDown';
import { NavigationItems } from '../typings';
import Mdd from './MDD';

type Props = { navigationItems: NavigationItems[] };

const Hero = ({ navigationItems }: Props) => {
    // JSX
    return (
        <>
            <nav className='py-2 bg-[#3D9BE9]/40'>
                <ul className='text-[#FFF] flex justify-center items-center gap-x-8 text-xl drop-shadow-xl'>
                    <li>
                        <Link href='/'>Accueil</Link>
                    </li>
                    {navigationItems?.map((navigationItem, index) => (
                        <li key={index}>
                            <Mdd title={navigationItem.title} />
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
