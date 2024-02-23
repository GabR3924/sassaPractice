import './sass/index.scss'
import { useState, useEffect } from 'react' 
import ScrollReveal from 'scrollreveal'
import Client from './Components/Client'
import Footer from './Components/Footer'
import Free from './Components/Free'
import Home from './Components/Home'
import Like from './Components/Like'
import Navbar from './Components/Navbar'
import Realease from './Components/Realease'
import ScrollToTop from './Components/ScrollToTop'
import Signup from './Components/Signup'
import SuperRare from './Components/SuperRare'

function App() {

  useEffect(()=>{
    const registerAnimation = () => {
      const sr =ScrollReveal({
        origin:"bottom",
        distance:"80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(`
      nav,.home,.free,.clients,.super-rare,.releases,.like,.signup,footer
      `,
       { interval: 500 }
      );
    };
    registerAnimation()
  },[]);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByName("nav");
    nav[0].style.tranform = "none";
  }, 1500);

  return (
    <div className='app-container'>
      <Navbar/>
      <Home/>
      <Free/>
      <Client/> 
      <SuperRare/>
      <Realease/>
      <Like/>
      <Signup/> 
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default App
