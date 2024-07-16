import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Login} from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Landing } from './Pages/Landing';
import { useState } from "react"

function App() {
  const[user,setUser] = useState([
    {
        username:"candy",
        password:"123"
    }
])
  return (
    <div className="bg-black p-16">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/Signup' element={<Signup user={user} setUser={setUser}/>}/>
        <Route path='/Landing' element={<Landing />}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
