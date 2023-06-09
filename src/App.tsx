import './App.css'
import Home from './components/Home'
import About from './components/About';
import Blog from './components/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  // Assuming you have imported the required dependencies for the Router component

  const basename = import.meta.env.DEV ? '/Blog' : '/';

  // Make sure that basename is of type string or undefined
  const routerProps = basename ? { basename } : {};


  return (
    <>
      <Router {...routerProps}>
        <Routes>
          <Route path="/Blog/" element={<Home />} />
          <Route path="/Blog/about" element={<About />} />
          <Route path='/Blog/blog' element={<Blog />}  />
          <Route path='/Blog/projects' element={<Project />} />
          <Route path='/Blog/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
