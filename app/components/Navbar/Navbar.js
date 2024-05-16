import React from 'react'
import Link from 'next/link'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link href='/'>AI PDF SUMMARIZER</Link>
    </nav>
  )
}

export default Navbar