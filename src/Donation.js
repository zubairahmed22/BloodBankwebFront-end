import React,{useState} from 'react'
import Header from "./Header"
import "./donation.css"
import donationImage from  "./imags/donation-blood.png"

import { donation } from './Helper/donation';
import  FileBase64 from "react-file-base64"
import { Redirect } from 'react-router';

function Donation() {

    const [bloodGroup, setBloodGroup] = useState(null);
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [photo,setPhoto] = useState('')
    const [error,setError] = useState(false)
    const [didRedirect,setDidRedrict] = useState(false)
 
   console.log(photo)

    const ErrorMessage = () =>{
        return(
            <div className="error"
            style={{display: error ? "" : "none"}}
            >
            <h4>{error} there is error</h4>
            </div>
        )
    } 
   

const donationData = (evt) =>{
    evt.preventDefault();
   donation({name,bloodGroup, address,phoneNumber,photo})
   .then(data =>{
       if(data.error){
           setError(data.error)
       }else{
        setBloodGroup('')
           setName('')
           setAddress('')
           setPhoneNumber('')
           setPhoto('')
           setDidRedrict(true)
           

       }
       
   })
   
   .catch(error =>console.log(error))
}

const redirectToHome = () =>{
    if(didRedirect){
        return <Redirect to="/"/>
     }
}
    const allBloodGroups = {
        gropA: "A+",
        groupB: "B+",
        groupAB: "AB+",
        groupO:"O+",
        groupNegativeA:"A-",
        groupbNegative:"B-",
        ONegative:"O-",
        AbNegative:"AB-",
        
    
    }

    const formCreate = ()=>{
        return(
             <>
            <div className="inputBox">
            <div className="Fix">
            <div className="nameBox">
            {ErrorMessage()}   
            <label>Name</label>
            <input type="text" placeholder="Name" className="nameText"
            value={name}
            onChange={(e) => setName(e.target.value) }
            />
            </div>
            <div className="nameBox">
            <label>Address</label>
            <input type="text" placeholder="Address" className="nameText"
            value={address}
            onChange={(e) => setAddress(e.target.value) }
            />
            </div>
            </div>
            <div className="Fix">
            <div className="nameBox">
            <label>PhoneNumber</label>
            <input type="text" placeholder="Enter Phone Number" className="nameText"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value) }
            />
            
            </div>
            
            <div className="nameBox">
            <label>Upload your Picture</label>
            
       
            
            <FileBase64
            id="file"
            type="file"
            multiple={false}
            onDone={({base64}) => setPhoto(base64)}

            />
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-impact/142/add_photo_-256.png" className="ImageIcon"/>
            
            </div>
               
           
            </div>
          
          
        
        
            {Object.values(allBloodGroups).map((blood,item) =>(
                     <div className="containerbox">
                      <button className="GBTN"
                    
                       style={ { backgroundColor: blood === bloodGroup ? '#EC2227' : '#DD9898' }}
                       key={item}
                       onClick={() => setBloodGroup(blood)}
                      >{blood} </button>
                      </div>
                     
                 ))}
           
        </div>
      
         <div className="subbtn">
        <button onClick={donationData} className="donate_button">DONATE</button>
        
        {redirectToHome()}
         </div>
        </>
        )
    }
  
    return (
       
        <div className="donation">
            <div className="HeroSection">

        <Header/> 
      
        <div className="imageBox">
        <img src={donationImage} className="bloodImage" />  
        </div>
        </div>
        
        {formCreate()}
        </div>
        
    )
}

export default Donation
