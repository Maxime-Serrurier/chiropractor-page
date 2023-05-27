// Libraries
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import {
    whoItems,
    consultationItems,
    chiropracticItems,
} from '../data/data';
import Link from 'next/link';

interface Item {
    title: string;
    slug: string;
}

type Props = { title: string };

function MyDropdown({ title }: Props) {
    // State
    const [menuDisplayed, setMenuDisplayed] = useState([]);

    //   Methods
    const handleClickMenuItems = () => {
        if (title === 'La Chiropraxie') {
            let menuItemsArray: any = [];
            let slugItems: any = [];
            chiropracticItems?.map((chiropracticItem) => {
                menuItemsArray?.push(chiropracticItem);

                setMenuDisplayed(menuItemsArray);
            });
        }
        if (title === 'Pour qui ?') {
            let menuItemsArray: any = [];
            whoItems.map((whoItem) => {
                menuItemsArray.push(whoItem);
                setMenuDisplayed(menuItemsArray);
            });
        }
        if (title === 'Consultation') {
            let menuItemsArray: any = [];
            consultationItems?.map((consultationItem) => {
                menuItemsArray.push(consultationItem);
                setMenuDisplayed(menuItemsArray);
            });
        }
    };
    // JSX
    return (
        <Menu
            as='div'
            className='relative z-10 inline-block text-left'
        >
            <div>
                <Menu.Button
                    onClick={handleClickMenuItems}
                    className='flex items-center hover:opacity-50'
                >
                    {title}
                    <ChevronDownIcon
                        className='w-5 h-5 -mr-1 hover:opacity-60'
                        aria-hidden='true'
                    />
                </Menu.Button>
            </div>

            <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-[#B1D7F6] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20'>
                {menuDisplayed?.map((item: Item, index) => (
                    <Menu.Item key={index}>
                        {({ active }) => (
                            <Link
                                href={`/${item.slug}`}
                                className={`${
                                    active
                                        ? 'bg-[#B1D7F6]/80 text-white'
                                        : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                            >
                                {item.title}
                            </Link>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
}

export default MyDropdown;
