import { useLocation } from "react-router-dom"
import { Card } from "../Components/Card";
import {Header} from "../Components/Header";
import { TodoContainer } from "../Components/TodoContainer";

export const Landing = () => {
    const data = useLocation()

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EfEFEf] p-10 border rounded-md">
      
        <Header />

        <div className="flex justify-between flex-wrap gap-7 my-5 ">
          <Card bgcolor={'#82724D'} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={'#FD6663'} title={"December"} subtitle={"14:03:34"} />
          <Card bgcolor={'#FCA201'} title={"Build Using"} subtitle={"React"} />
        </div>
        <div>
            
            <TodoContainer />
        </div>
        

        
      </div>
    </div>
  )
}
