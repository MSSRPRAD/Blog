import React from 'react';
import NavBar from './NavBar';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { GiQuillInk} from 'react-icons/gi';
// import '../App.css';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className=''>
            <div className='p-5 mb-10 mt-0'>
                <NavBar routes={[
                    { name: 'Home', icon: FaHome },
                    { name: 'Projects', icon: BsFillLightningChargeFill },
                    { name: 'Blog', icon: GiQuillInk },
                    { name: 'About', icon: FaUser },
                    { name: 'Contact', icon: FaEnvelope },
                ]} />
            </div>
            <h1 className="font-weight: 900 font-bold text-center text-4xl">{title}</h1>
        </div>
    );
}

export default Header;