
import './App.css';
import Login from './components/Login';
import Movies from './components/Movies';
import Users from './components/Users';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
