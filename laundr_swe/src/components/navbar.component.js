import React from 'react'
//import Navbar from 'react-bootstrap/Navbar'
import '../css/navbar.css'
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../laundrassets/logos/logo2.png'


const NavBar = () => {
    return(
    
        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                    <img id="logo" src={logo}></img>
                </Grid>
                <Grid item xs>
                   
                </Grid>
                <Grid item xs style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div className="nav">
                            <a href="default.asp">Home </a>
                            <a href="#home" ><ShoppingCartIcon color="black"  /></a>
                        </div>
                </Grid>
            </Grid>
        </div>
        
    )

};
export default NavBar;