import React,{ useState,useRef} from 'react'
import {Workdata} from '../workdata'
import { makeStyles } from '@material-ui/core/styles';
import {motion} from 'framer-motion'
import image from '../assets/homepage/images/mansitting.svg'
import  '../styles/work.css'
import {Card,CardActionArea,Grid,CardActions,CardContent,Button,Typography, CardMedia} from '@material-ui/core'
const Application = ({items,key}) => {
    const [data,setData] = useState(items);
    const useStyles = makeStyles((theme)=>({
        root:{
            maxWidth:340,
            width:'100%',
        },
  
    }))
    const classes = useStyles()
    return (
   
            <Card  className={classes.root} key={key}>
                  <CardActionArea>
                      <CardMedia onHover={{scale:1.1}} component ='img' alt='apps' height='140' style={{width:'100%'}}
                      image={image}
                      title='app details'
                      />
                      <CardContent>
                          <Typography gutterBottom variant='h6' component = 'h3'>
                              {items.name}
                          </Typography>
                          <Typography variant='body2' color='textSecondary' component='p'>
                              This applications created on june for partimers worker, here jobs find people
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button size='small' color='secondary'>
                          share
                      </Button>
                      <Button size='small' color='primary'>
                          Learn more
                      </Button>
                  </CardActions>
              </Card>
    )
}

export default Application
