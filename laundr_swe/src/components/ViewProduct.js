import React, {useState, useEffect} from 'react';
import { getProduct } from '../controllers/productFunctions';

const ViewProduct = (props) => {
    
    const productid = props.viewProduct["id"];

    const productData = getProduct(productid, props.data)[0];
    
        // return (
            
        //     <div style = {{fontWeight: "bold", backgroundColor: "white", padding: "5%", borderRadius: 5 }}>
        //         <div style = {{width: "%5", borderRadius: 5 }}>
        //         </div>
        //         <hr/>
        //         <h1>{productData.name} Product : </h1><br/>
        //         <span>Name     : {productData.name}</span><br/>
        //         <span>Description     : {productData.description}</span><br/>
        //         <span>Type : {productData.type}</span><br/>
        //         <span>Scent : {productData.scent}</span><br/>
        //         <span>Hexcode : {productData.hexcode}</span><br/>
        //         <hr/>
        //     </div>
        // )

    return (
        <div>
            <div style={{fontWeight: "bold", backgroundColor: "white", padding: "5%", borderRadius: 5, display: "flex", alignItems:"center", justifyContent:"center"}}>
                <i style={{color:"blue"}}>Testing Product Schema</i>    
            </div>
           
        </div>
    );
};
export default ViewProduct;

