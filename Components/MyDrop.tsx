import React, { useState } from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
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

export default function MyDrop({ title }: Props) {
    const [menuDisplayed, setMenuDisplayed] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);

    const triggers = {
        onMouseEnter: () => {
            if (title === 'La Chiropraxie') {
                let menuItemsArray: any = [];
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
            setOpenMenu(true);
        },
        onMouseLeave: () => setOpenMenu(false),
    };

    return (
        <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
                <p
                    {...triggers}
                    className='flex items-center gap-3 font-["Raleway"] text-normal cursor-pointer'
                >
                    {title}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                            openMenu ? 'rotate-180' : ''
                        }`}
                    />
                </p>
            </MenuHandler>
            <MenuList
                {...triggers}
                className='hidden w-[36rem] gap-3 overflow-visible lg:grid'
            >
                {menuDisplayed?.map((item: Item, index) => (
                    <MenuItem
                        className='hover:bg-[#B1D7F6]/80 hover:text-white'
                        key={index}
                    >
                        <Link
                            href={`/${item.slug}`}
                            className='flex flex-col items-center w-full px-4 py-2 text-sm rounded-md group'
                        >
                            {item.title}
                        </Link>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
