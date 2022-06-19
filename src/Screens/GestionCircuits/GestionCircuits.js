import React, {useState,useEffect} from "react";
import Carte from "./Carte";
import './Carte.css';
const GestionCartes = () => {

    const [cartes, setCartes] = useState([]);
    

    const listItems = cartes.map((carte, index) => (<p key={carte.CarteId}>hh {carte.CarteId}</p>))
    
    return (
        <div className="GestionCartesScreen">
            <Carte/>
            
        </div>
        
    );
}

export default GestionCartes;