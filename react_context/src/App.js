import logo from "./logo.svg";
import "./App.css";
import Home from "./react-context/Home";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import ViewProduct from "./react-context/ViewProduct";
import Favorite from "./react-context/Favorite";
import Profile from "./react-context/Profile";
import { context } from "./react-context/stateContext";
import {updateReducer ,initial} from './react-context/Reducer'
import { useReducer } from "react";

function App() {

  const [state,dispatch] = useReducer(updateReducer,initial)
  return (
    <div>
      <context.Provider value={{state,dispatch}}>
        <BrowserRouter>
        {state.isAuthendicated ? (
          <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="profile" element={<Profile />}></Route>
          <Route path="viewProduct" element={<ViewProduct />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
          <Route path="*" element={<Navigate to="profile"></Navigate>}></Route>
        </Routes>
        ):
        (<Routes>
           
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
          )}
          
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
