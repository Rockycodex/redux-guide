import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((res) => res.json())
      .then((res) => setUser(res.data));
  }, []);

  return (
    <ul>
      <li style={{ margin: "20px" }}>
        <span style={{ float: "left" }}>
          <img src={user.avatar} alt="my avatar"></img>
        </span>
      </li>
      <li>{user.id}</li>
      <li>{user.first_name || "User name"}</li>
      <li>{user.email}</li>
    </ul>
  );
};

export default UserDetail;
