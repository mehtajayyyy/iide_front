// components/UsersList.js

import React, { useState, useEffect } from 'react';

export default function UsersList({data}) {
  console.log(data);
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.map(user => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
}
