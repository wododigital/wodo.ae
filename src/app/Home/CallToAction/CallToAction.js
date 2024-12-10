import React from 'react';
import './style.css';

function CallToAction() {
  return (
    <>
      {/* <div className="background_image py-5 verticle_center">
        <div className="container">
          <h1 style={{color:'#FFF',textAlign:'center'}} className='gf_h3 py-5' >INDIA PAVILION: DRIVING THE FUTURE OF ELECTRIC MOBILITY</h1>
          <img src="https://wodo.digital/media/2023/12/India-Flag.webp" style={{width:'100%'}} alt="" />
          <p className='gf_cta_paragraph py-5'>Sculpt the e-Mobility future with India Pavilion, your gateway to international prominence. Co-craft a narrative that resonates uniquely with your vision.</p>
        </div>
      </div> */}


      <div className="background_image verticle_center">
        <div className="container py-5">
          <h1 style={{color:'#FFF',textAlign:'center'}} className='gf_h3' >INDIA PAVILION: DRIVING THE FUTURE OF ELECTRIC MOBILITY</h1>
          {/* <br />
          <br /> */}
        </div>
        <div className="container-fluid g-0 text-center">
          <img src="https://wodo.digital/media/2023/12/India-Flag.webp" className='p-0' style={{width:'100%'}} alt="" />
        </div>
        <div className="container">
            <div className="row ">
                <div className="col d-flex justify-content-center">
                <p className='gf_cta_paragraph w-0 py-2'>Sculpt the e-Mobility future with India Pavilion, your gateway to international prominence. Co-craft a narrative that resonates uniquely with your vision.</p>
                </div>
            </div>
        </div>
      </div>
    </>


  )
}

export default CallToAction