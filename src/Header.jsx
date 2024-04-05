import React from 'react'
import logo from './images/google-keep.png'
import './App.css'

const Header = () => {
  return (
    <>
        <div className="header">
            <img src={logo} alt="logo" width='70' />
            <h1>Google keep</h1>
        </div>
    </>
  )
}

export default Header