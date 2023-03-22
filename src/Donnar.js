import React from 'react'
import "./Donner.css"
import profile from "./imags/logo.png"
import bloodIcon from "./imags/icon.png"
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhoneIcon from '@material-ui/icons/Phone';

function Donnar({item}) {
   

    return (
       
        <div className="donner">
           
       
               
               
           
                <div className="imgbox">
               
                <img src={item.photo} className="photo"/>
                <h4>{item.name} </h4> 
                </div>
                <div className="text">
                
                <p><LocationCityIcon  className="HomeAddress"/></p>
                <p>< PhoneIcon className="phone" /></p>
                <p><img src={bloodIcon} className="icon"/></p>
                </div>
                <div className="info_box">
                    <p>{item.address}</p>
                    <p>{item.phoneNumber}</p>
                    <p className="blood">{item.bloodGroup}</p>
                    
                </div>
               
          
        </div>
    
    )
}

export default Donnar
