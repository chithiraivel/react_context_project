import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./stateContext";

const Profile = () => {
  const navig = useNavigate();
  const { state, dispatch } = useContext(context);
  const storeValue = state.productList;
  const viewValue = state.viewCart;

  const addToCart = (data) => {
    const item = state.viewCart
    dispatch({ type: "VIEW_CART", payload: [...item,{...data,qty:1}]});
  };

  const viewProduct = () => {
    navig("/viewProduct");
  };

  const favorite = (data) => {
    const item = state.favorite
   dispatch({ type: "FAVORITE", payload: [...item,data]});
      navig("/favorite")
  }

  const logout = () => {
    dispatch({type:'LOGIN',payload:false});
    localStorage.setItem('isLoggedin',JSON.stringify(false))
  }
  return (
    <div>
      <button onClick={() => viewProduct()}>viewProduct</button>
      <button onClick={ () => logout()}>Logout</button>
      <div className="two">
      {storeValue.map((data, index) => (
        <div key={index} className="one">
          <img src={data.image} />
          <div>
          <p>{data.toyName}</p>
         </div>
          <button onClick={() => addToCart(data)}>AddToCart</button>
          <button onClick={() => favorite(data)} style={{border:'none',fontSize:'25px',color:'red'}}><i className="fa fa-heart"></i></button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Profile;
