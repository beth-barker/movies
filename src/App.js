import "./App.css";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
