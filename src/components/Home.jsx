import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to home page</h1>
      <Link to={'/users'}>User list</Link>
    </div>
  );
};

export default Home;