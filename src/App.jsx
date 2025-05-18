import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        <p className='font-bold text-xl'>TailwindCSS Test</p>
      </div>
    </>
  )
}

export default App
