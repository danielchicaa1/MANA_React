import { Route, Routes } from "react-router-dom"

import {Home} from "../Home/Home"
import {Members} from "../Members/Members"
import{Menu} from "../shared/Menu/Menu"
import { Tienda } from "../../Tienda/Tienda"
import { History } from "../History/History"
import { Fans } from "../Fans/Fans"
import { Music } from "../Music/Music"


export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Members />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/history" element={<History/>}/>
            <Route path="/fans" element={<Fans/>}/>
            <Route path="/musica" element={<Music/>}/>
        </Routes>
        
        </>
       
        
        
    )
}