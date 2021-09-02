import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import '../index.css'
import {Link} from 'react-router-dom'

class UpdateAccounting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    credit_hold:'',
      available_credit: '',
      credit_limit: '',
      payment_terms: '',
      fireRedirect: false,
      redirectRoute: '',
    }
    this.saveAccountingDetail = this.saveAccountingDetail.bind(this)

    this.onValueChange = this.onValueChange.bind(this)
    this.handleCreditLimit = this.handleCreditLimit.bind(this)
    this.handleAvailableCredit = this.handleAvailableCredit.bind(this)
    this.handlePaymentTerms = this.handlePaymentTerms.bind(this)
  }
  componentDidMount() {
    const userData =this.props.location.aboutProps && this.props.location.aboutProps.userData;

    this.setState({
      
      available_credit: userData && userData._id
      ? userData.available_credit
      : this.state.available_credit,
      credit_hold: userData && userData._id
      ? userData.credit_hold
      : this.state.credit_hold,
      credit_limit: userData && userData._id
      ? userData.credit_limit
      : this.state.credit_limit,
      payment_terms: userData && userData._id
      ? userData.payment_terms
      : this.state.payment_terms,

    
    })
  }

  onValueChange(e) {
    this.setState({
      credit_hold: e.target.value,
    })
    console.log('credit_hold=', e.target.value)
  }

  handleCreditLimit(event) {
    this.setState({credit_limit: event.target.value})
    console.log('Credit Limit =', this.state.credit_limit)
  }

  handleAvailableCredit(event) {
    this.setState({available_credit: event.target.value})
    console.log('Available Credit =', this.state.available_credit)
  }

  handlePaymentTerms(e) {
    this.setState({
      payment_terms: e.target.value,
    })
    console.log('Payment Terms =', this.state.payment_terms)
  }

  saveAccountingDetail = (e) => {
    var id = localStorage.getItem('id')
    console.log(id, 'id inside save accounting details')
    const data = {
      available_credit: this.state.available_credit,
      credit_limit: this.state.credit_limit,
      payment_terms: this.state.payment_terms,
      credit_hold: this.state.credit_hold,
    }
    axios.put(`http://localhost:8080/api/update_customer/${id}`, data).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        alert('Customer Details Saved')
        console.log('data', res.data.message)
        window.location.href = '/apps/customers/UpdateCustomerContact'


      } else {
        alert(res.data.message)
      }
    })
  }

  render() {
    const {stateList} = this.state
    return (
        <div>
        <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
          <li className='nav-item'>
            <a className='nav-link'>
            <Link to='/apps/customers/UpdateCustomers' > <h6 className='text-primary'> Customer Details</h6></Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link active'  >
             <Link to='/apps/customers/UpdateAccounting' ><h6 className='text-primary'> Accounting</h6></Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' >
            <Link to='/apps/customers/UpdateCustomerContact' > <h6 className='text-primary'> Customer Contact Details</h6></Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' >
            <Link to='/apps/customers/UpdateCustomizeUnit' ><h6 className='text-primary'> Customize Units</h6></Link>
            </a>
          </li>
        </ul>

        <div >
          

           <div
            className=' card  '
          
          >
            <div className='w-100'>
              <form
                className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate={true}
              >
                <div data-kt-stepper-element='content' className='completed'></div>

                <div data-kt-stepper-element='content' className='completed'>
                  <div className='w-100' data-select2-id='select2-data-77-feqh'>
                    <div className='pb-10 pb-lg-12'>
                      <h2 className='fw-bolder text-dark'>Accounting</h2>
                    </div>

                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label '>Credit Limit</label>

                      <input
                        type='text'
                        value={this.state.credit_limit}
                        onChange={this.handleCreditLimit}
                        name='credit_limit'
                        className='form-control form-control-lg form-control-solid'
                      />

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label '>Available Credit</label>

                      <input
                        type='text'
                        value={this.state.availablecredit}
                        onChange={this.handleAvailableCredit}
                        name='available_credit'
                        className='form-control form-control-lg form-control-solid'
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                  <label className='form-label '>Payment Terms</label>
                  <div className='input-group'>
                    <input
                      type='text'
                      value={this.state.payment_terms}
                      onChange={this.handlePaymentTerms}
                      name='payment_terms'
                      className='form-control form-control-lg form-control-solid'
                    />{' '}
                    <div className='input-group-append'>
                      <span className='input-group form-control form-control-lg form-control-solid'>
                        days
                      </span>
                    </div>
                  </div>
                </div>

                <br />
                <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                  <label className='form-label '>Credit Hold</label>
                </div>
                <div className='d-flex fv-row'>
                  <div className='radio'>
                    <input
                      className='form-check-input me-3'
                      type='radio'
                      value='credit_hold_enable'
                      checked={this.state.credit_hold === 'credit_hold_enable'}
                      onChange={this.onValueChange}
                    />
                    <label>Credit Hold Enable</label>
                  </div>
                </div>
                <div className='separator separator-dashed my-5'></div>
                <div className='radio'>
                  <input
                    className='form-check-input me-3'
                    type='radio'
                    value='credit_hold_disable'
                    checked={this.state.credit_hold === 'credit_hold_disable'}
                    onChange={this.onValueChange}
                  />
                  <label className=' mx-auto'>Credit Hold Disable</label>
                </div>
                <br />

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
                  <Link to='/apps/customers/UpdateCustomers' >
                    <button
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <span className='svg-icon svg-icon-4 me-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <rect
                            opacity='0.5'
                            x='6'
                            y='11'
                            width='13'
                            height='2'
                            rx='1'
                            fill='black'
                          ></rect>
                          <path
                            d='M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z'
                            fill='black'
                          ></path>
                        </svg>
                      </span>
                      Back
                    </button>
                    </Link>
                  </div>

                  <div>
                    <button
                      onClick={() => this.saveAccountingDetail()}
                      type='button'
                      className='btn btn-lg btn-primary me-3 d-inline-block'
                      data-kt-stepper-action='submit'
                    >
                      <span className='indicator-label'>
                        Save
                        <span className='svg-icon svg-icon-3 ms-2 me-0'></span>
                      </span>
                    </button>
                    <button
                      type='button'
                      className='btn btn-lg btn-primary d-none'
                      data-kt-stepper-action='next'
                    >
                      Continue
                      <span className='svg-icon svg-icon-4 ms-1 me-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <rect
                            opacity='0.5'
                            x='18'
                            y='13'
                            width='13'
                            height='2'
                            rx='1'
                            transform='rotate(-180 18 13)'
                            fill='black'
                          ></rect>
                          <path
                            d='M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z'
                            fill='black'
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </form>

              <div className='row mb-10'></div>
            </div>
          </div>
       
        
        </div>
      </div>
    )
  }
}
export default UpdateAccounting
