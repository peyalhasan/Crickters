
export default function Crickter({crickters, handleClick}){
    const {name, runs, fifties, role , team, centuries} = crickters
    return(
        <div className="border-2 border-purple-500 px-5 py-4 w-[60%] my-4 rounded-xl">
            <h1>Name: {name} </h1>
            <h1>Runs: {runs} </h1>
            <h1>Fifties: {fifties} </h1>
            <h1>Role: {role} </h1>
            <h1>Team: {team} </h1>
            <h1>Centuries: {centuries} </h1>
            <button onClick={()=>handleClick(crickters)} className="p-2 text-center border-2 rounded-2xl bg-purple-700 text-white text-xl">Add to Favourite</button>
        </div>
    )
}