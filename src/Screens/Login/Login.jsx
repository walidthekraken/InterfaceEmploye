import React from 'react';
import './login.css';

class login extends React.Component {
   render(){
  return (
    
    <div>
    <div className="BackgroundImage"> </div> 
      <div className="Rectangle">
        <h1 className ="Logo">LOGO
        <br></br><p className ="Login">Log in to your account</p>
        <br></br><div className="Login Son">

        <form onClick="refreshPage()">
        <div class = "form">
        <br></br><br></br><input type="text" name="text" autocomplete="off" required />
       <label for="text" class="label-name">
          <span class="content-name">
            Username
          </span>
          </label>
          </div>
          <div class = "form">
         <input type="password" name="passwd" autocomplete="off" required />
         <label for="text" class="label-name">
          <span class="content-name">
            Password
          </span>
          </label>
          </div>
           <div >
              <input className="btn" type="submit" value="LogIn"/>
           </div>
      </form>
    </div>
        
        </h1>
       
      </div>
    </div>
  );
   };
}

export default login;