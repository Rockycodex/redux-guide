import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import UsersList from "./components/UsersList";
import Home  from "./components/Home";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
