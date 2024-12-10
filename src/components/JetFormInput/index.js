import React from 'react'
import './style.css'
 
function index(props) {
  return (
    <>
        <input type={props.type} className='inputTextBox' placeholder={props.placeholder} id={props.id} name={props.name}  required={props.required} onChange={props.onChange}/>
    </>
  )
}
 
export default index