import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Role from '../components/Role';
import { useNavigate } from 'react-router';
import Normal from '../dashboard/Adherent/Normal';
import Admin from '../dashboard/Commercial/Commercial';
import Commercial from '../dashboard/Commercial/Commercial';
import Admine from '../dashboard/Admin/Admine';

export default function Main () {
    const[role,setRole]=useState('')
    Axios.defaults.withCredentials = true;
    const nav = useNavigate()
    useEffect(()=>{
        Axios.get('http://localhost:3001/login').then(res => {
			if(res.data.loggedIn === true){
			setRole(res.data.user[0].role);
      // nav("/")
			}
      // else nav("/register")
      // return ()=>setRole('')
		})
       },[])
  return (
    <div>
      <Role Role_={role === "visitor" ? Normal :role==="admin"?Admine: Commercial } />  
    </div>
  )
}
