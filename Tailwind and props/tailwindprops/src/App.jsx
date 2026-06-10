import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"John",
    age:21
  }
  let newArr=[1,2,3,4]

  return (
   <>
   <h1 className='bg-blue-100 flex h-screen text-black p-4 rounded-4xl items-center justify-center'>Tailwind Test</h1>
   <Card username="chai" someObject={newArr}/>
   <Card />
   </>
  )
}

export default App
