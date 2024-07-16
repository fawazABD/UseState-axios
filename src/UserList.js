import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Userlist.css'; // Importing CSS file for styling

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
