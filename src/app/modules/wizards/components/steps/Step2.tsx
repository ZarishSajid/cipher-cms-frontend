/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC,useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step2: FC = () => {
  
  const [firstname, setFirstName] = useState("");
  const changeFirstName =(e:React.ChangeEvent<HTMLInputElement>)=> {
    setFirstName(e.target.value)
  }


  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Customer Detail</h2>  
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
     
      <div className='row mb-10'>
        <div className='col-md-6 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Street 1 </label>

          <div className='row fv-row'>
            <div className='col-12'>
                <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='streeet1'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage  name='street1' />
        </div>
            </div>

              </div>
              </div>

        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>Street 2</span>
           
          </label>

          <div className='position-relative '>
          <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='street2'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage  name='street2' />
        </div>

            
          </div>
        </div>
      </div>
      <div className='row mb-10'>
        <div className='col-md-8 fv-row'>

          <div className='row fv-row'>
            <div className='col-6'>
            <label className=' fs-6 fw-bold form-label mb-2'>Zip</label>

            <Field
          type='number'
          className='form-control form-control-lg form-control-solid'
          name='zip'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage  name='zip' />
        </div>
            </div>

            <div className='col-6'>
            <label className='fs-6 fw-bold form-label mb-2'>City</label>

            <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='city'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage  name='city' />
        </div>
            </div>
          </div>
        </div>

        <div className='col-md-4 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span >State</span>
       
          </label>

          <div className='position-relative'>
          <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='state'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage  name='state' />
        </div>
           
          </div>
        </div>
        <div className='mb-10 fv-row'>
        <label className='form-label mb-3  required'>Telephone</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='telephone'
          placeholder=''
        />
        <div className='fv-plugins-message-container invalid-feedback'>
          <ErrorMessage name='telephone' />
        </div>
      </div>
      </div>
   
  </div>
  
  )
}

export {Step2}
