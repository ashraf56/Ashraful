import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {

  return (
    <div >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
