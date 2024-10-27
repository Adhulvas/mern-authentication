import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Home.css'

function Home() {
  return (
    <div>
      <Navbar/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home