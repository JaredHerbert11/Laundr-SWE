import React from 'react'
//import Navbar from 'react-bootstrap/Navbar'
import '../css/navbar.css'
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../laundrassets/logos/logo2.png'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='Navbar'>
            <Grid container spacing={3}>
                <Grid item xs>
                    <img id="logo" src={logo}></img>
                </Grid>
                <Grid item xs>
                   
                </Grid>
                <Grid item xs style={{display: "flex", justifyContent: "center", alignItems: "center", paddingRight: 0}}>
                        <div className="nav">
                            <Link to="/home">Home </Link>
                            <Link to="/cart" ><ShoppingCartIcon color="black"  /></Link>
                        </div>
                </Grid>
            </Grid>
        </div>
        
    )

};
export default NavBar;