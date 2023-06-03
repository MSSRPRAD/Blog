import React from 'react';
import NavBar from './NavBar';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { GiQuillInk} from 'react-icons/gi';
// import '../App.css';


const Header: React.FC = () => {
    return (
        <div className='sm:h-auto md:h-2/5 lg:h-2/5 border-black border-b-4'>
            <NavBar routes={[
                { name: 'Home', icon: FaHome, redirect: '/' },
                { name: 'Projects', icon: BsFillLightningChargeFill, redirect: '/projects' },
                { name: 'Blog', icon: GiQuillInk, redirect: '/blog' },
                { name: 'About', icon: FaUser, redirect: '/about' },
                { name: 'Contact', icon: FaEnvelope, redirect: '/contact' },
            ]} />
        </div>
    );
}

export default Header;