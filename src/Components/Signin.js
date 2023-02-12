import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";



function Signin(){


const [data,setdata]=useState({
    email:"",password:""
})

// const [storevalue,setstorevalue]=useState([]);
const  navigator = useNavigate();

function alldata(e){
    setdata({...data,[e.target.name]:e.target.value})
}

function Userdata(e){
e.preventDefault();

const getitem = localStorage.getItem("user");
console.log(getitem);


console.log(data);

const {email,password}=data;
if( !email || !password){
  alert("plz fill the form");
}

if(!email.includes("@")){
alert("plase enter valied email address !");
}else if(password.length < 5){
alert("password greater then five");
}else{

    if(getitem && getitem.length){
        const registerdata = JSON.parse(getitem);
        console.log(registerdata);
   const filterdata = registerdata.filter((elm,index)=>{
       return elm.email===email && elm.password===password
   })
   console.log(filterdata);

if(filterdata.length===0){
    alert("invalied details");
}else{
    alert("Login successfully");

    localStorage.setItem("user_login",JSON.stringify(filterdata));


    navigator('/welcome');
}

    }
}


}
    
    return(
        <div>
        <h2>Signin page</h2>

        <input type={'email'} placeholder="Enter  Email" name="email" value={data.email} onChange={alldata} /> <br/><br/>
        <input type={'text'} placeholder="Enter  password"  name="password" value={data.password}  onChange={alldata}/> <br/><br/>
        <input type={'button'} value="submt" onClick={Userdata} />               <br/><br/>
        
        <NavLink to={'/signup'}>Already have an account ? Signin</NavLink>
        </div>
    )
}
export default Signin;