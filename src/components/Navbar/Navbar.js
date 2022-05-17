import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';
import './Navbar.css'
import Home from '../Home';
import Testimonials from '../Testimonials';
import WhyStoneadda from '../WhyStoneadda';
import HowToSell from '../HowToSell/HowToSell';
import FAQ from '../FAQ/FAQ';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

const [click , setClick]= useState(false);
const handleClick =() => setClick(!click);

  return (
    <div>
        <Router>
      <div className='navbar'>
          <div className='leftnavbar'>
          <NavLink className='logo' to='/'>
          Logo</NavLink> 
          </div>

          <div className='rnavbar'>
          <ul className= {click ? "activenavlist" : "navlist"} >
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'activelinks' : 'links')} onClick={handleClick}  to='/'>Home</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'activelinks' : 'links')} onClick={handleClick} to='/WhyStoneadda'>Why Stoneadda?</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'activelinks' : 'links')} onClick={handleClick} to='/HowToSell'>How to sell?</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'activelinks' : 'links')} onClick={handleClick} to='/Testimonials'>Testimonials</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'activelinks' : 'links')} onClick={handleClick} to='/FAQ'>FAQs</NavLink>
              </li>
              </ul> 
              

              <div className='rightnavbar'>
                  <button className='signup'>Sign up</button>
                  <button className='signin'>Sign in</button>

                  <div className='menuicon' onClick={handleClick} >
                  { click ? <CloseIcon sx={{ fontSize: 40 }}/> : <MenuIcon sx={{ fontSize: 40 }}/>}
                  </div>
              </div>
      </div>
      </div>
      <Routes>
                 <Route  path='/' element={< Home />}/>
                 <Route  path='/WhyStoneadda' element={< WhyStoneadda />}/>
                 <Route  path='/HowToSell' element={< HowToSell />}/>
                 <Route  path='/Testimonials' element={< Testimonials />}/>
                 <Route  path='/FAQ' element={< FAQ />}/>
                 </Routes>
      </Router>
    </div>
  )
}

export default Navbar