import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'



const NavBar = () => {
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }


  return (
    <header className='header'>
 <nav className={toggle?'navbar expanded':'navbar'}>
        <h2 className='logo'>NavBar</h2>
        <div className='toggle-icon' onClick={handleToggle}>
          X
        </div>
        <ul className='links'>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
    </nav>

    </header>
  )
}

export default NavBar
