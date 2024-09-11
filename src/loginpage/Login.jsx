import React from 'react'
import { useEffect, useState } from 'react';
import UserApis from '../api/Api';
import { Increment } from '../redux/slices/UserSlice';
import { useDispatch } from 'react-redux';
const Login = () => {

    const dispatch = useDispatch()
    const [user, setUser] = useState('')
    useEffect(()=>{
        const fetchUser = async()=>{
    try {
      const data = await UserApis.getUsers();
     setUser(data.data.users);
 
    } catch (error) {
      console.log('error')
    }
        }
        fetchUser()
      },[])
  return (
    <>
    <div className="login">
    
    <h1>Login</h1>
<input type="email" />
<input type="password" />
<button onClick={()=>dispatch(Increment(user))}>Submit</button>
    </div>

    </>
  )
}

export default Login