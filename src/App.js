import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css'

const App = () => {
  const pageSize = 5
  const [country, setCountry] = useState('in')

  return (
    <>
        <div className='App'>
      <Router>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<News key={'home'} setCountry={setCountry} country={country} category="general" pageSize={pageSize} />}></Route>
            
            <Route exact path='/business' element={<News setCountry={setCountry} key={'business'} country={country} category="business" pageSize={pageSize} />}></Route>

            <Route exact path='/entertainment' element={<News key={'entertainment'} setCountry={setCountry} country={country} category="entertainment" pageSize={pageSize} />}></Route>

            <Route exact path='/health' element={<News key={'health'} country={country} setCountry={setCountry} category="health" pageSize={pageSize} />}></Route>

            <Route exact path='/sciences' element={<News key={'sciences'} country={country} setCountry={setCountry} category="sciences" pageSize={pageSize} />}></Route>

            <Route exact path='/sports' element={<News key={'sports'} country={country} setCountry={setCountry} category="sports" pageSize={pageSize} />}></Route>
            <Route exact path='/technology' element={<News key={'technology'} setCountry={setCountry} country={country} category="technology" pageSize={pageSize} />}></Route>
          </Routes>

      </Router>
    </div>
    </>
  )
  
}
App.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 5
}
App.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}




export default App