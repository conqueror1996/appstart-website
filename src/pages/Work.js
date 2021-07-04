import React from 'react'
import Portfolio from '../components/Portfolio'
import {Container} from '@material-ui/core'
import  '../styles/work.css'
const Work = () => {
    return (
        <div className='work' style={{paddingTop:'4rem'}}>
            <Container maxWidth='lg'>
            <Portfolio/>
            </Container>
        </div>
    )
}

export default Work


