// Libraries
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NavigationItems } from '../typings';

// Component
import MyDropdown from './MyDropDown';
import MyDrop from './MyDrop';

type Props = { navigationItems: NavigationItems[] };

const Hero = ({ navigationItems }: Props) => {
  // JSX
  return (
    <>
      <nav className='py-4 bg-[#3D9BE9]/40'>
        <ul className='text-[#FFF] flex justify-center items-center gap-x-8 text-xl drop-shadow-xl'>
          <li>
            <Link href='/'>Accueil</Link>
          </li>
          {navigationItems?.map((navigationItem, index) => (
            <li key={index}>
              <MyDrop title={navigationItem.title} />
            </li>
          ))}
          <li>
            <Link href='/prendre-rendez-vous'>
              Prendre rendez-vous
            </Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Hero;
