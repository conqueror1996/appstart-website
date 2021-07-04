import React from 'react'
import {Box} from '@material-ui/core'
import  {Typography} from '@material-ui/core'
 export const TabPanel = (props) => {
    const {children,value,index,...other} = props;
    return (
        <div
        role = 'tabpanel'
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby = {`full-width-tab-${index}`}
        {...other}
        >
            {
                value === index &&(
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )
            }
            
        </div>
    )
    
}



 export function allProps(index){
    return{
        id:`full-width-tab-${index}`,
        'aria-controls':`full-width-tabpanel-${index}`
    }
}

