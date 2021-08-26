/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Customer Address</h2>  
      </div>

      <div className='mb-10 fv-row'>
        <label className='form-label mb-3  required'>First Name</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='firstname'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage name='firstname' />
        </div>
      </div>
      <div className='mb-10 fv-row'>
        <label className='form-label mb-3 required'>Last Name</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='lastname'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage name='lastname' />
        </div>
      </div>

      <div className='mb-10 fv-row'>
        <label className='form-label mb-3 '>Country</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='country'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage  name='country' />
        </div>
      </div>
    </div>
  )
}

export {Step2}
