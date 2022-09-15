import React, { useContext } from 'react'
import { context } from './stateContext'

const Favorite = () => {

  const { state,dispatch}= useContext(context);
  const favorite = state.favorite;


  const removeItem = (data1) => {
    let a = favorite.filter((b) => {
      return data1 !== b;
    });
    dispatch({ type: "FAVORITE", payload: a});
  }
  return (
    <div>

<div className="two">
      {favorite.map((data, index) => (
        <div key={index} className="one">
          <img src={data.image} />
          <div>
          <h1>{data.toyName}</h1>
         </div>
         <button onClick={() => removeItem(data)}>Remove</button>
        
        </div>
      ))}
    </div>


    </div>
  )
}

export default Favorite