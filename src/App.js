import React, { useState } from 'react';
import Navbar from './Navbar';
import UserCardGrid from './UserCardGrid';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    setLoading(true);
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    setUsers(data.data);
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar handleGetUsers={handleGetUsers} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserCardGrid users={users} />
      )}
    </div>
  );
};

export default App;
