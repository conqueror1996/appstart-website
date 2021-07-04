import React from 'react'
import {useScrollTrigger} from '@material-ui/core'
export const ElevationScroll= (props)=>{
    const {children,window} = props;
    const trigger = useScrollTrigger({
        disableHysteresis:true,
        threshold:0,
        traget:window?window():undefined
    })
    return React.cloneElement(children,{
        elevation:trigger?6:0
    })
}