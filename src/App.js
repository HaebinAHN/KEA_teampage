import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Knp from './pages/knp';
import Vision from './pages/vision';
import Team from './pages/team';
import Survey from './pages/Survey';
import NavigationBar from './Layout/NavigationBar';

import React, { useState } from 'react';
import SurveyItem from './pages/ui/SurveyItem';


function App() {
  

  return (
    <div> 
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/vision' element={<Vision/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/knp' element={<Knp/>}></Route>
          <Route path='/Survey' element={<Survey/>}></Route>
    
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
