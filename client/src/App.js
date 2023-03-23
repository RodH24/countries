import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Landing from './views/Landing/Landing';

function App() {
  const location= useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
      <h1>Henry Countries</h1>
    </div>
  );
}

export default App;
