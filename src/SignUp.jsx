import './Forms.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp(){
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const [passerr, setPassErr] = useState(false)
    const [namerr, setNamerr] = useState(false)
    const [emailerr, setEmailerr] = useState(false)


    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target)
        const formDataobj = Object.fromEntries(formData);
        console.log(formDataobj)
        navigate('/')
    }

    return(
        <div className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} method="post" id="signup-form">
                <div className="grid-box">
                    <label htmlFor="username">Username</label>
                    <input onClick={()=>{setNamerr(true)}} onChange={(e)=>{setName(e.target.value)}} type="text" id="username" name="username" required />
                    {namerr?name.length<3?<p style={{color:'red'}}>Username must be at least 3 characters long!</p>:<p style={{color:'green'}}>Username accepted</p>:<p></p>}
                </div>
                <div className="grid-box">
                    <label htmlFor="email">Email</label>
                    <input onClick={()=>{setEmailerr(true)}} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" required />
                    {emailerr?email.includes("@")&&email.includes(".")?<p style={{color:'green'}}>Email accepted</p>:<p style={{color:'red'}}>Invalid email!</p>:<p></p>}
                </div>
                <div className="grid-box">
                    <label htmlFor="password">Password</label>
                    <input onClick={()=>{setPassErr(true)}} onChange={(e)=>{setPass1(e.target.value)}} type="password" id="password" name="password" required />
                </div>
                <div className="grid-box">
                    <label htmlFor="password-confirmation">Password Confirmation</label>
                    <input onChange={(e)=>{setPass2(e.target.value)}} type="password" id="password-confirmation" name="password" required />
                    {passerr?pass1!=pass2?<p style={{color:'red'}}>Passwords do not match!</p>:pass1.length>2?<p style={{color:'green'}}>Password accepted</p>:<p style={{color:'red'}}>Password is too short</p>:<p></p>}
                </div>
                

                <div style={{margin:'auto'}}>
                    <p style={{alignSelf:'center'}}>Already have an account? Sign in</p>
                </div>

                
                <button  type="submit">Sign Up</button>
            </form>
        </div>
    )
}