import React from 'react';
import '../styles/invoice-tailwind.css';

const FormInput = (props:any) => {
  return (
    <div className='text-left width-full flex flex-col'>
      <label className='form-label font-bold' htmlFor={props.name.toLowerCase()}>{props.name}</label>
      <input
        className='flex-1 border border-black px-2 py-1'
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        onChange={(e) => props.handleChange(e.target.value)}
        type={props.type}
        value={props.value}
      />
    </div>
  )
}

export default FormInput;