import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GestionCartes from "../Screens/GestionCartes/GestionCartes";
import Gestionevent from "../Screens/Gestionevent/Event";
import Home from "../Screens/Home/Home";

import "./MainPage.css";
import NavBar from "./NavBar/NavBar";

const MainPage = () => {
  const history = useHistory();
  const [pageId, setPageId] = useState(0);

  const clickHandler = (id) => {
    setPageId(id);
    console.log(pageId);
    console.log(pageId === 0);
  };

  const handleLogout = () => {
    // Perform any logout logic here
    // Redirect to login page
    history.push("/");
  };

  return (
    <div className="Main">
      <NavBar />
      <div id="outer-container">
        <div id="sidebar">
          <div className="List">
            <button className={pageId === 0 ? "selected-button" : "off-button"} onClick={() => clickHandler(0)}>
              Profil
            </button>
            <button className={pageId === 1 ? "selected-button" : "off-button"} onClick={() => clickHandler(1)}>
              Gestion des cartes
            </button>
            <button className={pageId === 2 ? "selected-button" : "off-button"} onClick={() => clickHandler(2)}>
              Gestion des avis
            </button>
            <button className={pageId === 3 ? "selected-button" : "off-button"} onClick={() => clickHandler(3)}>
              Gestion des événements
            </button>
            <button className={pageId === 4 ? "selected-button" : "off-button"} onClick={() => clickHandler(4)}>
              Gestion des circuits
            </button>
            <div className="but">
              <button className={pageId === 7 ? "selected-button" : "off-button"} onClick={handleLogout}>
                Se deconnecter
              </button>
            </div>
          </div>
        </div>
        <div id="content">
          {pageId === 0 && <p><Home/></p>}
          {pageId === 1 && <GestionCartes />}
          {pageId === 2 && <p>I will complete this later...</p>}
          {pageId === 4 && <p>I will complete this after...</p>}
          {pageId === 3 && <p><Gestionevent/></p>}
          
         
        </div>
      </div>
    </div>
  );
};

export default MainPage;
