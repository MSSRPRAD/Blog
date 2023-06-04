import React from 'react';
import Header from './Header';
import './About.css'
import profile from '../assets/pradyumna.jpeg';

const About: React.FC = () => {
    return (
        <div className='bg-inherit'>
            <Header/>
            <div className='p-10'>
                <h1 className='text-6xl text-center mb-10'>About Myself!</h1>
                <div className='flex justify-center items-center'>
                <img src={profile} alt="Profile" className='sm:h-3/5 sm:w-4/5 lg:h-1/5 lg:w-2/5 rounded-full pb-10' />    
                </div>
                <p>I am Pradyumna, a third year undergraduate computer science student studying in the
                    Birla Institute of Science and Technology in Hyderabad, India. I wish
                    to learn technical stacks that have a great future in the industry. 
                    <br></br><br></br>
                    As for what I am doing currently, I am trying to get better at Python and Rust and
                    also (unwillingly) learning a bit of DSA and Javascript on the side.
                </p>
                <h1></h1>
                <p>Interests (in no particular order):</p>
                <ul className="list-disc text-2xl py-5 px-10">
                    <li>Machine Learning</li>
                    <li>Modern Fullstack Web Development</li>
                    <li>Linux</li>
                    <li>NLP</li>
                    <li>Rust & Python</li>
                </ul>
                <br></br>
                <p>Some relevant courses that I have pursued in my college:</p>
                <ul className="list-disc text-2xl py-5 px-10">
                    <li>Machine Learning</li>
                    <li>Data Structures and Algorithms</li>
                </ul>
            </div>
        </div>
    )
}

export default About;