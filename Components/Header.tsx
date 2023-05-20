// Libraries
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/20/solid';

type Props = {};

const Header = (props: Props) => {
    // JSX
    return (
        <>
            {/* Socials Icons */}
            <section className='container flex items-center justify-between mx-auto text-[#FFF] text-xl'>
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
                <ul className='flex gap-4 '>
                    <li className='flex gap-1'>
                        <MapPinIcon
                            style={{ height: 25, width: 25 }}
                            color='#FFF'
                        />
                        <span>
                            9 Rue de la Forge, 61210
                            Putanges-Pont-Écrepin
                        </span>
                    </li>

                    <li className='flex gap-1 pl-4 border-l'>
                        <PhoneIcon
                            style={{ height: 25, width: 25 }}
                            color='#FFF'
                        />
                        <span>06 99 34 75 54</span>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Header;
