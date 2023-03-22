import React from 'react'
import "./Main.css"
import Header from "./Header"
import illustrationImage from ".//imags/illustratorImage.png"
import {getDonation}from "./Helper/donation"
import {Link} from "react-router-dom"

function ManContainer() {
  
    return (
        <div className="container">
            <Header/>
            <div className="mainContainer">
            <div className="textContainer">
                <h1 className="Heading"> 
                Your One Drop of Blood<br/>
                Can save a Life </h1>

                <p className="Para"> 
                donate for the humanity and <br/>
                donate for the nation</p>
               <button><Link to="/Donation" className="donateNow">Donate Now </Link>  </button>
            </div>
            
           <div className="illustrator_iamge">
               <img src={illustrationImage} className="imagIllustrator"/>
           </div>
           </div>
        </div>
    )
}

export default ManContainer
