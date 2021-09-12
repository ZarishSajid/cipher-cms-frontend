import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import '../index.css'
import {Link} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import swal from 'sweetalert';

class CustomerContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contact_name: '',
      contact_telephone: '',
      contact_extension: '',
      contact_email: '',
      contact_fax: '',
      fireRedirect: false,
      redirectRoute: '',
    }
    this.saveContactList = this.saveContactList.bind(this)
    this.addContact = this.addContact.bind(this)
    this.handleContactTelephone = this.handleContactTelephone.bind(this)
    this.handleContactExtension = this.handleContactExtension.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleFax = this.handleFax.bind(this)
    this.handleContactName = this.handleContactName.bind(this)
  }
componentDidMount(){
  this.setState({
    contact_name:sessionStorage.getItem('contact_name'),
    contact_email:sessionStorage.getItem('contact_email'),
    contact_telephone:sessionStorage.getItem('contact_telephone'),
    contact_extension:sessionStorage.getItem('contact_extension'),
    contact_fax:sessionStorage.getItem('contact_fax')
    })
  
}
  handleContactExtension(event) {
    this.setState(
      {
        contact_extension:event.target.value.toUpperCase()
      },() => {
        console.log('contact_extension' , event.target.value)
        window.sessionStorage.setItem('contact_extension',this.state.contact_extension);})}
  handleContactTelephone(event) {
    this.setState(
      {
        contact_telephone:event.target.value.toUpperCase()
      },() => {
        console.log('contact_telephone' , event.target.value)
        window.sessionStorage.setItem('contact_telephone',this.state.contact_telephone);})}
  handleEmail(event) {
    this.setState(
      {
        contact_email:event.target.value.toUpperCase()
      },() => {
        console.log('contact_email' , event.target.value)
        window.sessionStorage.setItem('contact_email',this.state.contact_email);})}
  
  handleContactName(event) {
    this.setState(
      {
        contact_name:event.target.value.toUpperCase()
      },() => {
        console.log('contact_name' , event.target.value)
        window.sessionStorage.setItem('contact_name',this.state.contact_name);})}
  handleFax(event) {
    this.setState(
      {
        contact_fax:event.target.value.toUpperCase()
      },() => {
        console.log('contact_fax' , event.target.value)
        window.sessionStorage.setItem('contact_fax',this.state.contact_fax);})}

  addContact(e) {
    this.setState({
      contact_name: '',
      contact_email: '',
      contact_telephone: '',
      contact_fax: '',
      contact_extension: '',
    })
    
    this.props.history.push({ 
      pathname: '/apps/customers/CustomerContact',
     });  }

  saveContactList = (e) => {
    var id = localStorage.getItem('id')
    console.log(id, 'id inside save accounting details')
    const data = {
      contact_name: this.state.contact_name,
      contact_email: this.state.contact_email,
      contact_telephone: this.state.contact_telephone,
      contact_fax: this.state.contact_fax,
      contact_extension: this.state.contact_extension,
    }
    axios.post(`http://localhost:8080/api/add_customer_contact/${id}`, data).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        swal({
          text: "Saved Sucessfully!",
          icon: "success",
          timer: 800,
        
        })
     
      } else {
        swal({
          text: res.data.message,
          icon: "error",
        });    
      }
    })
  }

  saveCustomizeUnit = (e) => {
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
        alert('Customer Details Saved')
        window.location.href = '#kt_tab_pane_1'

        console.log('data', res.data.message)
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
            <a className='nav-link'>
              <Link to='/apps/customers/AddCustomers'>
                {' '}
                <h6 className='text-primary'> Customer Details</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link to='/apps/customers/Accounting'>
                <h6 className='text-primary'> Accounting</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link active'>
              <Link to='/apps/customers/CustomerContact'>
                <h6 className='text-primary'> Contact Contact Details</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link to='/apps/customers/CustomizeUnit'>
                {' '}
                <h6 className='text-primary'> Customize Units</h6>
              </Link>
            </a>
          </li>
        </ul>

        {/* card 3 */}
        <div className=' card'>
          <div className='w-100'>
            <form
              className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
              noValidate={true}
            >
              <div data-kt-stepper-element='content' className='completed'></div>

              <div data-kt-stepper-element='content' className='completed'>
                <div className='w-100' data-select2-id='select2-data-77-feqh'>
                  <div className='pb-10 pb-lg-12'>
                    <br />
                    <h2 className='fw-bolder text-dark'>
                      Customer Contact List
                      <span>
                        <button
                          onClick={() => this.addContact()}
                          type='button'
                          className='btn btn-lg btn-primary me-3 d-inline-block margin-70'
                          data-kt-stepper-action='submit'
                        >
                          <span className='indicator-label'>Add New contact</span>
                        </button>
                      </span>
                    </h2>
                  </div>

                  <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                    <label className='form-label text-dark fw-bolder '>Name</label>

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
                      <label className=' form-label text-dark fw-bolder'>Telephone</label>

                      <input
                        value={this.state.contact_telephone}
                        onChange={this.handleContactTelephone}
                        type='number'
                        className='form-control form-control-lg form-control-solid'
                        name='contact_telephone'
                      />
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>

                    <div className='col-6'>
                      <label className='form-label text-dark fw-bolder'>Ext</label>

                      <input
                        value={this.state.contact_extension}
                        onChange={this.handleContactExtension}
                        type='text'
                        className='form-control form-control-lg form-control-solid'
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
                    <br />
                    <label className='form-label text-dark fw-bolder'>Email</label>
                    <input
                      type='email'
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
                <label className='form-label text-dark fw-bolder'>Fax</label>
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
                  <Link to='/apps/customers/Accounting'>
                    {' '}
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

                  <Link to='/apps/customers/CustomizeUnit'>
                    <button
                      type='button'
                      className='btn btn-lg btn-primary me-3 d-inline-block'
                      data-kt-stepper-action='submit'
                    >
                      <span className='indicator-label'>
                        Next
                        <span className='svg-icon svg-icon-3 ms-2 me-0'></span>
                      </span>
                    </button>
                  </Link>
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
    )
  }
}
export default CustomerContact
