
import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from './Footer'
import Header from './Header'
import { NavLink } from "react-router-dom"
import logoMain from "../src/assets/images/logo.svg"


export default function MainLayout() {
  return (
    <div className='main-wrapper'>
      <header className='header'>
       <NavLink to=".">
         <h1><img src={logoMain} alt="page logo" /></h1> 
       </NavLink>
      </header>
         <main>
          <Outlet />
          </main>
      <Footer />
    </div>
  )
}
