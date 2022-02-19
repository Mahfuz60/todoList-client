import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [user, setUser] = useState({});

  //Find User Update
  const { id } = useParams();
  useEffect(() => {
    const Url = `http://localhost:5000/users/${id}`;
    fetch(Url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  //handle Event Change Users
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = { name: updatedName, email: user.email, address: user.address };
    setUser(updatedUser);
  };
  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    // const updatedUser={...user};
    // updatedUser.email=updatedEmail;
    const updatedUser = { name: user.name, email: updatedEmail, address: user.address };
    setUser(updatedUser);
  };
  const handleAddressChange = (e) => {
    const updatedAddress = e.target.value;
    const updatedUser = { name: user.name, email: user.email, address: updatedAddress };
    setUser(updatedUser);
  };

  //UPDATE USER
  const handleUpdateUser = (e) => {
    const Url = `http://localhost:5000/users/${id}`;
    fetch(Url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully Done");
          setUser({});
        }
        console.log(data);
      });

    e.preventDefault();
  };

  return (
    <div>
      <h3>
        Update User:<small>{user.email}</small>
      </h3>
      {/* <p>User Id:{id}</p> */}
      <div>
        <form onSubmit={handleUpdateUser}>
          <label>Name:</label>
          <input type="text" value={user.name || ""} onChange={handleNameChange}></input>
          <br />
          <br />
          <label>Email:</label>
          <input type="email" value={user.email || ""} onChange={handleEmailChange}></input>
          <br />
          <br />
          <label>Address:</label>
          <input type="text" value={user.address || ""} onChange={handleAddressChange}></input>
          <br />
          <br />
          <input type="submit" value="Update User" />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
