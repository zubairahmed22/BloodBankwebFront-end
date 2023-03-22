import React,{useState,useEffect}from "react"
import './App.css';
import Donation from './Donation';
import Donnar from './Donnar';
import Footer from './Footer';

import SignUp from "./SignUp"
import Header from "./Header"
import SignIn from "./SignIn"
import {getDonation}from "./Helper/donation"
import PrivateRoute from "./PrivateRoute"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import ManContainer from './ManContainer';
function App() {
  const [products,setProducts] = useState([]) 
  const [error, setError] = useState(false)
  
  const loadAllProduct = () =>{
       getDonation()
       .then((data) =>{
         
              setProducts(data)
           
       })
  }

  useEffect(() =>{
      loadAllProduct()  
     
    
  },[loadAllProduct])







  return (
     <Router>
    <div className="App">
      <Switch>
     <PrivateRoute path="/Donation" component={Donation}/>
     <Route path="/SignUp">
     <Header/>
      <SignUp/>
      <Footer/>
     </Route>
     <Route path="/SignIn">
     <Header/>
      <SignIn/>
      <Footer/>
     </Route>

     <Route path="/Donation">
     <Donation/>

      <Footer/>
     </Route>
     <Route path="/">
       <header className="App-header">

<ManContainer/>

</header>

  <div className="DonnerCollection">
  {products?.map((item,index) =>(
<Donnar item={item} key={index}/>

))}

</div>

<div>
 
</div>

<Footer/>
       </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
