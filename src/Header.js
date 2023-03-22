import React,{useState,} from 'react'
import Logo from "./imags/logo.png"
import {NavLink} from "react-router-dom"
import {isAuthenticated,signout}from "./Helper/index"
import "./Header.css"
import { useHistory } from "react-router-dom";

function Header() {
   let history = useHistory();
    return (
        <div className="Header">
            <div className="Logobox">
        <img src={Logo} className="logo"/>
        </div>  
        <div className="Menu">
            <ul>
  
              <NavLink to="/" exact className="linkstyle" activeClassName="navlinkstyle">  <li>Home</li></NavLink>
              <NavLink to="/Donation" exact className="linkstyle" activeClassName="navlinkstyle">   <li>Donation </li></NavLink>
                {!isAuthenticated() && (
                     <>
                     <NavLink to="/SignIn" exact className="linkstyle" activeClassName="navlinkstyle">   <li>SignIn</li></NavLink>
                       <NavLink to="/SignUp" exact className="linkstyle" activeClassName="navlinkstyle"> <button className="btn" > SignUp</button></NavLink>
                       </>
                )}
                {isAuthenticated() &&(
               <NavLink to="/SignIn" exact className="linkstyle"
                activeClassName="navlinkstyle"
                onClick={() =>{
                    signout(() =>{
                        history.push("/")
                    })
                }}
                >   <li>Signout</li></NavLink>
                )}
               
                

            </ul>
        </div>
        </div>
    )
}

export default Header
