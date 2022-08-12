import React, { Fragment } from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About/index';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome/index';
import { useTitle } from './Helpers/useTitle';


function App() {  
  useTitle("My Website")

  return (

    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contactus" element={<Contact/>}/>
        </Routes>
      </Fragment>
    </Router>
 
  )

};
export default App;
