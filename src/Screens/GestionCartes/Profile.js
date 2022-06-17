import React from 'react'
import './Profile.css'
import { useState } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";


 const Profile = () =>{
    const [name, setName] = useState('Bentaleb Fanel');
    const [Phone, setPhone] = useState("+215558741269");
    const [Email, setEmail] = useState("jf_bentaleb@esi.dz");
    const [Adresse, setAdresse] = useState("3Rue AEK Souidani,Belcourt");
    const [Birthday, setBirthday] = useState("09/10/2001");
    const [Sexe, setSexe] = useState("Female");
    const [pic, setPic] = useState("");
    const [picMessage, setPicMessage] = useState("");

    // const postDetails = (pics) => {
    //     if (
    //       pics ===
    //       "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    //     ) {
    //       return setPicMessage("Please Select an Image");
    //     }
    //     setPicMessage(null);
    //     if (pics.type === "image/jpeg" || pics.type === "image/png") {
    //       const data = new FormData();
    //       data.append("file", pics);
    //       data.append("upload_preset", "notezipper");
    //       data.append("cloud_name", "piyushproj");
    //       fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
    //         method: "post",
    //         body: data,
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           setPic(data.url.toString());
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     } else {
    //       return setPicMessage("Please Select an Image");
    //     }
    //   };
    

     return(
         <div className='Screen'>
            <div className="ProfileScreen">
            <div className="Container">
            <div className="ProfilePic">
                  <img src={require('../../res/NavBar/pic.png')} />
                </div> 
                    <button className='InputButton'>Changer la photo</button>
                    
            </div>
            <div className="Info">

                <div className="Name">
                        
                        <p>{name} </p>
                </div>
                    <p>Developpeur</p>
                    <div className="row">
                            <button className='InputButtonWhite'>Contact <br/></button>
                            <button className='InputButtonWhite'>envoyer un message <br/></button>
                    </div>
                    <div className="Informations">
                        <p>Contact information</p>
                    </div>
        
                        <p>Phone : <div className="Output">{Phone}</div> </p>
                        <p>Email :<div className="Output"> {Email}</div> </p>
                        <p>Adresse :<div className="Output"> {Adresse}</div> </p>
                    
                    <div className="Informations">
                        <p>Basic information</p>
                    </div>
                        <p>Birthday : {Birthday} </p>
                        <p>Sexe : {Sexe} </p>
                </div>
                
                    
               
            
                
                   
            </div>
        </div>   
     );
 }


 
export default Profile;
