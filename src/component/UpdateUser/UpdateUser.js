import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const Url = `http://localhost:5000/users/${id}`;
    fetch(Url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>Update User:{user.name}</h1>
      <p>User Id:{id}</p>
    </div>
  );
};

export default UpdateUser;
