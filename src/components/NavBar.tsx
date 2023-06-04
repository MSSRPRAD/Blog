import React from 'react';
import { IconType } from 'react-icons';

interface NavBarProps {
    routes: {name: string, icon: IconType, redirect: String}[];
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
    return (
      <div className='h-full'>
        <ul className='shadow-black flex flex-col sm:flex-row justify-between items-center px-5 pb-5 lg:py-5'>
          {routes.map((route, index) => (
            <li key={index} className='hover:text-indigo-800  border-b-2 lg:border-b-4 hover:border-indigo-800'>
              <a href={`${route.redirect}`} className="text-xl hover:text-2xl hover:text-indigo-800 flex items-center space-x-2 m-2">
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