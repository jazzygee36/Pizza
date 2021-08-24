import React, {useState} from 'react'
import {HeroContainer,HeroContent, HeroItems,HeroH1,HeroP,HeroBtn} from './indexElements'
import Navbar from '../navbarFolder/navbar'
import Sidebar from '../sidebarFolder/sidebar'
import Products from '../productsFolder/products'
import Feature from '../feactureFolder/feature'
import Footer from '../footerFolder/footer'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleOrder = () => {
    alert('scroll down to place an Order')
  }
  return (
    <>
    <HeroContainer>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn onClick={handleOrder}>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
    <Products />
    <Feature />
    <Products />
    <Footer />


    </>
    
  )
}

export default Index
