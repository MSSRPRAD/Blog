import './App.css'
import Home from './components/Home'
// import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="about" Component={About} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
