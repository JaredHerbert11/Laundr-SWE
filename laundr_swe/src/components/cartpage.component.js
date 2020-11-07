import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../css/cart.css'

function cartpage(props){
    return (
        <div className="bg">
            <div className="ui floating message" style={{minWidth : "700px"}}>
                <div class="header">
                    <div className="top">
                        <p> Your Cart </p>
                        <p> Proceed to Checkout </p>
                    </div>
                </div>
                    <table class="ui celled collapsing very basic table" style={{minWidth : "700px"}}>
                        <tbody class="">
                            <tr class="">
                                <td class="">
                                    <div className="item">
                                        <img src="https://media.istockphoto.com/photos/the-man-plays-a-tuba-picture-id115611931" className="image"></img>
                                        <div className="column">
                                            <p style={{fontSize : "30px"}}> Tuba </p>
                                            <div className="row" style={{fontSize : "15px"}}>
                                                <i class="trash icon" style={{fontSize : "20px"}}></i>
                                                <p style={{color:"red"}}> Remove from Cart</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i class="dollar sign icon" style={{fontSize : "15px"}}></i>
                                            <p style={{fontSize : "25px"}}> 3.50 </p>
                                        </div>
                                        
                                    </div>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="">
                                    <p> Hello uWu </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default cartpage;