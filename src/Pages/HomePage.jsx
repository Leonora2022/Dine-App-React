
import React from 'react'
import {NavLink} from "react-router-dom"

import heroDesktop from "../assets/images/hero-bg-desktop.jpg"
import heroTablet from "../assets/images/hero-bg-tablet.jpg"
import enjoyableTablet from "../assets/images/enjoyable-place-tablet2.jpg"
import enjoyableDesktop from "../assets/images/enjoyable-place-desktop.jpg"
import patternDivide from "../assets/images/pattern-divide.svg"
import localMobile from "../assets/images/locally-sourced-mobile.jpg"
import localTablet from "../assets/images/locally-sourced-tablet.jpg"
import localDesktop from "../assets/images/locally-sourced-desktop.jpg"
import salmonMobile1 from "../assets/images/salmon-mobile1.jpg"
import salmonMobile2 from "../assets/images/salmon-mobile2.jpg"
import salmonTablet from "../assets/images/salmon-tablet.jpg"
import salmonDesktop from "../assets/images/salmon-desktop.jpg"
import beefMobile1 from "../assets/images/beef-mobile1.jpg"
import beefMobile2 from "../assets/images/beef-mobile2x.jpg"
import beefTablet from "../assets/images/beef-tablet.jpg"
import beefDesktop from "../assets/images/beef-desktop.jpg"
import chocolateMobile1 from "../assets/images/chocolate-mobile1.jpg"
import chocolateMobile2 from "../assets/images/chocolate-mobile2.jpg"
import chocolateTablet from "../assets/images/chocolate-tablet.jpg"
import chocolateDesktop from "../assets/images/chocolate-desktop.jpg"
import familyMobile from "../assets/images/family-gathering-mobile.jpg"
import familyTablet from "../assets/images/family-gathering-tablet.jpg"
import  botImgTablet from "../assets/images/ready-bg-mobile2.jpg"
import botImgDesktop from "../assets/images/ready-bg-tablet.jpg"





function  HomePage() {
  return (
    <section className='home-section'>
     <picture  className='hero-bg'>
     <source
       type="image/jpeg"
       srcSet={`${heroTablet} 412w, ${heroTablet} 800w`} 
       sizes={`(max-width: 412px) 412px, (max-width: 800px) 800px`} 
     />
     <img src={heroDesktop} alt="Hero background image"/>
   </picture>

   <div className="hero-body">
      <h1 className='hero-title'>Exquisite dining <span className='hero-subtitle'>since 1989</span></h1>
       <p className='hero-summary'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse. </p>
       <NavLink to="reserve" className="btn hero-btn">
           Book a table
       </NavLink>
    </div>

    <div className="enoyable-place">
    <picture className='food-img'>
     <source
       type="image/jpeg"
       srcSet={`${localTablet} 412w, ${enjoyableDesktop} 800w`} 
       sizes={`(max-width: 412px) 412px, (max-width: 800px) 800px`} 
     />
     <img src={localMobile} alt="Local food"/>
   </picture>
     <img src={patternDivide} alt="pattern lines image" />
      <h2 className='title'>Enjoyable place for all the family</h2>
      <p className='details'>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
    </div>

    <div className="local-food">
   <picture className='enjoy-img'>
     <source
       type="image/jpeg"
       srcSet={`${enjoyableTablet} 412w, ${localDesktop} 800w`} 
       sizes={`(max-width: 412px) 412px, (max-width: 800px) 800px`} 
     />
     <img src={enjoyableTablet} alt="Enjoyable place"/>
   </picture>
   <img src={patternDivide} alt="pattern lines image" />
     <h2 className='title'>The most locally sourced food </h2>
     <p className='details'>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
    </div>

    <div className="menu-highlight">
    <img src={patternDivide} alt="pattern lines image" />
      <h2 className='title'>A few highlights from our menu </h2>
      <p className='menu-summary'>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season. </p>

      <div className="dish">
      <picture className='enjoy-img'>
     <source
       type="image/jpeg"
       srcSet={`${salmonMobile2} 300w, ${salmonTablet} 412w, ${salmonDesktop} 800w`} 
       sizes={`(min-width: 412px) 412px, (min-width: 800px) 800px`} 
     />
     <img src={salmonMobile1} alt="Enjoyable place"/>
   </picture>
    <h3 className='sub-title'>Seared Salmon Fillet </h3>
     <p> Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
   </div>

   <div className="dish">
   <picture className='enjoy-img'>
     <source
       type="image/jpeg"
       srcSet={` ${beefTablet} 412w, ${beefDesktop} 800w`} 
       sizes={`(min-width: 412px) 412px, (min-width: 800px) 800px`} 
     />
     <img src={beefMobile2} alt="Beef dish"/>
   </picture>
     <h3 className='sub-title'>Rosemary Filet Mignon</h3>
     <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
   </div>

   
   <div className="dish">
   <picture className='bottom-img'>
     <source
       type="image/jpeg"
       srcSet={` ${chocolateTablet} 412w ${botImgDesktop} 800w`} 
       sizes={` (min-width: 412px) 412px, (min-width: 800px) 800px`} 
     />
     <img src={chocolateTablet} alt="Chocolate Smoothie"/>
   </picture>
    <h3 className='sub-title'>Summer Fruit Chocolate Mousse</h3>
    <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
   </div>
   </div>  {/*menu-highlight */}

   <section className='family-section'>
   <picture className='family-img'>
     <source
       type="image/jpeg"
       srcSet={` ${familyMobile} 412w`} 
       sizes={` (max-width: 412px) 412px`} 
     />
     <img src={ familyTablet} alt="Chocolate Smoothie"/>
   </picture>
        <h3 className='family-title2'> Family Gathering </h3>
        <p className='family-title1'>Special Events </p>
        <p className='family-title1'>Social Events</p>
        <h2 className='title'>Family Gathering</h2>
        <p className='family-summary'>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all. </p>
        <NavLink to="reserve" className="btn btn-dark">
           BOOK A TABLE
        </NavLink>
   </section>

   <div className="bottom-section">
     <h2> Ready to make a reservation?</h2>
     <NavLink to="reserve" className="btn btn-white">
       Book a table
     </NavLink>
   </div>


    </section>
  )
}

export default  HomePage