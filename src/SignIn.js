import React,{useState}from 'react'
import "./SignIn.css"
import {signin,authenticate,isAuthenticated} from "./Helper/index.js"
import {Redirect}from "react-router-dom"


function SignIn() {
    const [value,setValue] = useState({
        email:"",
        password:"",
        error:"",
        loading: false,
        didRedirect: false
    })
const {email,password,error,loading,didRedirect} = value
const {user} = isAuthenticated();
const handleChange = name => event =>{
    setValue({...value,error: false,[name]: event.target.value});
}
    const onSubmit = (event) =>{
    event.preventDefault();
    setValue({...value, error: false, loading: true})
    signin({email,password})
    .then(data =>{
        if(data.error){
            setValue({...value, error: data.error, loading: false})

        }else{
            authenticate(data, () => {
                setValue({...value,
                    didRedirect: true
                })
               })
        }
        console.log(data)
    })
    .catch(console.log("SignIn request faild"))
    }

    const performRedirect = () =>{
        if(didRedirect){
            if(isAuthenticated()){
                return <Redirect to="/"/>
            }
        }
        
    }

    const errorMessage = () =>{
        return(
            <div className="error"
            style={{ display:error? "":"none"}}
            >
                {error}
            </div>
        )
    }
    return (
        <div className="SignIn">
           
            <div className="title_div">
           <h1>Sign In</h1>
                  <p> and Create An New Account</p>
             

           </div>
           <div className="input">
               <div className="logo_div">
               
               </div>
              
               <div className="inputSignIn">
               <label>Email:</label>
               <input type="email" className="Name" 
               value={email}
               onChange={handleChange('email')}
               placeholder="Enter Your Email"/>
               </div>
               <div className="inputSignIn">
               <label>Password:</label>
               <input type="password" className="Name"
               value={password}
               onChange={handleChange('password')}
                placeholder="Enter Password"/>
               </div>
               <div className="btnDiv">
                   {errorMessage()}
               <button onClick={onSubmit} 
                   
                className="signupBtn">SignIn</button>
               { performRedirect()}
               </div>
              
               
           </div> 
        </div>
    )
}

export default SignIn
