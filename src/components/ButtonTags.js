import React from 'react'
import {Chip} from '@material-ui/core'
  const ButtonTags = ({btn,filter}) => {
    return (
        <>
            <Chip onClick={()=>filter(btn)}  label={btn} style={{margin:"0.5em",cursor:'pointer'}}></Chip>
        </>
    )
}

export default ButtonTags
