import React from 'react'


const Registration = () => {
  return (
    <div className='container content-container shadow-sm p-4'>
      <h2 className='text-center'>REGISTRATION FORM</h2>
      <div className='mb-3'>
        <label className='float-start'>First Name</label>
        <input type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='float-start'>Last Name</label>
        <input type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='float-start'>Email</label>
        <input type='email' className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='float-start'>Password</label>
        <input type='password' className='form-control' />
      </div>
      <div className="mb-3">
        <button type='submit' className="form-control btn btn-primary" id="submit" >Submit</button>
      </div>
    </div>
  )
}

export default Registration