// import { Header } from './components/Header/Header'
// import { Hero } from './components/Hero/Hero'
import './App.scss'
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
      <Realease/>
      <Home/>
      <ScrollToTop/>
      <Navbar/>
      <Free/>
      <Client/>
      <SuperRare/>
      <Footer/>
      <Like/>
      <Signup/>
    </div>
  )
}

export default App
