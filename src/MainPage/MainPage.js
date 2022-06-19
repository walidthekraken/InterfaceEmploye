import React, {useState} from "react";
import GestionCartes from "../Screens/GestionCartes/GestionCartes";
import GestionCircuits from "../Screens/GestionCircuits/GestionCircuits";
import GestionPoints from "../Screens/GestionDesPoints/GestionPoints";
import Gestionevent from "../Screens/Gestionevent/Event";
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import './MainPage.css'
import NavBar from "./NavBar/NavBar";

const MainPage = () => {

const [pageId, setPageId] = useState(0);

const clickHandler = (id) => {
    setPageId(id);
    console.log(pageId);
    console.log(pageId===0);
}

    return(
        <div className="Main">
            <NavBar fct ={()=>clickHandler(19)}/>
            <div id="outer-container">
                <div id="sidebar">
                    <div className="List">
                        <button className={(pageId===0)?"selected-button":"off-button"} onClick={()=>{clickHandler(0)}}>Home</button>
                        <button className={(pageId===1)?"selected-button":"off-button"} onClick={()=>{clickHandler(1)}}>Gestion des cartes</button>
                        <button className={(pageId===6)?"selected-button":"off-button"} onClick={()=>{clickHandler(6)}}>Gestion des points d'interet</button>
                        <button className={(pageId===2)?"selected-button":"off-button"} onClick={()=>{clickHandler(2)}}>Gestion des avis</button>
                        <button className={(pageId===3)?"selected-button":"off-button"} onClick={()=>{clickHandler(3)}}>Gestion des événements</button>
                        <button className={(pageId===4)?"selected-button":"off-button"} onClick={()=>{clickHandler(4)}}>Gestion des circuits</button>
                        <button className={(pageId===5)?"selected-button":"off-button"} onClick={()=>{clickHandler(5)}}>Tableau de bord</button>
                    </div>
                </div>
                <div id="content">
                    {
                        (pageId===0) &&<Home></Home>
                    }
                    {
                        (pageId===1) && <GestionCartes/>
                    }
                    {
                        (pageId===6) && <GestionPoints/>
                    }
                    {
                        (pageId===2) && <p>hhhhh</p>
                    }
                    {
                        (pageId===3) && <Gestionevent/>
                    }
                    {
                        (pageId===4) && <GestionCircuits/>
                    }
                    {
                        (pageId===5) && <p>hhhhh</p>
                    }
                    {
                        (pageId===19) && <Profile/>
                    }
                </div>
            </div>
        </div>
    );
    
}

export default MainPage;