// Libraries
import React from 'react';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

type Props = {};

const Header = (props: Props) => {
  // JSX
  return (
    <>
      {/* Socials Icons */}
      <section className='container flex items-center mx-auto text-[#FFF] text-xl'>
        <div className='flex justify-end w-full gap-4'>
          <div className='flex gap-4'>
            <p className='flex gap-1'>
              <MapPinIcon
                style={{ height: 25, width: 25 }}
                color='#FFF'
              />
              <span>
                9 Rue de la Forge, 61210 Putanges-Pont-Écrepin
              </span>
            </p>

            <p className='flex gap-1 pl-4 border-l'>
              <PhoneIcon
                style={{ height: 25, width: 25 }}
                color='#FFF'
              />
              <span>06 99 34 75 54</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
