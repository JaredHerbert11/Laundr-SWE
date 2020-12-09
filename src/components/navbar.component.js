import React, {useState, useEffect} from 'react'
//import Navbar from 'react-bootstrap/Navbar'
import '../css/navbar.css'
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../laundrassets/logos/logo2.png'
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useStatelocal,getCartQuantity} from '../controllers/cartFunctions';
import {NavbarState} from '../controllers/navbarCartCounter';

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    var drawerHeader= {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }
    let [cart, setCart] = useStatelocal();
    let [cartQuantity, setCartQuantity] = NavbarState(cart);
    return(
        <div className='Navbar'>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Link to="/"><img id="logo" src={logo}></img></Link>
                </Grid>
                <Grid item xs>
                   
                </Grid>
                <Grid item xs style={{display: "flex", justifyContent: "center", alignItems: "center", paddingRight: 0}}>
                        <div className="nav">
                            <Link to="/">Home </Link>
                            <Link to="/cart" >
                                <ShoppingCartIcon color="black"  />
                                <span class='badge badge-warning' id='lblCartCount'> {cartQuantity.quantity} </span>
                            </Link>
                           
                        </div>
                        <MenuIcon id="menu" onClick={handleDrawerOpen}></MenuIcon>
                        <div className="sidenav">
                            <Drawer anchor='right' open={open} variant="persistent" >
                                <div className={drawerHeader}><CloseIcon onClick={handleDrawerClose}></CloseIcon></div>
                                <Link style={{padding:"1.5em", marginRight:"1.5em"}} to="/">Home </Link>
                                <Link style={{paddingLeft:"1.5em"}} to="/cart" > Cart</Link>
                            </Drawer>
                        </div>
                        
                </Grid>
            </Grid>
        </div>
        
    )

};
export default NavBar;