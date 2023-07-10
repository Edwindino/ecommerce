import React from "react";
import { useNavigate } from "react-router-dom";




export default function Productcard(props){

      const navigate = useNavigate();

    return(
        <div className="card m-2 curser-pointer" style={{width:250}} role="button" onClick={()=>navigate(`/product/${props.id}`)}>
            <div className="mt-3">
                <img  src={props.img} height={150} width={100} className="Border-radius-9" />
            </div>
            <div className="card-body">
              <h6 className="card-title">{props.title}</h6>
              <h6>Price: {`$${props.price}`}</h6>
              <h6>Discount: {props.Discount}%</h6>
              <h6>Rating: {props.Rating}*</h6>

              <div>
                { props.stock>0? <button className="btn btn-success">Available</button> : <button className=" btn btn-outline-danger">Out of stock</button>}
              </div>
            </div>
        </div>
    )
}