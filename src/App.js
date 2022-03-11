import React from 'react';
import Home from './component/Home.js';
import Navbar from './component/Navbar.js';
import Contact from './component/Contact.js';
import Student from './component/Student.js';
import {Routes,Route,Navigate} from 'react-router-dom';

const App=()=>{
    return(
        <>
        
            <Navbar/>
            <Routes>
                <Route path='/' element={<Navigate to='/home'/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/student' element={<Student/>}></Route>
            </Routes>
        </>
    );
}
export default App;