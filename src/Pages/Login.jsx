import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Login = (props) => {

    const navigate = useNavigate()
    const[eUsername,setEusername] = useState()
    const[ePassword,setEpassword] = useState()
    const [rUser,setRuser] = useState(true)

    
    const user =props.user
    const setUser = props.setUser

    const handleuserInput = (e) => {
        setEusername(e.target.value)
    }
    const handlepassInput = (e) => {
        setEpassword(e.target.value)
    }
    const checkUser = () => {
        var userfound = false

        user.forEach((item)=>{
            if(item.username === eUsername && item.password === ePassword)
                {
                    console.log("Login Sucessfull")
                    userfound = true
                    navigate("/Landing",{state:{user:eUsername}})
                } 
        })
        if(userfound === false) {
            console.log("Login failed")
            setRuser(false)
       }

    }
  return (
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {rUser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-600">Please sign up before you login</p>}
            
            
            <div className="flex flex-col gap-2 my-2">
                <input type="text" onChange={handleuserInput} className="w-52 border-black p-1  bg-transparent border rounded-md " placeholder="UserName" />
                <input type="text"  onChange={handlepassInput} className="w-52 border-black p-1  bg-transparent border rounded-md " placeholder="Password" />
                <button className="bg-[#ff8f00] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                <p>Already have an account? <Link to={"/Signup"} className="underline">Signup</Link> </p>
            </div>
        </div>
    </div>
  )
}
