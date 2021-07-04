import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles'

const Theme = createMuiTheme({
    typography:{
        fontFamily:[
            'Montserrat',
            'sans-serif'
        ].join(',')
    },
    palette:{
        primary:{
            main:'#5590ff',
            light:'#6086f8'
        },
        secondary:{
            main:'#9189f9',
            light:'#89a7e7'
        }
    }
})

export default Theme