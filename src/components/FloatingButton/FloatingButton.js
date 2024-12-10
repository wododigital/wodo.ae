import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import BaseURL from '../other/BaseURL'

function FloatingButton() {
  return (
    <>
        <Link to="/contact" className='FloatingButton'>
            <img src={`${BaseURL}/media/2022/03/WODO-Contact-Circle-Black.png`} alt="Best Digital marketing agency in Bengaluru" />
        </Link>
    </>
  )
}

export default FloatingButton