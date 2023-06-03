import React from 'react';
import { IconType } from 'react-icons';

interface NavBarProps {
    routes: {name: string, icon: IconType, redirect: String}[];
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
    return (
      <div className='bg-white h-full'>
        <ul className='bg-blue-200 shadow-black flex flex-col sm:flex-row justify-between items-center px-5 pb-5 lg:py-5'>
          {routes.map((route, index) => (
            <li key={index} className='hover:font-black  border-b-2 lg:border-b-4 hover:border-black'>
              <a href={`${route.redirect}`} className="text-xl hover:text-2xl flex items-center space-x-2 m-2">
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