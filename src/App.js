import "./App.css";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import { useEffect } from "react";

function App() {
  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div className="App">
      {/* {window.location.pathname === "/" ? null : <Nav />} */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
