import React from 'react'
import './Sale.css';

const AddSale = () => {
  return (
    <div className='container content-container shadow-sm p-4'>
      <h2 className='text-center'>ADD SALE ENTRY</h2>
      <div className="mb-3">
        <label className='float-start'>Product</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className='float-start'>Quantity</label>
        <input className="form-control" />
      </div>
      <div className="mb-3">
        <label className='float-start'>Amount</label>
        <input className="form-control" />
      </div>
      <div className="mb-3">
        <button type='submit' className="form-control btn btn-primary" id="submitBtn">Submit</button>
      </div>
    </div>
  )
}

export default AddSale