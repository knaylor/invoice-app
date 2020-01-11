import React from 'react';

const FormSubmit = (props:any) => {

  return (
    <div className='flex flex-col items-end'>
      <div className='my-5 text-xl'>Total: ${props.total.toFixed(2)}</div>
      <button
        name='submit-btn'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => props.submitInvoice()}
      >
        Submit Invoice
      </button>
    </div>
  );
}

export default FormSubmit;