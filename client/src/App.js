import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import  Form from './views/Form/Form';

function App() {
  const location= useLocation();

  return (
    <div className="App">
      {location.pathname === "/home" && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/countries/:id' element={<Detail />}></Route>
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
