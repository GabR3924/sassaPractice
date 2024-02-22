import './sass/index.scss'
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
      {/* 
      <ScrollToTop/>
    */}
    </div>
  )
}

export default App
