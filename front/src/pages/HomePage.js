import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
   <section className='banner'>
   <div className='contentBx'>
    <h2>The Public Note Book</h2>
    <h2>A Simple Site to Share Thoughts</h2>
    <Link className='btn' href="/about">About Us</Link>
    </div>
   </section>
  )
}

export default HomePage