// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/lg.png'
import sr from './assets/sr.png'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="nav-bar">
        <div className='first'>
          <img src={logo} alt='logo'/>
          <p className='lg'>Logo</p>
        </div>
        <div className='second'>
          <>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Pricing</li>
          </>
        </div>
        <div className='third'>
          <img src={sr} alt='logo'/>
          <p className='sr'>Search for anything</p>
        </div>

      </div>
    </>
  )
}

export default App
