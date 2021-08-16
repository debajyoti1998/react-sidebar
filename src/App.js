import React from 'react';
import Navbar from './component/Sidebar';
import Menubar from './component/Menubar';
import { Route } from 'react-router-dom';
import Profile from './AllComp/Profile';
import NavbarSideBar from './component';


const App=()=>{
    return(
        <>
        <NavbarSideBar/>
        <Route path='/profile' exact component={Profile}/>
        </>
        
    )
}
export default App;