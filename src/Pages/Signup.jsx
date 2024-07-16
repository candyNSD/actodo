import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export const Signup = (props) => {
   
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
    

    const addUser = () => {
        setUser([...user,{username:eUsername,password:ePassword}])
        navigate("/")
    }

  return (
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Signup Here :)</p>
            
            <div className="flex flex-col gap-2 my-2">
                <input type="text" onChange={handleuserInput} className="w-52 border-black p-1  bg-transparent border rounded-md " placeholder="UserName" />
                <input type="text" onChange={handlepassInput} className="w-52 border-black p-1  bg-transparent border rounded-md " placeholder="Password" />
                <input type="text" className="w-52 border-black p-1  bg-transparent border rounded-md " placeholder="confirm Password" />
                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={addUser}>Sign up</button>
                <p>Don't have an account? <Link to={"/"} className="underline">Login</Link> </p>
            </div>
        </div>
    </div>
  )
}
