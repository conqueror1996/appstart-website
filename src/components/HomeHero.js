import React from "react";
import { Box, Toolbar, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import illustrationImage from "../assets/homepage/images/mansitting.svg";
import "../styles/Home.css";
const HomeHero = ({ viewport }) => {
    let font = 600
    let fontsize = 55
    if(viewport === 'md')font = 500
    if(viewport === 'md') fontsize = 45

  return (
    <div className="home-children">
        <div className="flex-container">
        <div className="flex-item one">
          <Typography variant='h2' component='h2'>
            <Box   className='hero-text' fontSize={fontsize} fontWeight={font}>
             We craft digital experience that combine design.
            </Box>
          </Typography>
        </div>
        <div className="flex-item two" >
            <div className='image-container'>
            <img src={illustrationImage} alt="illustration" />
            </div>
        </div>
        </div>
      </div>
  );
};
export default HomeHero;
