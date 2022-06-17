import React, {useState} from "react";
import GestionCartes from "../Screens/GestionCartes/GestionCartes";
import GestionPoints from "../Screens/GestionDesPoints/GestionPoints";
import './MainPage.css'
import NavBar from "./NavBar/NavBar";
import Profile from "../Screens/GestionCartes/Profile";
const MainPage = () => {

const [pageId, setPageId] = useState(0);

const clickHandler = (id) => {
    setPageId(id);
    console.log(pageId);
    console.log(pageId===0);
}

    return(
        <div className="Main">
            <NavBar/>
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
                        (pageId===0) && <p>hhhhh</p>
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
                        (pageId===3) && <p>hhhhh</p>
                    }
                    {
                        (pageId===4) && <p>hhhhh</p>
                    }
                    {
                        (pageId===5) && <Profile/>
                    }
                </div>
            </div>
        </div>
    );
    
}

export default MainPage;