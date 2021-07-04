import React, { useState ,useEffect} from "react";
import { motion ,useMotionValue} from "framer-motion";
import { Link } from "react-router-dom";
import logo from '../assets/Logo/Logo.png'
import { ListItemIcon } from "@material-ui/core";
const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const middleLine = {
    open: { opacity: 1, x: 0 },
    closed: {rotate:40, opacity: 0, x: "-100%" ,duration:0.4},
  };
  

  
  const top = {
    closed: {
      translateY: 0,
    },
    opened: {
      translateY: 2,

    },
  };

  const bottom = {
    closed: {
      translateX: 0,
    },
    opened: {
      translateY: 2,
    },
  };
 const sidebar = {
    open: {
      opacity:1,
      width:`${100}vw`,
      height:`${100}vh`,
      position:'fixed',
      right:0,
      top:0,
      transition:{
        duration:0.5
      } 
    },
    closed:{
      height:0,
      width:0, 
      opacity:0,
      right:0,
      rotate:360,
      
    }
  };


 
 

  return (
    <div>

      <div
        onClick={() => setOpen((isOpen)=>!isOpen)}
        id="hamburger-icon"
        title="menu"
      >
        
        <motion.div className="sidebar-layer" style={{width:'100%',height:'100%'}}>
          <motion.div
            className="sidebar"
            variants={sidebar}
            animate={isOpen ? "open" : "closed"}
          >
            {isOpen && (
              <ul
              className='sidebar-list'>
                <span className='inner-logo'>
                  <img src={logo} alt='logo' style={{width:'50px',height:'50px'}}/>
                </span>
                <li ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/work'>Work</Link></li>
                <li ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/service'>Service</Link></li>
                <li ><Link style={{ color: 'inherit', textDecoration: 'inherit'}}  to='/team'>Team</Link></li>
                <li ><Link style={{ color: 'inherit', textDecoration: 'inherit'}}  to='/contact'>Contact</Link></li>
              </ul>
            )}
          </motion.div>
        </motion.div>
        <motion.span
          animate={isOpen? "opened":"closed"}
          variants={top}
          className="line line-1"
        ></motion.span>
        <motion.span
          animate={isOpen ? "closed" : "opened"}
          variants={bottom}
          className="line line-2"
        ></motion.span>
        <motion.span
          animate={isOpen ? "closed" : "opened"}
          variants={middleLine}
          className="line line-3"
        ></motion.span>
      </div>
    </div>
  );
};
export default Menu;
