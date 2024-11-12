import React,{useState} from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {useSnackbar } from 'notistack'
const Login = ()=>{
    const {enqueueSnackbar} = useSnackbar()
    const [lEmail,setlEmail] = useState('');
    const [lPaswrd,setlPaswrd] = useState('');
    const navigate = useNavigate()

    const handleLogin = async(e)=>{
        e.preventDefault();
        try{
            let loginRespo = await fetch('http://localhost:8082/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email:lEmail,password:lPaswrd})
            })
            let respo = await loginRespo.json();
            if(respo && respo.token){
                localStorage.setItem('user_token',respo.token);
                localStorage.setItem('user',respo.username);
                enqueueSnackbar('todos home page',{
                    variant:'success',
                    autoHideDuration:3000,
                    anchorOrigin:{
                        vertical:'top',
                        horizontal:'center'
                    }
                }
            )
                navigate('/todos');
            }else enqueueSnackbar(respo.message,
                {
                    variant:'warning',
                    autoHideDuration:3000,
                    anchorOrigin:{
                        vertical:'top',
                        horizontal:'center'
                    }
                })

        }
        catch(err){
            enqueueSnackbar(err.message,{
                variant:'error',
                autoHideDuration:3000,
                anchorOrigin:{
                    vertical:'top',
                    horizontal:'center'
                }
            })
            console.log(err.message,'error')
        }
    }

    return(
        <div className='login'> 
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor='lemail'>Email-ID</label><br/>
                <input type='text' id='lemail' value={lEmail} onChange={(e)=>setlEmail(e.target.value)}/><br/><br/>
                <label htmlFor='lpaswrd'>Password</label><br/>
                <input type='password' id='lpaswrd' value={lPaswrd} onChange={(e)=>setlPaswrd(e.target.value)}/><br/><br/> 
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login