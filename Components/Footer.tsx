// Libraries
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Footer = (props: Props) => {
  // JSX
  return (
    <div>
      <ul className='flex gap-2'>
        <li>
          <SocialIcon
            className='hover:opacity-80'
            bgColor='#FFF'
            style={{ height: 25, width: 25 }}
            url='https://facebook.fr'
          />
        </li>
        <li>
          <SocialIcon
            className='hover:opacity-80'
            bgColor='#FFF'
            style={{ height: 25, width: 25 }}
            url='https://instagram.fr'
          />
        </li>
        <li>
          <SocialIcon
            className='hover:opacity-80'
            bgColor='#FFF'
            network='email'
            url='mailto:ludivine.serrurier@gmail.com'
            style={{ height: 25, width: 25 }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
