import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/productlist";


export default function Product() {

     const navigate=navigate();
    const params = useParams();
    const props = ProductList.find((element) => element.id === parseInt(params.id))
    return (

        <div className="card m-2 ">
            <div className="mt-3">
                <img  src={props.img} height={150} width={100} className="Border-radius-9" />
            </div>
            <div className="card-body">
              <h6 className="card-title">{props.title}</h6>
              <h6>Price: {`$${props.price}`}</h6>
              <h6>Discount: {props.Discount}%</h6>
              <h6>Rating: {props.Rating}*</h6>

              <div>
                { props.stock>0? <button className="btn btn-outline-success">Available</button> : <button className=" btn btn-outline-danger">Out of stock</button>}
              </div>
            </div>

            {params.id} {props.name}
        </div>
    
        
    )
}