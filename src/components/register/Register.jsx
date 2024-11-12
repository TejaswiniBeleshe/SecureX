import React, { useState } from 'react';
import './Register.css';
import { useNavigate,Link } from 'react-router-dom';


const Register = ()=>{
    const [Uname,setUname] = useState('');
    const [Upassword,setUpassword] = useState('');
    const [Uemail,setUemail] = useState('')
    const [userInfo,setUserInfo] = useState([]);
    const navigate = useNavigate()

    const handleRegister = async(e)=>{
        e.preventDefault();
        // let uName = e.target.elements['username'].value;
        // let uPassword = e.target.elements['password'].value;
        // let uEmail = e.target.elements['email-id'].value;
       
        try{
            let addNewUser = await fetch('http://localhost:8082/auth/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({username:Uname,email:Uemail,password:Upassword})
            })
            let respo = await addNewUser.json();
            if(respo && respo.username){
                console.log(respo);
                navigate('/login')
            }
        }
        catch(err){
            console.log(err.message,'err')
        }
    }
    return(
        <div className='regist'>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor='username'>Username</label><br/>
                <input type='text' id='username' value={Uname} onChange={(e)=>setUname(e.target.value)} placeholder='Username'/><br/><br/>
                <label htmlFor='email'>Email-Id</label><br/>
                <input type='email' id='email-id' value={Uemail} onChange={(e)=>setUemail(e.target.value)} placeholder='Email' /><br/><br/>
                <label htmlFor='password'>Password</label><br/>
                <input type='password' id='password'  value={Upassword} onChange={(e)=>setUpassword(e.target.value)} placeholder='Password'/><br/><br/>
                <button type='submit'>Register</button>
                <Link to='/login'><button type='submit'>sign-in</button></Link>
            </form>

        </div>
        
    )
}
export default Register;