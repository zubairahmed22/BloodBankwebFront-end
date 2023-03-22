import React from 'react'
import "./Footer.css"
import logo from "./imags/logo.png"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        <div className="Footer">
          <div className="logo">
              <img src={logo} className="Footer_logo"/>
              
              </div>  
              <div className="socialLink">
                  <p> <FacebookIcon className="FB" /></p>
                  <p> <InstagramIcon className="FB" /></p>
                   <p><LinkedInIcon  className="FB"/></p>    
                 </div>
        </div>
    )
}

export default Footer
