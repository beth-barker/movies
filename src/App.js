import "./App.css";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { useEffect, Component } from "react";

// function App() {
class App extends Component {
  renderNav = () => {
    return window.location.pathname === "/" ? null : <Nav />;
  };

  render() {
    return (
      <div className="App">
        <Nav />
        {/* {this.renderNav()} */}
        <Routes>
          {/* {window.location.pathname === "/" ? null : <Nav />} */}
          <Route path="/" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    );
  }
}

export default App;
