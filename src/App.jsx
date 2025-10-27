
import { useState } from 'react'
import './App.css'
import Crickters from './Components/Crickters'
import FavouriteCrickter from './Components/FavoriteCrickter'

function App() {

  const [crickters, setCrickters] = useState([])

  const handleClick = (crickter)=>{
    const isFavorite = crickters.find(ele => ele.name === crickter.name);
    isFavorite?alert('You Alrady Add it as favorite') :setCrickters(p=>[...p, crickter]);
  }

  const handleRemove = (name) =>{
    const remove = crickters.filter(ele => ele.name !== name)
    setCrickters(remove)
  }

  return (
    <div className=' flex flex-col md:flex-row'>
      <div className='w-[60%]'>
      <Crickters handleClick={handleClick}></Crickters>
      </div>
      <div className='w-[35%]'>
        <FavouriteCrickter crickters={crickters} handleRemove={handleRemove}></FavouriteCrickter>
      </div>
    </div>
    
  )
}

export default App
