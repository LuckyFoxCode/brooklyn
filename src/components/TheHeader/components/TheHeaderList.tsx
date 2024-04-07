import clsx from 'clsx';
import { FC } from 'react';

interface TheHeaderListProps {
  isOpen: boolean;
}
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

export const TheHeaderList: FC<TheHeaderListProps> = ({ isOpen }) => {
  return (
    <ul
      className={clsx(
        `${isOpen ? 'flex' : 'hidden'} w-[100vw] lg:w-fit flex-col lg:flex-row items-center absolute lg:static top-8 left-[-187px] bg-dark gap-y-[30px] lg:gap-y-0 lg:gap-x-[30px] py-10 lg:py-0`,
      )}>
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
