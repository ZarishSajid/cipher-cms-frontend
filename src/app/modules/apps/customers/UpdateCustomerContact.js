import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import '../index.css'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BsTrash} from 'react-icons/bs'
import {Modal, Button} from 'react-bootstrap'

import {AiTwotoneEdit} from 'react-icons/ai'
class UpdateCustomerContact extends React.Component {
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
      data: [],
      id:'',
      isLoading: true,
      isOpen: false,
    }
    this.addContact = this.addContact.bind(this)
    this.handleContactTelephone = this.handleContactTelephone.bind(this)
    this.handleContactExtension = this.handleContactExtension.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleFax = this.handleFax.bind(this)
    this.handleContactName = this.handleContactName.bind(this)
  }
  componentDidMount() {
    const userData = this.props.location.aboutProps && this.props.location.aboutProps.userData
    console.log(
      'user data from view table in update customer contact page',
      userData.customerContact
    )

    this.setState({isLoading: false, data: userData.customerContact})
    this.setState({id:userData._id})

    // console.log('data of update customer contact', this.state.data.length)
  }
  openModal(e, values) {
    const userData = values
    console.log('inside modal method', userData)
    this.setState({
      isOpen: true,
      contact_name: userData && userData._id ? userData.contact_name : this.state.contact_name,
      contact_telephone:
        userData && userData._id ? userData.contact_telephone : this.state.contact_telephone,
      contact_email: userData && userData._id ? userData.contact_email : this.state.contact_email,
      contact_fax: userData && userData._id ? userData.contact_fax : this.state.contact_fax,
      contact_extension:
        userData && userData._id ? userData.contact_extension : this.state.contact_extension,
    })
  }
  closeModal = () => this.setState({isOpen: false})
  saveContactList(e) {
     const userData = this.props.location.aboutProps && this.props.location.aboutProps.userData
    console.log("userr data in modal",this.state.data)

    var id = this.state.data[0].customer_id
    
    console.log(id, 'id inside save contact method')
    const data = {
      contact_name: this.state.contact_name,
      contact_email: this.state.contact_email,
      contact_telephone: this.state.contact_telephone,
      contact_fax: this.state.contact_fax,
      contact_extension: this.state.contact_extension,
    }
    axios.put(`http://localhost:8080/api/update_customer_contact/${id}`, data).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        swal({
          text: ' Updated Sucessfully!',
          icon: 'success',
        })
        console.log('data', res.data.message)
          this.props.history.push({ 
          aboutProps:{userData}});
        //  window.location.href = '/apps/customers/UpdateCustomerContact'
      } else {
        swal({
          text: res.data.message,
          icon: 'error',
        })
      }
    })
  }
  handleContactExtension(e) {
    this.setState({
      contact_extension: e.target.value.toUpperCase(),
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
      contact_email: e.target.value.toUpperCase(),
    })
    console.log('Contact Email=', this.state.contact_email)
  }
  handleContactName(e) {
    this.setState({
      contact_name: e.target.value.toUpperCase(),
    })
    console.log('Contact Name=', this.state.contact_name)
  }
  handleFax(e) {
    this.setState({
      contact_fax: e.target.value.toUpperCase(),
    })
    console.log('Contact Fax=', this.state.contact_fax)
  }

  addContact(e) {
    this.setState({
      contact_name: '',
      contact_email: '',
      contact_telephone: '',
      contact_fax: '',
      contact_extension: '',
    })
    swal({
      text: 'Customer Details Saved!',
      icon: 'success',
    })
    // window.location.reload(false);
  }
  toggle() {
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    const {open, values} = this.state

    const {data} = this.state

    const userData =
      this.props.location &&
      this.props.location.aboutProps &&
      this.props.location.aboutProps.userData

    return (
      <div>
        <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link to={{pathname: '/apps/customers/UpdateCustomers', aboutProps: {userData}}}>
                <h6 className='text-primary'> Customer Details</h6>
              </Link>
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link'>
              <Link to={{pathname: '/apps/customers/UpdateAccounting', aboutProps: {userData}}}>
                <h6 className='text-primary'> Accounting</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link active'>
              <Link
                to={{pathname: '/apps/customers/UpdateCustomerContact', aboutProps: {userData}}}
              >
                <h6 className='text-primary'> Contact Contact Details</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link to={{pathname: '/apps/customers/UpdateCustomizeUnit', aboutProps: {userData}}}>
                {' '}
                <h6 className='text-primary'> Customize Units</h6>
              </Link>
            </a>
          </li>
        </ul>
        <div className=' card card-body py-3'>
          <div className='table-responsive'>
            <table className='table align-middle gs-0 gy-4'>
              <thead>
                <tr className='fw-bolder text-muted bg-light'>
                  <th className='min-w-125px'>Name</th>
                  <th className='min-w-125px'>Telephone</th>
                  <th className='min-w-125px'>Ext</th>
                  <th className='min-w-200px'>Email</th>
                  <th className='min-w-200px'>Fax</th>
                  <th className='min-w-200px'>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((values, index) => {
                  return (
                    <tr key={index}>
                      <td>{values.contact_name}</td>
                      <td>{values.contact_telephone}</td>
                      <td>{values.contact_ext}</td>
                      <td>{values.contact_email}</td>
                      <td>{values.contact_fax}</td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          {/* <Link
                                to={{
                                  pathname: '/apps/customers/AddCustomerContact',
                                  aboutProps: {userData:values},
                                }}
                              > */}
                          <button
                            onClick={(e) => this.openModal(e,values)}
                            className='btn btn-icon btn-active-light-primary w-30px h-30px'
                            data-kt-permissions-table-filter='delete_row'
                          >
                            <span>
                              <AiTwotoneEdit className='edit-icon' />
                            </span>
                          </button>

                          {/* </Link> */}
                        </a>
                        <Modal
                          data-kt-scroll='true'
                          className=' '
                          show={this.state.isOpen}
                          onHide={this.closeModal}
                        >
                          <Modal.Body>
                            <div className='w-100'>
                              <form
                                className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
                                noValidate={true}
                              >
                                <h4 className=' d-flex justify-content-center fw-bolder text-dark'>
                                  Customer Contact List
                                </h4>

                                <div data-kt-stepper-element='content' className='completed'></div>

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
                                <div className='row fv-row fv-plugins-icon-container'>
                                  <div className='col-6'>
                                    <label className=' fs-6 fw-bold form-label mb-2'>
                                      Telephone
                                    </label>

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
                                      type='text'
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
                                <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                                  <br />
                                  <label className='form-label'>Email</label>
                                  <input
                                    type='email'
                                    value={this.state.contact_email}
                                    onChange={this.handleEmail}
                                    name='contact_email'
                                    className='form-control form-control-lg form-control-solid'
                                  />
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
                                    <Link
                                      to={{
                                        pathname: '/apps/customers/UpdateCustomerContact',
                                        aboutProps: {userData},
                                      }}
                                    >
                                      <button
                                        onClick={this.closeModal}
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
                                        Cancel
                                      </button>
                                    </Link>
                                  </div>

                                  <div>
                                    <button
                                      onClick={() => this.saveContactList( values)}
                                      type='button'
                                      className='btn btn-lg btn-primary me-3 d-inline-block'
                                      data-kt-stepper-action='submit'
                                    >
                                      <span className='indicator-label'>
                                        Update
                                        <span className='svg-icon svg-icon-3 ms-2 me-0'></span>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>

                              <div className='row mb-10'></div>
                            </div>
                          </Modal.Body>
                        </Modal>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <button
                            onClick={(e) => this.deleteCustomer(e, values._id)}
                            className='btn btn-icon btn-active-light-primary w-30px h-30px'
                            data-kt-permissions-table-filter='delete_row'
                          >
                            <span>
                              <BsTrash className='delete-icon' />
                            </span>
                          </button>
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* card 3 */}
        {/* <div className=' card'>
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
                    <h2 className='fw-bolder text-dark'>Customer Contact List
                    <span>
                   <button
                    onClick={() => this.addContact()}
                    type='button'
                    className='btn btn-lg btn-primary me-3 d-inline-block margin-70'
                    data-kt-stepper-action='submit'
                  >
                    <span className='indicator-label'>
                      Add New contact
                      
                    </span>
                  </button>
                  
                    </span>
                    </h2>
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
                    <br />
                    <label className='form-label'>Email</label>
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
                  <Link to='/apps/customers/Accounting'>
                    {' '}
                   <Link to="/apps/customers/UpdateAccounting" ><button
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
                  
                  <Link to='/apps/customers/UpdateCustomizeUnit'><button
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
        </div> */}
      </div>
    )
  }
}
export default UpdateCustomerContact
