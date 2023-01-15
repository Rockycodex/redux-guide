import { Link } from "react-router-dom";
import { UserHook } from "../hooks/UserHook";

const UsersList = ({ name }) => {
  const { users } = UserHook();

  return (
    <ul>
      {users.map((user) => (
        <li style={{ margin: "20px" }}>
          <Link
            to={`/users/${user.id}`}
          >{`${user.id}  ${user.first_name}  ${user.email}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
