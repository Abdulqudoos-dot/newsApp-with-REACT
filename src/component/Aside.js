import React, { useEffect } from 'react'
import '../css/Aside.css'
import { Link, useLocation } from 'react-router-dom'
const Aside = (props) => {
  const currentPath = useLocation()
  return (
    <>
      <div className='Aside ' >
        <div className='countrContainer'>
        <div className='country'>
        <Link role="button" className='btn bttn-primary' onClick={()=>{props.setCountry('us')}} to={`${currentPath.pathname === '/' ? '/business' : '/'}`}>USA News</Link>
        </div>
        <div className='country'>
        <Link role="button" className='btn bttn-primary' onClick={()=>{props.setCountry('ph')}} to={`${currentPath.pathname === '/' ? '/business' : '/'}`}>Philpine News</Link>
        </div>
        <div className='country'>
        <Link role="button" className='btn bttn-primary' onClick={()=>{props.setCountry('jp')}} to={`${currentPath.pathname === '/' ? '/business' : '/'}`}>Japan News</Link>
        </div>
        <div className='country'>
        <Link role="button" className='btn bttn-primary' onClick={()=>{props.setCountry('eg')}} to={`${currentPath.pathname === '/' ? '/business' : '/'}`}>Egypt News</Link>
        </div>
        <div className='country'>
        <Link role="button" className='btn bttn-primary' onClick={()=>{props.setCountry('ua')}} to={`${currentPath.pathname === '/' ? '/business' : '/'}`}>Ukrain News</Link>
        </div>
        <div className='country'>
        <Link role="button" className='btn bttn-primary' onClick={()=>{props.setCountry('sa')}} to={`${currentPath.pathname === '/' ? '/business' : '/'}`}>Saudi Arabia News</Link>
        </div>
        <div className='country'>
        <Link role="button" className='btn bttn-primary' onClick={()=>{props.setCountry('ru')}} to={`${currentPath.pathname === '/' ? '/business' : '/'}`}>Russian News</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Aside