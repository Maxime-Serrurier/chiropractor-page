// Libraries
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import {
  whoItems,
  consultationItems,
  chiropracticItems,
} from '../data/NavigationItems';
import Link from 'next/link';

type Props = { title: string };

function MyDropdown({ title }: Props) {
  // State
  const [menuDisplayed, setMenuDisplayed] = useState([]);
  const [slugsArray, setSlugsArray] = useState([]);
  const [slug, setSlug] = useState('');

  console.log(slugsArray);
  console.log(slug);
  //   Methods
  const handleClickMenuItems = () => {
    if (title === 'La Chiropraxie') {
      let menuItemsArray: any = [];
      let slugItems: any = [];
      chiropracticItems?.map((chiropracticItem) => {
        menuItemsArray.push(chiropracticItem.title);
        slugItems.push(chiropracticItem.slug);
        setMenuDisplayed(menuItemsArray);
        setSlugsArray(slugItems);
      });
      slugsArray?.map((slug) => setSlug(slug));
    }
    if (title === 'Pour qui ?') {
      let menuItemsArray: any = [];
      whoItems.map((whoItem) => {
        menuItemsArray.push(whoItem.title);
        setMenuDisplayed(menuItemsArray);
      });
    }
    if (title === 'Consultation') {
      let menuItemsArray: any = [];
      consultationItems?.map((consultationItem) => {
        menuItemsArray.push(consultationItem.title);
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

      <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        {menuDisplayed.map((item) => (
          <Menu.Item key={item}>
            {({ active }) => (
              <a
                href={`/${slug}`}
                className={`${
                  active ? 'bg-[#B3B3B3] text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
              >
                {item}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default MyDropdown;
