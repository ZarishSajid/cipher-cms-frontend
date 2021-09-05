import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import '../index.css'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';

class UpdateCustomizeUnit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
   distance_unit:'',
      weight_unit: '',
      temperature_unit: '',
      public_notes: '',
      private_notes: '',
      fireRedirect: false,
      redirectRoute: "",
      
    }
    this.saveCustomizeUnit=this.saveCustomizeUnit.bind(this)
    this.handleWeightUnit = this.handleWeightUnit.bind(this)
    this.handleDistanceUnit = this.handleDistanceUnit.bind(this)
    this.handleTemperatureUnit = this.handleTemperatureUnit.bind(this)
    this.handlePublicNotes = this.handlePublicNotes.bind(this)
    this.handlePrivateNotes = this.handlePrivateNotes.bind(this)
  }
  componentDidMount() {
    const userData =this.props.location.aboutProps && this.props.location.aboutProps.userData;
  console.log("user data from view table in update customize  page",userData)
    this.setState({
      
      weight_unit: userData && userData._id
      ? userData.weight_unit
      : this.state.weight_unit,
      distance_unit: userData && userData._id
      ? userData.distance_unit
      : this.state.distance_unit,
      temperature_unit: userData && userData._id
      ? userData.temperature_unit
      : this.state.temperature_unit,
      public_notes: userData && userData._id
      ? userData.public_notes
      : this.state.public_notes,
      private_notes: userData && userData._id
      ? userData.private_notes
      : this.state.private_notes,

    
    })
  }

  handlePublicNotes(e) {
    this.setState({
      public_notes: e.target.value.toUpperCase(),
    })
    console.log('Public Notes =', this.state.public_notes)
  }

  handlePrivateNotes(e) {
    this.setState({
      private_notes: e.target.value.toUpperCase(),
    })
    console.log('Private Notes =', this.state.private_notes)
  }
  handleTemperatureUnit(event) {
    this.setState({temperature_unit: event.target.value})
    console.log('Temperature Unit =', event.target.value)
  }
  handleWeightUnit(event) {
    this.setState({weight_unit: event.target.value})
    console.log('Weight Unit =', event.target.value)
  }
  handleDistanceUnit(event) {
    this.setState({distance_unit: event.target.value})
    console.log('Distance Unit =', event.target.value)
  }

  saveCustomizeUnit = (e) => {
    const userData =this.props.location.aboutProps && this.props.location.aboutProps.userData;
    var id = localStorage.getItem('id')
    console.log(id, 'id inside save accounting details')
    const data = {
      public_notes: this.state.public_notes,
      private_notes: this.state.private_notes,
      weight_unit: this.state.weight_unit,
      distance_unit: this.state.distance_unit,
      temperature_unit: this.state.temperature_unit,
    }
    axios.put(` http://localhost:8080/api/update_customer_unit/${id}`, data).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        swal({
          text: " New Customer Added Sucessfully!",
          icon: "success",
        });
        console.log('data', res.data.message)
        this.props.history.push({ 
          pathname: '/apps/customers/UpdateCustomers',
          aboutProps:{userData}});

        console.log('data', res.data.message)
      } else {
        alert(res.data.message)
      }
    })
  }

  render() {
    const userData =
    this.props.location &&
    this.props.location.aboutProps &&
    this.props.location.aboutProps.userData;
    
const {stateList}=this.state
    return (
      <div>
        <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
          <li className='nav-item'>
            <a className='nav-link ' >
            <Link to={{pathname:'/apps/customers/UpdateCustomers',  aboutProps: { userData}}}><h6 className='text-primary'> Customer Details</h6></Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'  >
             <Link to={{pathname:'/apps/customers/UpdateAccounting',  aboutProps: { userData}}} ><h6 className='text-primary'> Accounting</h6></Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'  >
            <Link to={{pathname:'/apps/customers/UpdateCustomerContact',  aboutProps: { userData}}}><h6 className='text-primary'> Contact Contact Details</h6></Link>
            </a>
          </li>
          <li className='nav-item active'>
            <a className='nav-link' >
             <Link to={{pathname:'/apps/customers/UpdateCustomizeUnit',  aboutProps: { userData}}}> <h6 className='text-primary'> Customize Units</h6></Link>
            </a>
          </li>
        </ul>

        <div >
          
        
          {/* card 4 */}
          <div
            className=' card '
            
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
                        type='text'
                        onChange={this.handleWeightUnit}
                        value={this.state.weight_unit}
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
                        type='text'
                        onChange={this.handleDistanceUnit}
                        value={this.state.distance_unit}
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
                        type='text'
                        onChange={this.handleTemperatureUnit}
                        value={this.state.temperature_unit}
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
                        type='text'
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
                        type='text'
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
                  <Link to='/apps/customers/UpdateCustomerContact'>  <button
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
                      onClick={() => this.saveCustomizeUnit()}
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
export default UpdateCustomizeUnit
