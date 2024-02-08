import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxCreator from './assets/components/BoxCreator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxCreator></BoxCreator>
    </>
  )
}

export default App
