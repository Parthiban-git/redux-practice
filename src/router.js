import React from "react"; 

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Count from "./components/count";
import Home from "./components/home";

// import {createBrowserHistory} from "history"
// export const history = createBrowserHistory();

const AppRouter=()=>{
    return(
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Count/>} />
           <Route path="/home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    )
}
export default AppRouter;