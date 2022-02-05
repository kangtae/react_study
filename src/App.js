import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Profile></Profile>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
