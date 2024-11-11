import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Pages/Counter'
import Jobs from './Pages/Jobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <br /><hr /><hr />
      <Jobs/>
    </>
  )
}

export default App
