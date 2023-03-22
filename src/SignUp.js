import React,{useState} from "react"
import  { Redirect,useHistory } from 'react-router-dom'
import "./SignUp.css"
import image from "./imags/logo.png"

import { signup } from "./Helper/index.js"

const SignUp = () =>{

    let history = useHistory()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [success,setSuccess] = useState(false)


 const   onSubmit = event =>{
     event.preventDefault()  
     setError(false)
     signup({name,email,password})
     
     .then( data =>{
         if(data.error){
             setError(data.error)
            setSuccess(false)
         }else{
             setName('')
             setEmail('')
             setPassword('')
             setError('')
             setSuccess(false)
             history.push('/SignIn')
             
         }
         
     })
     .catch(console.log("Error in SignUp"))
   }
    return(
        <div className="SignUp">
          
           <div className="title_div">
           <h1>Sign Up</h1>
                  <p> and Create An New Account</p>
             

           </div>
           <div className="input">
               <div className="logo_div">
               <img src={image} className="signup_logo"/>
               </div>
               <div className="inputSignIn">
               <label>Name:</label>
               <input type="text" className="Name" placeholder="Name"
               value={name}
               onChange={(e) =>setName(e.target.value)}
               />
               </div>
               <div className="inputSignIn">
               <label>Email:</label>
               <input type="email" className="Name" placeholder="Enter Your Email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
               </div>
               <div className="inputSignIn">
               <label>Password:</label>
               <input type="password" className="Name" placeholder="Enter Password"
               value={password}
               onChange={(e)=> setPassword(e.target.value)}
               />
               </div>
               <div className="btnDiv">
               <button className="signupBtn"
               onClick={onSubmit}
               >SignUp</button>
                
               </div>
               
               
           </div>
        </div>
        
    )
}

export default SignUp