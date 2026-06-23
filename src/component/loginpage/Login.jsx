import {Link} from "react-router-dom";
import {useState} from "react";
 function Login() {
    let[LoginData,setLoginData]= useState({});
    let[error,setError]= useState({});
    let handleChange=(e)=>{ //e is used to handle data
        let{name,value} =e.target;
        setLoginData({...LoginData,[name]:value});
        //console.log(LoginData);
    }
    let formError={}
    let handleValidate=(LoginData)=>{
        if (!LoginData.email){
            formError.email="Email is required";
        }
        if (!LoginData.password){
            formError.password="Password is required";
        }
        if(!LoginData.confirm_password){
            formError.confirm_password="Password confirmation is required";
        }
        else{
            console.log("API DATA",LoginData);
        }
        setError(formError);
    };
    let handleClick=()=>{
        handleValidate(LoginData);
    }
    return (
        <>
            <div class="grid grid-cols-3 gap-4">
                <div class="..."></div>
                <div class="m-auto">
                    <div class="card w-100 h-150 border-2 border-lime-600 rounded-xl shadow-2xl">
                        <h1 class="card-header text-center font-bold text-2xl">Login</h1>
                        <div class="card-body w-80 h-100 m-auto mt-8">
                            <div className="mt-5"><label className="font-bold text-md">Email</label>
                            <input class="border-black border w-full h-8 rounded-md mt-2"type="email" onChange={handleChange} name="email"></input>
                            {error?.email}</div>
                            <div className="mt-5"><label className="font-bold text-md">Password</label>
                            <div/><input class="border-black border w-full h-8 rounded-md mt-2 "type="password" onChange={handleChange} name="password"></input>
                            {error?.password}</div>
                            <div className="mt-5"><label className="font-bold text-md">Confirm Password</label>
                            <div/><input class="border-black border w-full h-8 rounded-md mt-2" type="password" onChange={handleChange} name="confirm_password"></input>
                            {error?.confirm_password}</div>
                            <div className="mt-5"><button className=" w-full bg-blue-500 text-white h-8 rounded-md" onClick={handleClick}>Login</button></div>
                            <Link to="/signup" > Dont have an account?</Link>
                            </div>
                    </div>
                    <div class=""></div>
                </div>
                </div>
            </>
            );
}

            export default Login;