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
      {/* <Realease/>
      <ScrollToTop/>
      <Free/>
      <Client/>
      <SuperRare/>
      <Footer/>
      <Like/>
      <Signup/> */}
    </div>
  )
}

export default App
