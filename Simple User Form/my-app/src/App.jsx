import { useState } from 'react'
import UserForm from './UserForm.jsx'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <div>
      <h1>Simple User Form</h1>
      <UserForm addUser={addUser} />
      <h2>Submitted Users</h2>
      {users.length === 0 ? (
        <p>No users submitted yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name}, age {user.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App

