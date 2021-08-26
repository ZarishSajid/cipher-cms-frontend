import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {Field, ErrorMessage} from 'formik'

class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      role: '',
      value: '',
      name: '',
      image: null,
    }
  
  }

    render(){
     return(
        <div data-kt-stepper-element="content">
        <div className="w-100">
            <div className="pb-10 pb-lg-12">
                <h2 className="fw-bolder text-dark">Business Details</h2>
                <div className="text-muted fw-bold fs-6">If you need more info, please check out 
                <a href="#" className="link-primary fw-bolder">Help Page</a>.</div>
            </div>
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="form-label required">Business Name</label>
            
                <input name="business_name" className="form-control form-control-lg form-control-solid" value="Keenthemes Inc."/>
            <div className="fv-plugins-message-container invalid-feedback"></div></div>
            
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="d-flex align-items-center form-label">
                    <span className="required">Shortened Descriptor</span>
                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="<div className='p-4 rounded bg-light'> <div className='d-flex flex-stack text-muted mb-4'> <i className='fas fa-university fs-3 me-3'></i> <div className='fw-bold'>INCBANK **** 1245 STATEMENT</div> </div> <div className='d-flex flex-stack fw-bold text-gray-600'> <div>Amount</div> <div>Transaction</div> </div> <div className='separator separator-dashed my-2'></div> <div className='d-flex flex-stack text-dark fw-bolder mb-2'> <div>USD345.00</div> <div>KEENTHEMES*</div> </div> <div className='d-flex flex-stack text-muted mb-2'> <div>USD75.00</div> <div>Hosting fee</div> </div> <div className='d-flex flex-stack text-muted'> <div>USD3,950.00</div> <div>Payrol</div> </div> </div>" data-bs-original-title="" title=""></i>
                </label>
                
                <input name="business_descriptor" className="form-control form-control-lg form-control-solid" value="KEENTHEMES"/>
            
                <div className="form-text">Customers will see this shortened version of your statement descriptor</div>
            <div className="fv-plugins-message-container invalid-feedback"></div></div>
        
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="form-label required">Corporation Type</label>
    
                <select name="business_type" className="form-select form-select-lg form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true" data-select2-id="select2-data-10-pxwg" tabIndex={-1} aria-hidden="true">
                    <option data-select2-id="select2-data-12-6s2x"></option>
                    <option value="1">S Corporation</option>
                    <option value="1">C Corporation</option>
                    <option value="2">Sole Proprietorship</option>
                    <option value="3">Non-profit</option>
                    <option value="4">Limited Liability</option>
                    <option value="5">General Partnership</option>
                </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-11-l2st" style={{width: "100%"}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-lg form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-business_type-60-container" aria-controls="select2-business_type-60-container"><span className="select2-selection__rendered" id="select2-business_type-60-container" role="textbox" aria-readonly="true" title="Select..."><span className="select2-selection__placeholder">Select...</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
            <div className="fv-plugins-message-container invalid-feedback"></div></div>
        
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="form-label">Business Description</label>
            
                <textarea name="business_description" className="form-control form-control-lg form-control-solid" rows="3"></textarea>
            
            <div className="fv-plugins-message-container invalid-feedback"></div></div>
    
            <div className="fv-row mb-0 fv-plugins-icon-container">
                <label className="fs-6 fw-bold form-label required">Contact Email</label>
        
                <input name="business_email" className="form-control form-control-lg form-control-solid" value="corp@support.com"/>
            <div className="fv-plugins-message-container invalid-feedback"></div></div>
        </div>
    </div>


    )
  }
}
export default UsersList
