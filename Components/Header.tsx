// Libraries
import React from 'react';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/20/solid';

type Props = {};

const Header = (props: Props) => {
    // JSX
    return (
        <>
            <section className='container flex items-center mx-auto text-[#FFF] text-xl'>
                <div className='flex justify-between items-center w-full gap-4'>
                    <button className='border py-2 px-4 rounded-lg hover:bg-[#FFF] hover:bg-opacity-80 duration-300 hover:text-blue-600'>
                        Prendre Rendez-vous
                    </button>
                    <div className='flex gap-4'>
                        <p className='flex gap-1'>
                            <MapPinIcon
                                style={{ height: 25, width: 25 }}
                                color='#FFF'
                            />
                            <span>
                                9 Rue de la Forge, 61210
                                Putanges-Pont-Écrepin
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
