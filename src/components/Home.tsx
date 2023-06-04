import React from 'react';
import Header from './Header';
// import MarkdownRenderer from './MarkdownRenderer';
import './Home.css'

const Home: React.FC = () => {
    return (
        <div className='Home bg-inherit'>
            <Header/>
            <div className='p-10'>
                <h1 className='text-6xl text-center mb-10'>Welcome to my website!</h1>
                <p>This is my personal website which I will try to maintain regularly. I will be posting some blog articles over the next few months here and share some parts of my work and life.</p>
                <h1></h1>
                <p>As for <strong>why</strong> to have a personal website, I have thought about it and :</p>
                <ul className="list-disc text-2xl py-5 px-10">
                    <li>It is good for your mental health to write frequently and you get to organize your thoughts more often.</li>
                    <li>It gives me an excuse to actually stop wasting time on mindless internet scrolling and actually do something productive instead.</li>
                    <li>It is too easy (and free!) to make and host one nowadays that there is no excuse to not have one.</li>
                    <li>Even if it amounts to nothing at least I have learnt something technical making the blog.</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Home;