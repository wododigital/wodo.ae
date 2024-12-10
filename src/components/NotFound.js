import React from 'react'
import Header from './Header';
import Footer from './Footer';
import ElementorButton from './elementorButton/elementorButton';
import './NotFound.css'



function NotFound() {
  return (
    
    <>
    <Header/>
    <div className="notfound-section py-5" style={{backgroundColor:"#1F1F1F"}}>
        <div className="container align-items-center d-flex justify-content-center py-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className='text-center notfound-h1'>404</h1>
                    <h2 className='text-center notfound-h2 py-4'>The Page You Are Looking For <br/>Is Not Found</h2>
                    <ElementorButton URL='/' text='Go Home' mode='dark'/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default NotFound