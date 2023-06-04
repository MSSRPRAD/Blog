import './App.css'
import Home from './components/Home'
import About from './components/About';
import Blog from './components/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './components/Project';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path='/blog' Component={Blog} />
          <Route path='/projects' Component={Project} />
        </Routes>
      </Router>
    </>
  )
}

export default App
