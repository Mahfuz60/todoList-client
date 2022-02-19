import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
  }, []);

  //DELETE in User
  const handleDeletedUser = (id) => {
    const proceed = window.confirm("Are you sure you want to delete this user?");
    if (proceed) {
      const Url = `http://localhost:5000/users/${id}`;
      fetch(Url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`Deleted User Successfully!`);
            const remainingUser = users.filter((user) => user._id !== id);
            setUsers(remainingUser);
          }
        });
    }
  };
  return (
    <div>
      <h1>Users Available:{users.length}</h1>

      <div>
        <ul>
          {users.map((user, id) => (
            <h4 key={id}>
              {user.name},{user.email},{user.address}
              <Link to={`/users/update/${user._id}`}>
               
                <button>update</button>
              </Link>
              <button onClick={() => handleDeletedUser(user._id)}>delete</button>
            </h4>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
