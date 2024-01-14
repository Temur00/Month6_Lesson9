import React, { useEffect } from "react";

const Users = () => {
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>Users</div>;
};

export default Users;

// 13:00 minutes
