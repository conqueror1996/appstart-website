import React,{useState,useRef} from "react";
import  '../styles/header.css'
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo/Logo.png";
import Menu from '../MobileMenu/menu'
import { ElevationScroll } from "../functions/HeaderFunction";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Typography,
} from "@material-ui/core";
const Header = () => {
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          elevation={0}
          className="AppBar"
          color="inherit"
          position="fixed"
        >
          <Toolbar>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>
                <img
                  title="logo"
                  src={Logo}
                  alt="logo"
                  style={{ width: "100%", height: "auto", maxWidth: "30px" }}
                />
                <div className="Link">
                  <strong>App</strong>Start
                </div>
              </Button>
            </Link>
            <Box mx="auto">
              <ul className="link-container">
               <Link to='/work'  style={{ color: 'inherit', textDecoration: 'inherit'}} > <li>Work</li></Link>
                <motion.li><Link  to='/service'   style={{ color: 'inherit', textDecoration: 'inherit'}}  >Services</Link></motion.li>
                <li><Link to='/team'  style={{ color: 'inherit', textDecoration: 'inherit'}}  >Team</Link></li>
                <li><Link to='/about'  style={{ color: 'inherit', textDecoration: 'inherit'}}  >About</Link></li>
                <li><Link to='/contact' style={{ color: 'inherit', textDecoration: 'inherit'}}  >Contact</Link></li>
              </ul>
            </Box>
            <Menu/>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
