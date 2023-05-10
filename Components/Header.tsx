// Libraries
import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { PhoneIcon } from '@heroicons/react/20/solid';

type Props = {};

const Header = (props: Props) => {
  // JSX
  return (
    <>
      {/* Socials Icons */}
      <nav className='container mx-auto flex justify-between items-center'>
        <div className='flex gap-2'>
          <SocialIcon
            style={{ height: 25, width: 25 }}
            url='https://facebook.fr'
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            url='https://instagram.fr'
          />
          <SocialIcon
            network='email'
            url='mailto:ludivine.serrurier@gmail.com'
            style={{ height: 25, width: 25 }}
          />
        </div>
        <p className='flex gap-2'>
          <PhoneIcon
            style={{ height: 25, width: 25 }}
            color='#3D9BE9'
          />
          <span>06 99 34 75 54</span>
        </p>
      </nav>
    </>
  );
};

export default Header;
