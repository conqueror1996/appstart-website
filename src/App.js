import React, { useState } from 'react'
import {Contact,Home,Service,Work,WorkDetail,Team} from './pages'
import Header from './components/Header'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import './App.css'
const App = () => {
  const [viewport,setViewPort] = useState(window.innerWidth);
  window.addEventListener('resize',()=> setViewPort(window.innerWidth))
  let size = 'md';
  if(viewport <= 600 ) size = 'sm';
  if(viewport >= 960) size = 'md'
  viewport >= 1280 ? size = 'lg': size = 'md'

  console.log(viewport)
  console.log(size)
  // https://www.frontendmentor.io/solutions/minimalist-portfolio-website-react-scss-react-router-dom-CR7hVsJZ2
  return (
    <Router>
      <Header/>
      <main>
        <div className='container'>
          <Switch>
          <Route exact path= '/team' render={()=> <Team viewport={size}/>}/>
            <Route exact path= '/service' render={()=> <Service viewport={size}/>}/>
            <Route exact path='/contact'
            render ={()=> <Contact viewport={size}/>}/>
            <Route exact path= '/work' render ={()=> <Work viewport={size}/>}/>
            <Route exact path= '/work/:detail' render={()=> <WorkDetail viewport={size}/>} />
            <Route exact path= '/'render ={()=> <Home viewport={size}/>}/>
          </Switch>
        </div>
      </main>
    </Router>
  )
}

export default App
