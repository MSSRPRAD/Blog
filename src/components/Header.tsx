import React from 'react';
import NavBar from './NavBar';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { GiQuillInk} from 'react-icons/gi';
// import '../App.css';


const Header: React.FC = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 sm:h-auto md:h-2/5 lg:h-2/5 border-black border-b-4'>
            <NavBar routes={[
                { name: 'Home', icon: FaHome, redirect: '/Blog/' },
                { name: 'About', icon: FaUser, redirect: '/Blog/about' },
                { name: 'Projects', icon: BsFillLightningChargeFill, redirect: '/Blog/projects' },
                { name: 'Blog', icon: GiQuillInk, redirect: '/Blog/blog' },
                { name: 'Contact', icon: FaEnvelope, redirect: '/Blog/contact' },
            ]} />
        </div>
    );
}

export default Header;