export const initial ={
    productList:[
        { toyName: "Toy1", id: '1', price:'$20', image: require("../Assets/1.jpeg") },
        { toyName: "Toy2", id: '2',price:'$30', image: require("../Assets/2.jpg") },
        { toyName: "Toy3", id: '3',price:'$26', image: require("../Assets/3.webp") },
        { toyName: "Toy4", id: '4',price:'$28', image: require("../Assets/4.webp") },
        { toyName: "Toy5", id: '5',price:'$28', image: require("../Assets/5.jpg") },
        { toyName: "Toy6", id: '6',price:'$28', image: require("../Assets/6.jpg") },
        { toyName: "Toy7", id: '7',price:'$28', image: require("../Assets/7.jpg") },
        { toyName: "Toy8", id: '8',price:'$28', image: require("../Assets/8.webp") }
      ],
      favorite:[], 
      viewCart:[],
      isAuthendicated:JSON.parse(localStorage.getItem('isLoggedin')) || false
}

export  const updateReducer = (state=initial , action) => {

    console.log(state,action); 
   

    switch(action.type) {

        case "VIEW_CART":{
            return{
                ...state,viewCart:action.payload,
            }
        }
        case "LOGIN":{
            return{
                ...state,isAuthendicated:action.payload
            }
        }
        case "FAVORITE":{
            return{
                ...state,favorite:action.payload
            }
        }
        default :  return state;
    }
  
}