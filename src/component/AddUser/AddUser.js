import React, { useRef, useState } from "react";

const AddUser = () => {
  // const [users, setUsers] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;

    const newUser = { name, email, address };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(`successfully added user!`);
          e.target.reset();
        } else {
          alert(`user not be exists!`);
        }
      });

    // nameRef.current.value = "";
    // emailRef.current.value = "";
    // addressRef.current.value = "";
  };
  return (
    <div>
      <h2>Please add an User</h2>
      <div>
        <form onSubmit={handleAddSubmit}>
          <label>Name:</label>
          <input type="name" placeholder="your name" ref={nameRef}></input>
          <br />
          <br />
          <label>Email:</label>
          <input type="email" placeholder="your email" ref={emailRef} />
          <br />
          <br />
          <label>Address:</label>
          <input type="address" placeholder="your address" ref={addressRef} />
          <br />
          <br />
          <input type="submit" value="AddUser" />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
