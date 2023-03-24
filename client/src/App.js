import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';

function App() {
  const location= useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
