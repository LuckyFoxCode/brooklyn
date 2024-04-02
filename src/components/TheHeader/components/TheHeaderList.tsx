import React from 'react';

interface navMenuProps {
  id: string;
  title: string;
}

const navMenu: navMenuProps[] = [
  { id: '#about', title: 'about' },
  { id: '#favorites', title: 'favorites' },
  { id: '#coffeeshop', title: 'coffee shop' },
  { id: '#contacts', title: 'contacts' },
  { id: '#librarycard', title: 'library card' },
];

export const TheHeaderList: React.FC = () => {
  return (
    <ul className='flex items-center gap-x-[30px]'>
      {navMenu.map(({ id, title }) => (
        <li key={id}>
          <a
            href={id}
            className='flex text-xl capitalize transition-colors hover:text-gray'>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};
