import './App.css'
import { useEffect, useState } from 'react'
import User from './components/User'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
      <User users={users} setUsers={setUsers} />
    </>
  )
}

export default App
