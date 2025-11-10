import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card7 from './components/Card7.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-white text-gray-800 p-4 rounded-xl'>Hello world!</h1>
      <Card7 username="chaiaurcode" />
      <Card7 username="shrey" />
    </>
  )
}

export default App
