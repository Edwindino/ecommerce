import React from "react";
import { ProductList} from "../data/productlist";
import Productcard from "../components/productcard";


export default function  Dashboard(){
    return(
        <div className="d-flex flex-wrap justify-content-center p-2 bg-light">
            {ProductList.map((product)=> <Productcard {...product} key={product.id}/>)}
            
        </div>
    )
}