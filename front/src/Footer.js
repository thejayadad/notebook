import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <footer>
          <Link className='logo' to="/">
            NOTE BOOK
        </Link>
        <ul className='footer'>
            <li><Link className='footer-link' to="/">Home</Link></li>
            <li><Link className='footer-link' to="/">About</Link></li>
            <li><Link className='footer-link' to="/">Recent Post</Link></li>
        </ul>
        <p className='copyright'>Copyright All Rights Reserved</p>
    </footer>
  )
}

export default Footer