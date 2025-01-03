import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import News from './pages/News/News';
function App() {

  return (
    <Router>
      <div className='sticky'>
        <Navbar/>
      </div>
      
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Work' element={<Work/>}/>
        <Route path='/News' element={<News/>}/>
      </Routes>
    </Router>
  )
}

export default App
