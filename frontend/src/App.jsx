import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path='/' element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;