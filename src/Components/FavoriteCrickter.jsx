import DisplayFavorite from "./DisplayFavorite";

export default function FavouriteCrickter({crickters, handleRemove}){
    return(
        <div className="border-2 px-3 border-b-green-800">
            <h1 className="text-center text-2xl font-bold">Favorite Crickter: {crickters.length}</h1>
        {
            crickters.map((crickter, idx) => <DisplayFavorite key={idx} crickter={crickter} handleRemove={handleRemove}></DisplayFavorite>)
        }
        </div>
    )
}