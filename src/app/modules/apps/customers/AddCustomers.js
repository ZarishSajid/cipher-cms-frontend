import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import "../index.css"
import { Link } from 'react-router-dom';
class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      country: '',
      street_1: '',
      street_2: '',
      usdot_no: '',
      mc_no: '',
      zip: '',
      city: '',
      state: '',
      telephone: '',
      available_credit: '',
      credit_limit: '',
      payment_terms: '',
      contact_name: '',
      contact_telephone: '',
      contact_extension: '',
      contact_email: '',
      contact_fax: '',
      weight_unit: '',
      temperature_unit: '',
      public_notes: '',
      private_notes: '',
      value: 'mc',
      mcInput:'',
    }
    this.saveData = this.saveData.bind(this)
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleStreet1 = this.handleStreet1.bind(this)
    this.handleStreet2 = this.handleStreet2.bind(this)
    this.handleMcNumber = this.handleMcNumber.bind(this)
    this.handleUsDot = this.handleUsDot.bind(this)
    this.handleZip = this.handleZip.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleTelephone = this.handleTelephone.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
    this.handleCreditLimit = this.handleCreditLimit.bind(this)
    this.handleAvailableCredit = this.handleAvailableCredit.bind(this)
    this.handlePaymentTerms = this.handlePaymentTerms.bind(this)
    this.handleContactName = this.handleContactName.bind(this)
    this.handleContactTelephone = this.handleContactTelephone.bind(this)
    this.handleContactExtension = this.handleContactExtension.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleFax = this.handleFax.bind(this)
    this.handleWeightUnit = this.handleWeightUnit.bind(this)
    this.handleDistanceUnit = this.handleDistanceUnit.bind(this)
    this.handleTemperatureUnit = this.handleTemperatureUnit.bind(this)
    this.handlePublicNotes = this.handlePublicNotes.bind(this)
    this.handlePrivateNotes = this.handlePrivateNotes.bind(this)
    this.handleMcInput=this.handleMcInput.bind(this)
  }

  handlePublicNotes(e) {
    this.setState({
      public_notes: e.target.value,
    })
    console.log('Public Notes =', this.state.public_notes)
  }

  handlePrivateNotes(e) {
    this.setState({
      private_notes: e.target.value,
    })
    console.log('Private Notes =', this.state.private_notes)
  }
  handleTemperatureUnit(event) {
    this.setState({value: event.target.value})
    console.log('Temperature Unit =', event.target.value)
  }
  handleWeightUnit(event) {
    this.setState({value: event.target.value})
    console.log('Weight Unit =', event.target.value)
  }
  handleDistanceUnit(event) {
    this.setState({value: event.target.value})
    console.log('Distance Unit =', event.target.value)
  }

  onValueChange(e) {
    this.setState({
      credit_hold: e.target.value,
    })
    console.log('credit_hold=', e.target.value)
  }

  handleMcNumber(event) {
    this.setState({value: event.target.value})
    console.log('MCNumber Number =', event.target.value)
  }


  handleMcInput(event) {
    this.setState({mcInput: event.target.value})
    console.log('MC Input =', this.state.mcInput)
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

  handleContactName(e) {
    this.setState({
      contact_name: e.target.value,
    })
    console.log('Contact Name =', this.state.contact_name)
  }
  handleFirstName(e) {
    this.setState({
      firstname: e.target.value,
    })
    console.log('First Name =', this.state.firstname)
  }
  handleLastName(e) {
    this.setState({
      lastname: e.target.value,
    })
    console.log('Last Name =', this.state.lastname)
  }
  handleCountry(e) {
    this.setState({
      country: e.target.value,
    })
    console.log('Country =', this.state.country)
  }

  handleStreet1(e) {
    this.setState({
      street_1: e.target.value,
    })
    console.log('Street 1 =', this.state.street_1)
  }

  handleStreet2(e) {
    this.setState({
      street_2: e.target.value,
    })
    console.log('Street 2 =', this.state.street_2)
  }
  handleUsDot(e) {
    this.setState({
      usdot_no: e.target.value,
    })
    console.log('USDOT Number =', this.state.usdot_no)
  }

  handleZip(e) {
    this.setState({
      zip: e.target.value,
    })
    console.log('Zip=', this.state.zip)
  }
  handleCity(e) {
    this.setState({
      city: e.target.value,
    })
    console.log('City =', this.state.city)
  }
  handleState(e) {
    this.setState({
      state: e.target.value,
    })
    console.log('State =', this.state.state)
  }
  handleTelephone(e) {
    this.setState({
      telephone: e.target.value,
    })
    console.log('Phone =', this.state.telephone)
  }
  handleContactExtension(e) {
    this.setState({
      contact_extension: e.target.value,
    })
    console.log('Contact Extension =', this.state.contact_extension)
  }
  handleContactTelephone(e) {
    this.setState({
      contact_telephone: e.target.value,
    })
    console.log('Contact Telephone =', this.state.contact_telephone)
  }
  handleEmail(e) {
    this.setState({
      contact_email: e.target.value,
    })
    console.log('Contact Email=', this.state.contact_email)
  }
  handleFax(e) {
    this.setState({
      contact_fax: e.target.value,
    })
    console.log('Contact Fax=', this.state.contact_fax)
  }

  saveContactList = (e) => {
    const data = {
      contact_name: this.state.contact_name,
      contact_email: this.state.contact_email,
      contact_telephone: this.state.contact_telephone,
      contact_fax: this.state.contact_fax,
      contact_extension: this.state.contact_extension,
    }
    axios.post(`http://localhost:8080/addnewcustomer`, data).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        alert('Customer Details Saved')
        console.log('data', res.data.message)
        localStorage.setItem('id', res.data)
      } else {
        alert(res.data.message)
      }
    })
  }
  saveData = (e) => {

   

    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      city: this.state.city,
      street_1: this.state.street_1,
      street_2: this.state.street_2,
      zip: this.state.zip,
      state: this.state.state,
      country: this.state.country,
      telephone: this.state.telephone,
      usdot_no: this.state.usdot_no,
      mc_no:this.state.mc_no,
      mcInput:this.state.mcInput
    }
    axios.post(`http://localhost:8080/addnewcustomer`, data).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        alert('Customer Details Saved')
        console.log('data', res.data.message)
        localStorage.setItem('id', res.data)
      } else {
        alert(res.data.message)
      }
    })
  }
  render() {
    return (
      <div>
        <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
          <li className='nav-item'>
            <a className='nav-link active' data-bs-toggle='tab' href='#kt_tab_pane_1'>
              <h6 className='text-primary'> Customer Details</h6>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_2'>
              <h6 className='text-primary'> Accounting</h6>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_3'>
              <h6 className='text-primary'> Contact Contact Details</h6>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_4'>
              <h6 className='text-primary'> Customize Units</h6>
            </a>
          </li>
        </ul>
        <div className='tab-content' id='myTabContent'>
          <div
            className=' card card-custom tab-pane fade active show'
            id='kt_tab_pane_1'
            role='tabpanel'
          >
            <div className='w-100'>
              <form
                className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate={true}
                id='kt_create_account_form'
              >
                <div data-kt-stepper-element='content' className='completed'></div>

                <div data-kt-stepper-element='content' className='completed'>
                  <div className='w-100' data-select2-id='select2-data-77-feqh'>
                    <div className='pb-10 pb-lg-12'>
                      <h2 className='fw-bolder text-dark'>Customer Details</h2>
                    </div>

                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label required'>First Name</label>

                      <input
                        value={this.state.firstname}
                        onChange={this.handleFirstName}
                        name='business_name'
                        className='form-control form-control-lg form-control-solid'
                      />

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label required'>Last Name</label>

                      <input
                        value={this.state.lastname}
                        onChange={this.handleLastName}
                        name='lastname'
                        className='form-control form-control-lg form-control-solid'
                      />

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-0 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='fs-6 fw-bold form-label required'>Telephone</label>
                      <input
                        value={this.state.telephone}
                        onChange={this.handleTelephone}
                        type='number'
                        name='telephone'
                        className='form-control form-control-lg form-control-solid'
                      />
                      <br />
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-0 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='fs-6 fw-bold form-label required'>Country</label>
                      <input
                        value={this.state.country}
                        onChange={this.handleCountry}
                        type='text'
                        name='country'
                        className='form-control form-control-lg form-control-solid'
                      />

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <br />
                    <div className='row mb-10'>
                      <div className='col-md-8 fv-row'>
                        <div className='row fv-row fv-plugins-icon-container'>
                          <div className='col-6'>
                            <label className=' fs-6 fw-bold form-label mb-2'>Zip</label>

                            <input
                              value={this.state.zip}
                              onChange={this.handleZip}
                              type='text'
                              className='form-control form-control-solid'
                              name='zip'
                            />
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>

                          <div className='col-6'>
                            <label className='fs-6 fw-bold form-label mb-2'>City</label>

                            <input
                              type='text'
                              className='form-control form-control-solid'
                              name='city'
                              value={this.state.city}
                              onChange={this.handleCity}
                            />
                            <span
                              className='select2 select2-container select2-container--bootstrap5'
                              dir='ltr'
                              data-select2-id='select2-data-17-0og1'
                              style={{width: '100%'}}
                            >
                              <span className='dropdown-wrapper' aria-hidden='true'></span>
                            </span>
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-4 fv-row fv-plugins-icon-container'>
                        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                          <span>State</span>
                        </label>
                        <div className='position-relative'>
                          <input
                            value={this.state.state}
                            onChange={this.handleState}
                            type='text'
                            className='form-control form-control-solid'
                            name='state'
                          />
                          <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
                            <span className='svg-icon svg-icon-2hx'></span>
                          </div>
                        </div>
                        <br />
                        <div className='fv-plugins-message-container invalid-feedback'></div>
                      </div>
                    </div>

                    <div className='col-md-12 fv-row'>
                      <div className='row fv-row fv-plugins-icon-container'>
                        <div className='col-6'>
                          <label className=' fs-6 fw-bold form-label mb-2'>Street 1</label>

                          <input
                            value={this.state.street_1}
                            onChange={this.handleStreet1}
                            type='text'
                            className='form-control form-control-solid'
                            name='street1'
                          />
                          <div className='fv-plugins-message-container invalid-feedback'></div>
                        </div>

                        <div className='col-6'>
                          <label className='fs-6 fw-bold form-label mb-2'>Street 2</label>

                          <input
                            value={this.state.street_2}
                            onChange={this.handleStreet2}
                            type='text'
                            className='form-control form-control-solid'
                            name='street2'
                          />
                          <span
                            className='select2 select2-container select2-container--bootstrap5'
                            dir='ltr'
                            data-select2-id='select2-data-17-0og1'
                            style={{width: '100%'}}
                          >
                            <span className='dropdown-wrapper' aria-hidden='true'></span>
                          </span>
                          <div className='fv-plugins-message-container invalid-feedback'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className='col-md-12 fv-row'>
                  <div className='row fv-row fv-plugins-icon-container'>
                    <div className='col-6'>
                      <label className=' fs-6 fw-bold form-label mb-2'>MC Number</label>

                      <div className='input-group mb-3'>
                        <div className='input-group-prepend'>
                          <select
                            onChange={this.handleMcNumber}
                            value={this.state.value}
                            name='mc_no'
                            className='form-select form-select-solid select2-hidden-accessible'
                            data-control='select2'
                            data-hide-search='true'
                            data-select2-id='select2-data-13-fi4w'
                            tabIndex={-1}
                            aria-hidden='true'
                          >
                            <option value='MC'>MC</option>
                            <option value='FF'>FF</option>
                            <option value='FX'>FX</option>
                          </select>{' '}
                        </div>
                        <input
                          value={this.state.mcInput}
                          onChange={this.handleMcInput}
                          type='text'
                          className='form-control form-control-solid'
                          name='mcInput'
                        />
                      </div>
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>

                    <div className='col-6'>
                      <label className='fs-6 fw-bold form-label mb-2'>USDOT Number</label>

                      <input
                        value={this.state.usdot_no}
                        onChange={this.handleUsDot}
                        type='text'
                        maxLength='7'
                        className='form-control form-control-solid'
                        name='usdot'
                      />
                      <span
                        className='select2 select2-container select2-container--bootstrap5'
                        dir='ltr'
                        data-select2-id='select2-data-17-0og1'
                        style={{width: '100%'}}
                      >
                        <span className='dropdown-wrapper' aria-hidden='true'></span>
                      </span>
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                  </div>
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
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
                  </div>

                  <div>
                    <button
                      onClick={() => this.saveData()}
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

          {/* /card 2 */}
          <div
            className='tab-pane fade card card-custom tab-pane fade active show'
            id='kt_tab_pane_2'
            role='tabpanel'
          >
            <div className='w-100'>
              <form
                className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate={true}
                id='kt_create_account_form'
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
                        type='number'
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
                      type='number'
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
                  </div>

                  <div>
                    <button
                      onClick={() => this.saveData()}
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
          {/* card 3 */}
          <div
            className='tab-pane fade card card-custom tab-pane fade active show'
            id='kt_tab_pane_3'
            role='tabpanel'
          >
            <div className='w-100'>
              <form
                className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate={true}
                id='kt_create_account_form'
              >
              <button component={Link} to="#kt_tab_pane_3"
                          type='button'
                          className='btn btn-primary add-contact'
                        >
                          <span className='svg-icon svg-icon-2'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              xmlnsXlink='http://www.w3.org/1999/xlink'
                              width='24px'
                              height='24px'
                              viewBox='0 0 24 24'
                              version='1.1'
                            >
                              <rect fill='#000000' x='4' y='11' width='16' height='2' rx='1'></rect>
                              <rect
                                fill='#000000'
                                opacity='0.5'
                                transform='translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000)'
                                x='4'
                                y='11'
                                width='16'
                                height='2'
                                rx='1'
                              ></rect>
                            </svg>
                          </span>
                          Add another contact
                        </button>
                <div data-kt-stepper-element='content' className='completed'></div>

                <div data-kt-stepper-element='content' className='completed'>
                  <div className='w-100' data-select2-id='select2-data-77-feqh'>
                  
                    <div className='pb-10 pb-lg-12'>
                      <h2 className='fw-bolder text-dark'>Customer Contact List</h2>
                      
                    </div>


                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label '>Name</label>

                      <input
                        type='text'
                        value={this.state.contact_name}
                        onChange={this.handleContactName}
                        name='contact_name'
                        className='form-control form-control-lg form-control-solid'
                      />

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <br />
                    <div className='row fv-row fv-plugins-icon-container'>
                      <div className='col-6'>
                        <label className=' fs-6 fw-bold form-label mb-2'>Telephone</label>

                        <input
                          value={this.state.contact_telephone}
                          onChange={this.handleContactTelephone}
                          type='number'
                          className='form-control form-control-solid'
                          name='contact_telephone'
                        />
                        <div className='fv-plugins-message-container invalid-feedback'></div>
                      </div>

                      <div className='col-6'>
                        <label className='fs-6 fw-bold form-label mb-2'>Ext</label>

                        <input
                          value={this.state.contact_extension}
                          onChange={this.handleContactExtension}
                          type='number'
                          className='form-control form-control-solid'
                          name='contact_extension'
                        />
                        <span
                          className='select2 select2-container select2-container--bootstrap5'
                          dir='ltr'
                          data-select2-id='select2-data-17-0og1'
                          style={{width: '100%'}}
                        >
                          <span className='dropdown-wrapper' aria-hidden='true'></span>
                        </span>
                        <div className='fv-plugins-message-container invalid-feedback'></div>
                      </div>
                    </div>
                    <br />
                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label '>Email</label>

                      <input
                        value={this.state.contact_email}
                        onChange={this.handleEmail}
                        name='contact_email'
                        className='form-control form-control-lg form-control-solid'
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                  <label className='form-label '>Fax</label>
                </div>
                <div className='input-group'>
                  <input
                    type='text'
                    value={this.state.contact_fax}
                    onChange={this.handleFax}
                    name='contact_fax'
                    className='form-control form-control-lg form-control-solid'
                  />{' '}
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
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
                  </div>

                  <div>
                    <button
                      onClick={() => this.saveContactList()}
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

          {/* card 4 */}
          <div
            className=' card card-custom tab-pane fade active show'
            id='kt_tab_pane_4'
            role='tabpanel'
          >
            <div className='w-100'>
              <form
                className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate={true}
                id='kt_create_account_form'
              >
                <div data-kt-stepper-element='content' className='completed'></div>

                <div data-kt-stepper-element='content' className='completed'>
                  <div className='w-100' data-select2-id='select2-data-77-feqh'>
                    <div className='pb-10 pb-lg-12'>
                      <h2 className='fw-bolder text-dark'>Customize Units of Measurement</h2>
                    </div>
                  </div>
                </div>
                <br />
                <div className='col-md-12 fv-row'>
                  <div className='row fv-row fv-plugins-icon-container'>
                    <div className='col-12'>
                      <label className=' fs-6 fw-bold form-label mb-2'>Weight Unit</label>

                      <select
                        onChange={this.handleWeightUnit}
                        value={this.state.value}
                        name='weight_unit'
                        className='form-select form-select-solid select2-hidden-accessible'
                        data-control='select2'
                        data-hide-search='true'
                        data-select2-id='select2-data-13-fi4w'
                        tabIndex={-1}
                        aria-hidden='true'
                      >
                        <option value='Pounds'>Pounds</option>
                        <option value='Kilogram'>Kilogram</option>
                        <option value='Use my company default setting'>
                          Use my company's default setting
                        </option>
                      </select>
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>

                    <div className='col-12'>
                      <br />
                      <label className=' fs-6 fw-bold form-label mb-2'>Distance Unit</label>

                      <select
                        onChange={this.handleDistanceUnit}
                        value={this.state.value}
                        name='distance_unit'
                        className='form-select form-select-solid select2-hidden-accessible'
                        data-control='select2'
                        data-hide-search='true'
                        data-select2-id='select2-data-13-fi4w'
                        tabIndex={-1}
                        aria-hidden='true'
                      >
                        <option value='Use my company default setting'>
                          Use my company's default setting
                        </option>
                        <option value='Kilogram'>Kilogram</option>
                        <option value='Miles'>Miles</option>
                      </select>
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>

                    <div className='col-12'>
                      <br />
                      <label className=' fs-6 fw-bold form-label mb-2'>Temperature Unit</label>

                      <select
                        onChange={this.handleTemperatureUnit}
                        value={this.state.value}
                        name='temperature_unit'
                        className='form-select form-select-solid select2-hidden-accessible'
                        data-control='select2'
                        data-hide-search='true'
                        data-select2-id='select2-data-13-fi4w'
                        tabIndex={-1}
                        aria-hidden='true'
                      >
                        <option value='Farheneit'>Farhreneit</option>
                        <option value='Celsius'>Celsius</option>
                        <option value='Use my company default setting'>
                          Use my company's default setting
                        </option>
                      </select>
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <br />

                      <label className='form-label'>Private Notes</label>

                      <textarea
                        value={this.state.private_notes}
                        onChange={this.handlePrivateNotes}
                        name='private_notes'
                        className='form-control form-control-lg form-control-solid'
                        rows={3}
                        spellCheck={false}
                      ></textarea>

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                      <div className='form-text'>
                        This note is private and viewable only by your organization.
                      </div>
                    </div>
                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label'>Public Notes</label>

                      <textarea
                        value={this.state.public_notes}
                        onChange={this.handlePublicNotes}
                        name='public_notes'
                        className='form-control form-control-lg form-control-solid'
                        rows={3}
                        spellCheck={false}
                      ></textarea>

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                      <div className='form-text'>
                        This note used to add customer specific notes to the load notes on your load
                        documents when this customer is added to a load.
                      </div>
                    </div>
                  </div>
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
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
                  </div>

                  <div>
                    <button
                      onClick={() => this.saveData()}
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
export default UsersList
