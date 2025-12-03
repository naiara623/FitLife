import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Newsletter from '../components/Newsletter.jsx'
import './Home.css'

export default function Home() {
  return (
    <div className='container-home'>
      <Navbar />
      <Newsletter />
    </div>
  )
}
