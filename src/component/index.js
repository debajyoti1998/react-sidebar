import React,{useState} from 'react'
import Menubar from './Menubar'
import Sidebar from './Sidebar'

function NavbarSideBar() {
    const [drawer,setDrawer]=useState(false)
    const Openhendel=()=>{
        setDrawer(!drawer)
    }
    return (
        <div>
            <Menubar Opendrawer={Openhendel}
            draw={drawer}/>
            <Sidebar openside={drawer}
            closeside={Openhendel}
            />
        </div>
    )
}

export default NavbarSideBar
