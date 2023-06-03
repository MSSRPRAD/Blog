import React from 'react';
import { IconType } from 'react-icons';

interface NavBarProps {
    routes: {name: string, icon: IconType}[];
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
    return (
      <div className='bg-white'>
        <ul className='flex flex-col sm:flex-row justify-between items-center'>
          {routes.map((route, index) => (
            <li key={index} className='hover:text-2xl'>
              <a href={`/${route.name}`} className="text-black font-black flex items-center space-x-2 m-2">
                <route.icon />
                <span className=''>{route.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default NavBar;