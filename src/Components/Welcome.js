import { useEffect, useState } from "react";




function Signin(){


const [data,setdata]=useState({});
console.log(data);

  function data_get_login(){

      const login_data_get = localStorage.getItem('user_login');
      
         const registerdata = JSON.parse(login_data_get);
      console.log(registerdata);
      registerdata.filter((elm,index)=>{
    //  return elm.email===email && elm.password===password
       setdata(elm);

})




}
    useEffect(()=>{
         data_get_login();
     
          },[]);




    return(
        <div>
        <h2>Welcome page</h2>
        
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.date}</p>
        <p>{data.password}</p>
        </div>
    )
}
export default Signin;