import React from "react";

const UserList = ({ users }) => (
  <div className="border p-2">
    <h5>Connected Users</h5>
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  </div>
);

export default UserList;
