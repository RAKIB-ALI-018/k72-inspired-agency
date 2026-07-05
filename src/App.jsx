import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Agence from './Pages/Agence';
import Projects from './Pages/Projects';
import Navbar from './Components/Navigation/Navbar';
import FullScreenNav from './Components/Navigation/FullScreenNav';

import { useLocation } from 'react-router-dom';


const App = () => {

  const location = useLocation();
  return (
    <div className='text-white'>     
      <FullScreenNav/>
      <Routes  location={location} key={location.key}>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}
export default App;
