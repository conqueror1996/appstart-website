import React,{useState} from 'react'
import Hero from '../components/HomeHero'
import {Container,Toolbar,Button,Box} from '@material-ui/core'
import instagram from '../assets/icons/instagram.svg'
import dribble from '../assets/icons/dribble.svg'
import linkedin from '../assets/icons/linkedin.svg'
import Work from '../pages/Work'
import '../styles/Home.css'



    

const Home = ({viewport}) => {
    return (
        <>
        <main id='home-container' style={{paddingBottom:'4rem'}}>
            <div className='social-links'>
                <ul>
                  <li>
                      <img src={linkedin} alt='sd'/>
                  </li>
                  <li>
                      <img src={instagram} alt='sd'/>
                  </li>
                  <li>
                      <img src={dribble} alt='sd'/>
                  </li>
                </ul>
            </div>
        <Container  maxWidth={viewport} >
            <Hero viewport={viewport}/>
        </Container>
        </main>
        <section>
        <Work/>
        </section>
        </>
    )
}

export default Home

