import { Container, Icon } from 'components/common';
import { FC, useState } from 'react';
import { TheHeaderList } from './components';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-dark text-white py-5'>
      <Container className='flex items-center'>
        <a
          href='/'
          className='inline-flex transition-colors hover:text-gold'>
          <h1 className='font-serif text-base lg:text-3xl tracking-wide'>
            Brooklyn Public Library
          </h1>
        </a>
        <nav className='flex justify-end grow relative'>
          <TheHeaderList isOpen={isOpen} />
        </nav>
        <button className='flex items-center justify-center size-7 rounded-full transition-colors bg-white hover:bg-gold ml-10'>
          <Icon
            name='profile'
            className='size-5 fill-black'
          />
        </button>
        <button
          onClick={handleOpenMenu}
          className='flex lg:hidden ml-10 lg:ml-0'>
          <Icon
            name='burger'
            className='size-7 stroke-white transition hover:stroke-gold'
          />
        </button>
      </Container>
    </header>
  );
};
