import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Sidebar from './pages/Sidebar';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import { useState } from 'react';
import ToggleBtn from './components/ToggleBtn';





function App() {
const[showbtn, setShowbtn] = useState(false);
console.log(showbtn)



  return (
    <div className='bg-black'>
      <BrowserRouter>
      <Sidebar setShowbtn={setShowbtn} showbtn={showbtn}/>
      <ToggleBtn setShowbtn={setShowbtn}/>
        <Routes>
          <Route path='/' element={<MainPage setShowbtn={setShowbtn} />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
