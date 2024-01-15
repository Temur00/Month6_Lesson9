import React, { useEffect, useState } from "react";
import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPosts = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="all">
      <div className="container location">
        <div className="users">
          {users.map((user) => (
            <div key={user.id} className="user">
              <p>{user.id}</p>
              <p>{user.type}</p>
              <p>{user.info}</p>
              <div>
                <p>{user.owner}</p>
                <p>{user.date}</p>
              </div>
              <div className="buttons">
                <button onClick={() => getUserPosts(user.id)}>Read more</button>
                {/* <button onClick={() => getUserTodos(user.id)}>Todos</button>
                <button onClick={() => getUserAlbum(user.id)}>Album</button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <p>{post.userId}</p>
              <p>{post.type}</p>
              <p>{post.info}</p>
              <p>{post.owner}</p>
              <p>{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
