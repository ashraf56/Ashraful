import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
<Outlet></Outlet>
    </div>
  )
}

export default App
