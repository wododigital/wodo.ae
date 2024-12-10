import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


function LogoGrid(props) {

  function ClientBlock(props){
    return(
      <>
        <div class="logo-grid-item logo-verticle_center">
          <Link to={props.URL}>
            <img className='logo-image' src={props.logo} alt="" />
          </Link>
        </div>
      </>
    );
  }
  
    return (
    <>
        <div class="logo-grid-container">
          {
            props.logos.map((data, index) => (
              <ClientBlock key={index} logo={data.logo} URL={data.URL}/>
            ))
          }
        </div>
    </>
  )
}

export default LogoGrid