import React from "react";
import './NavBar.css';
const NavBar = ({fct}) => {
    return (
        <div className="NavBar">

            <p>
                Logo
            </p>


            <div className="SearchBar">
                <img src={require('../../res/NavBar/search_icon.png')}></img>
                <input placeholder="rechercher ou taper une commande">
                </input>
            </div>

            <div>
                {/* <img src={require('../../res/NavBar/notification.png')}/> */}
                <img src={require('../../res/NavBar/notification.png')}/>
                <img onClick={fct} src={require('../../res/NavBar/profile.png')}/>
            </div>
            

        </div>
    );
}

export default NavBar;