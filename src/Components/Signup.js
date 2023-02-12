import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";




function Signup(){

  
    const [user,setuser]=useState({
      name:"", email:"", date:"",password:""
    });

const [store,setstore]=useState([]);
console.log(store);

const navigator = useNavigate();

         function registerUser(e){
        setuser({...user,[e.target.name]:e.target.value});
         }

         function clickUser(e){
            e.preventDefault();
            console.log(user);
          const {name,email,date,password}=user;
            if(!name || !email || !date || !password){
              alert("plz fill the form");
            }

    if(!email.includes("@")){
      alert("plase enter valied email address !");
    }else if(password.length < 5){
      alert("password greater then five");
    }else {
              alert(' Register successfully ');

              localStorage.setItem("user",JSON.stringify([...store,user]));
  navigator('/signin');       
          }

     



         }

  
         console.log(user);
    return(
        <div>
        <h2>signup page</h2>
        <input type={'text'} placeholder="Enter  Name" name="name" value={user.name} onChange={registerUser}/> <br/><br/>
       <input type={'email'} placeholder="Enter  Email" name="email" value={user.email} onChange={registerUser}/> <br/><br/>
        <input type={'date'}                            name="date"  value={user.date} onChange={registerUser}/> <br/><br/>
        <input type={'text'} placeholder="Enter  password" name="password" value={user.password} onChange={registerUser}/> <br/><br/>
        <input type={'button'} value="submt" onClick={clickUser}/>               <br/><br/>
        
        <NavLink to={'/signin'}>Already have an account ? Signin</NavLink>
    
        </div>
        )
}
export default Signup;