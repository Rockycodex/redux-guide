import {useState, useEffect} from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1", {
        headers: new Headers({'content-type': 'application/json'})
    })
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, []);

  console.log('UsersList', users);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li style={{ margin: "20px" }}>
            <a
              href={`/users/${user.id}`}
            >{`${user.id}  ${user.first_name}  ${user.email}`}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
