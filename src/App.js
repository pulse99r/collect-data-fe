
import { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import NewUser from './components/NewUser';
import { Users } from './components/Users';

function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async()=> {
    try {
      const response = await fetch("https://collect-data-be.onrender.com/users")
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  }
   useEffect(() => {
    fetchUsers()
   }, []);
  console.log(users)

  return (
    <div className="App">
      <header className="App-header">
       <Nav />
      </header>
      <main>
        <NewUser/>
        <Users users = {users}/>
      </main>
    </div>
  );
}

export default App;
