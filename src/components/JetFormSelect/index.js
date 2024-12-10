import React from 'react'
import './style.css'
 
function index(props) {
  return (
    <>
      <select className='inputTextBox' id={props.id} name={props.name}  required={props.required} onChange={props.onChange}>
        {
          props.options.map((option, index) => (
            <option key={index} value={index===0 ? '': option} selected={index===0 ? true:false} disabled={index===0 ? true:false}>{option}</option>
          ))
        }
      </select>
    </>
  )
}
 
export default index