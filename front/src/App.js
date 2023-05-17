
import { Link, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Home } from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import View from './pages/View';



function App() {
  return (
    <div>
       <nav className='navbar navbar-expend navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='navitem'>
            <Link to={"/"} className='nav-link' >Home</Link>
            <Link to={"/Create"} className='nav-link' >Create</Link>
          </li>
        </div>
       </nav>
       <div className='container'>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Create' element={<Create/>} />
          <Route path='/Edit/:id' element={<Edit />} />
          <Route path='/View/:id' element={ <View />} />
       </Routes>
       </div>
    </div>
  );
}

export default App;
