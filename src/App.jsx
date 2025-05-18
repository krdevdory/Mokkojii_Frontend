import { useState } from 'react'
import './App.css'
import NavBar from "./components/side_nav";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <NavBar />
      <div className='flex w-full h-screen justify-center items-center'>
        <p className='font-bold text-xl'>TailwindCSS Test</p>
      </div>
    </div>
  )
}

export default App
