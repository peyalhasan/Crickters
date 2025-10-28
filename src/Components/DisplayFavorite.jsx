
export default function DisplayFavorite({crickter, handleRemove}){
    const {name, runs, fifties, role, centuries, team} =  crickter;
    return(
        <div>
            <div className="border-2 mx-3 border-purple-500 px-5 py-4  my-4 rounded-xl flex justify-between ">
            <div>
            <h1>Name: {name} </h1>
            <h1>Runs: {runs} </h1>
            <h1>Fifties: {fifties} </h1>
            <h1>Role: {role} </h1>
            <h1>Team: {team} </h1>
            <h1>Centuries: {centuries} </h1>  
             </div>
            <button onClick={() => handleRemove(name)} className=" self-start text-3xl border border-red-500 rounded-full w-10 h-10 ">X</button>
            </div>
        </div>
    )
}

