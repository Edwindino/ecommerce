import React from "react";
import { Route, Routes  } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "./Dashboard";


export default function Home(){
    return(
      <div>
        <Header/>
        
        <Routes>
            
            <Route path='/'    element={<Dashboard />} />
            <Route path='/product/:id' element={<product />} />
        </Routes>
      </div>
    )
}