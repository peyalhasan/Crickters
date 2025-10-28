import { MdFavoriteBorder } from "react-icons/md";
export default function Crickter({crickters, handleClick}){
    const {name, runs, fifties, role , team, centuries} = crickters
    return(
        <div className="border-2 border-purple-500 px-5 py-4  my-4 rounded-xl">
            <h1>Name: {name} </h1>
            <h1>Runs: {runs} </h1>
            <h1>Fifties: {fifties} </h1>
            <h1>Role: {role} </h1>
            <h1>Team: {team} </h1>
            <h1>Centuries: {centuries} </h1>
            <div className="flex justify-end ">
            <button onClick={()=>handleClick(crickters)} className="p-2 flex justify-end border-2 rounded-2xl  bg-purple-700  text-white text-xl"><MdFavoriteBorder /></button>
            </div>
        </div>
    )
}