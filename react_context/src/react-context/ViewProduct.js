import React ,{useContext}from 'react'
import { context } from './stateContext'


const ViewProduct = () => {

  const {state,dispatch} = useContext(context)
  const viewValue = state.viewCart;
 
  const increament = (data1) => {

  
    const isExist = viewValue.some((prod) => prod.id === data1.id);

    if (isExist) {
      const data = viewValue.map((prod) => {
        if (prod.id === data1.id) {
          return {
            ...prod,
            qty: prod.qty + 1,
          };
        } else {
          return prod;
        }
      });
    dispatch({ type: "VIEW_CART", payload: data});
    } 
}

const decreament = (data1) => {
  if(data1.qty > 1){
    const data = viewValue.map((prod) => {
      if (prod.id === data1.id) {
        return {
          ...prod,
          qty: prod.qty - 1,
        };
      } else {
        return prod;
      }
    });
 
    dispatch({ type: "VIEW_CART", payload: data});
  }
}

const removeItem = (data1) => {
  let a = viewValue.filter((b) => {
    return data1 !== b;
  });
  dispatch({ type: "VIEW_CART", payload: a});
  
}
  return (
    <div>

<div className="two">
      {viewValue.map((data, index) => (
        <div key={index} className="one">
          <img src={data.image} />
          <div>
          <h1>{data.toyName}  qty : {data.qty}</h1>
         </div>
         <button onClick={() => increament(data)}>+</button>
         <button onClick={() => removeItem(data)}>Remove</button>
         <button onClick={() => decreament(data)}>-</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ViewProduct