import React from 'react'
import Par from './Par'
import Home2 from './Home2'
import Home1 from './Home1'
import Home3 from './Home3'


const Home = () => {
  
  return (
    <div style={{
      display: 'flex',
      flexDirection : 'column',
      minHeight: 'fit-content',
      overflowY: 'hidden'
    }}>
       <Par /> 
      <Home1 />
    </div>

  )
}

export default Home
