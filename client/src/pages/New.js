import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function New() {

    
    const { token } = useParams()
    console.log(token)
    const history = useNavigate()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    // const PostData = (e)=>{
    //     e.preventDefault();
    //     fetch("http://localhost:8000/api/new-password",{
    //         method:"post",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             password,
    //             token
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //        if(data.error){
    //           console.log(data.error)
    //        }
    //        else{

    //            history.push('/login')
    //        }
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }

    async function PostData(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:3001/api/new-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                token,
                


            }),
        })
        const data = await response.json()
        if (data.error) {
            alert(data.error)

        } else {
            history('/login')
        }

    }

    return (
        <div >
            <form onSubmit={PostData}>
                <h1>Réinitialiser le mot de passe</h1>
                <input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e)=> setEmail(e.target.value)}
							value={email}
							required
							
						/>
                <input
                    type="password"
                    placeholder="Enter new password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    
                />
           
                <button type="submit"  >
                    Submit
                </button>
            </form>
        </div>
    )
}




export default New