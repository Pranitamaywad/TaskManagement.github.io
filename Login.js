import {useNavigate} from "react-router-dom";
import { useState} from "react";
import './login.css';
import validation from "./validation";

const Login = ()=>{
    const navigate = useNavigate();

    const[values, setValues] = useState(
        {
        name:'',
        password:""
    })
     
    const [errors, setError] = useState({})
    
    const handlechange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const submithandler=(e)=>{
        e.preventDefault();
        const error = validation(values);
       setError(error);
       !(error.name || error.password) && navigate("/Home");
    }
    return(
        <div className="cover">
           <h1>Login</h1>
           <input type="text" placeholder="username" value={values.name} name="name"onChange={handlechange}/>
           {errors.name && <p style={{color:"red", fontSize:"13px"}}> {errors.name} </p>}
           <input type="password" placeholder="password" value={values.password} name="password" onChange={handlechange}/>
           {errors.password && <p style={{color:"red", fontSize:"13px"}}> {errors.password} </p>}

           <button className="login-btn" type="submit" onClick={submithandler}>Login</button>
           <p className="text">Or login using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
        </div>
    )
}
export default Login; 