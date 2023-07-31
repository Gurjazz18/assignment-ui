import React from 'react'
import TopHeroPage from '../TopHero/TopHeroPage'
import MiddlePage from '../MiddlePage/MiddlePage'
import Fradecoliar from '../Fradecoliar/Fradecoliar'
import ContactForm from '../FormCom/ContactForm'


const Navbar = () => {

  return (
    <div>
         <div className='NavbarCss'>
            <img src="/logo.png" alt='logo' width="60px"/>
         </div>
         <TopHeroPage/>
         <MiddlePage/>
         <Fradecoliar/>
         <ContactForm/>
    </div>
  )
}

export default Navbar
