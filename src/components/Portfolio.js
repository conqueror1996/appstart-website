import React, { useEffect, useState } from "react";
import {
  Typography,
  Tabs,
  Tab,
  Container,
  Grid,
  Paper,
} 
from "@material-ui/core";
import Borderline from "../styles/Borderline";
import SwipeableViews from "react-swipeable-views";
import ButtonTags from "./ButtonTags"
import PropTypes from "prop-types";
import { allProps, TabPanel } from "./Tabpanel";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Workdata } from "../workdata";
import Videoplayer from "./MotionVideo"
import Application from "./Application";
import "../styles/work.css";

const useStyles = makeStyles((theme) => ({
  Tabs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "coloumn",
  },
  paper: {
    margin: theme.spacing(3),
    height:'maxcontent',
    borderRadius:'2px'
  },
}));

TabPanel.PropTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const [projects, setProjects] = useState(Workdata);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  const filterItem = (app)=>{
    const updatedApp = Workdata.filter((item)=>{
      if(app.includes('all')){
        return item
      }
       else{
        return item.category === app
       }
     
    })
    setProjects(updatedApp)
  }

    const unqiueTags = Workdata.map((button,i) => button.category);
    const uniqueButton = [...new Set(unqiueTags),'all'];

  return (
    <>
      <Typography variant="h4" gutterBottom>
        <div
          style={{
            marginLeft: "auto",
            color: "#555",
            fontsize: "1em",
            marginBottom: "2rem",
          }}
        >
          What we has done so far
          <Borderline
            borderRadius="5px"
            background="#5590ff"
            marginLeft="auto"
            width="26rem"
          />
        </div>
      </Typography>
      <Container maxWidth="md">
        <div className={classes.Tabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullwidth"
            aria-label="our work tab"
          >
            <Tab label="applications" {...allProps(0)} />
            <Tab label="webistes" {...allProps(1)} />
            <Tab label="motion animation" {...allProps(2)} />
          </Tabs>
        </div>
        <Paper square elevation={20} className={classes.paper}>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
            {
              uniqueButton.map((btn,i)=>{
               return(
                <ButtonTags projects={projects} filter={filterItem}  btn={btn} key={i}/>
               )
              })
            }
             <section className='overflow-container'>
              <Grid container spacing={5} style={{marginTop:'2.5rem'}}  align='center' justify='center'>
                {projects.map((items) => {
                  return (
                    <Grid item sm={6} md={5} lg={4}>
                     <Application items={items} key={items.id} onClick={()=>console.log('gel')} />
                    </Grid>
                  );
                })}
              </Grid>
              </section>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <Videoplayer/>
            </TabPanel>
          </SwipeableViews>
        </Paper>
      </Container>
    </>
  );
};

export default Portfolio;
