import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';

function App() {
  const location= useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/countries/:id' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
