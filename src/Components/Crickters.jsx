import { useEffect, useState } from "react"
import Crickter from "./Crickter"

function Crickters({handleClick}){
    const [crickters, setCrickters] = useState([])
    useEffect(()=>{
       const cricktersData = () =>{

           fetch("crickters.json")
           .then(res => res.json())
           .then(data => setCrickters(data) )
       }
       cricktersData()
    }, [])
    return(
        <div className="">
            {
                crickters.map((crickter, idx) =><Crickter crickters={crickter} handleClick={handleClick} key={idx}></Crickter>)
            }
        </div>
    )
}
export default Crickters