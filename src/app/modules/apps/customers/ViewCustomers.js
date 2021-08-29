import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import "../index.css"
import { BsTrash} from "react-icons/bs";

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
      firstname:'',
      lastname:'',
      country:'',
      city:'',
      state:'',
      usdot_no:'',
      docket_number:'',
      available_credit:'',
      data:[],
      isLoading:true ,
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount() {
    this.fetchData();
  }


  fetchData() {
    this.setState({ loading: true });
   
  
   
    const data = {
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      country:this.state.country,
      city:this.state.city,
      state:this.state.state,
      usdot_no:this.state.usdot_no,
      docket_number:this.state.docket_number,
      available_credit:this.state.available_credit
    
      
    };
    axios.get(`http://localhost:8080/api/get_customer_list`,data)
  
    .then((res) => {

      console.log("RESPONSE = ", res.data.data);
    this.setState({ isLoading:false,data:res.data.data });
    console.log("view customer data",this.state.data);
  
  
      console.log(res.message);
     
    });
  }
  
  


  handleChange(event) {
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
    })
    console.log('Image', event.target.value)
  }
  handleBack = () => {
    this.setState({
      //openActive: !this.state.openActive,
      open: !this.state.open,
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const data = {
      username: this.state.username,
      email: this.state.email,
      role: this.state.role,
      image: this.state.image,
    }
    axios.post(`http://localhost:8080/adduser`, data).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        alert('Added Sucessfully')
        window.location.href = '/apps/UserList'
      } else {
        alert(res.data.message)
      }
    })
  }
  onValueChange(e) {
    this.setState({
      role: e.target.value,
    })
    console.log('role =', e.target.value)
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    })
    console.log('username =', this.state.username)
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value,
    })
    console.log('email =', this.state.email)
  }
  deleteCustomer(e, id) {
    e.preventDefault();
    console.log("id inside delete customer");
    axios
      .delete(`http://localhost:8080/api/delete_one_customer/${id}`)

      .then((res) => {
        console.log("RESPONSE = ", res._id);
        alert("Sucesfully Deleted");
        if (res.data.success === true) {
          window.location.reload(false);

        }
        console.log(res.message);
      });
  }
  
  render() {
    const {data} =this.state;

    const {open, openActive} = this.state

    return (
      <div>
        <PageTitle breadcrumbs={[]}>Users List</PageTitle>

        <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
          <div className='toolbar' id='kt_toolbar'>
            <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
              <div
                data-kt-swapper='true'
                data-kt-swapper-mode='prepend'
                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'
              >
                <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1'>
                  Users List
                </h1>
                <span className='h-20px border-gray-200 border-start mx-4'></span>
                <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
                  <li className='breadcrumb-item text-muted'>
                    <a
                      href='/metronic8/demo1/../demo1/index.html'
                      className='text-muted text-hover-primary'
                    >
                      Home
                    </a>
                  </li>
                  <li className='breadcrumb-item'>
                    <span className='bullet bg-gray-200 w-5px h-2px'></span>
                  </li>
                  <li className='breadcrumb-item text-muted'>User Management</li>
                  <li className='breadcrumb-item'>
                    <span className='bullet bg-gray-200 w-5px h-2px'></span>
                  </li>
                  <li className='breadcrumb-item text-muted'>Users</li>
                  <li className='breadcrumb-item'>
                    <span className='bullet bg-gray-200 w-5px h-2px'></span>
                  </li>
                  <li className='breadcrumb-item text-dark'>Users List</li>
                </ul>
              </div>
              <h5>Customer List</h5>

              <div className='d-flex align-items-center py-1'>
                <div className='me-4'>
                  <a
                    href='#'
                    className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                  >
                    <span className='svg-icon svg-icon-5 svg-icon-gray-500 me-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                      >
                        <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                          <rect x='0' y='0' width='24' height='24'></rect>
                          <path
                            d='M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z'
                            fill='#000000'
                          ></path>
                        </g>
                      </svg>
                    </span>
                    Filter
                  </a>
                  <div
                    className='menu menu-sub menu-sub-dropdown w-250px w-md-300px'
                    data-kt-menu='true'
                    id='kt_menu_6122397430c94'
                  >
                    <div className='px-7 py-5'>
                      <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                    </div>

                    <div className='separator border-gray-200'></div>
                    <div className='px-7 py-5'>
                      <div className='mb-10'>
                        <label className='form-label fw-bold'>Status:</label>

                        <div>
                          <select
                            className='form-select form-select-solid select2-hidden-accessible'
                            data-kt-select2='true'
                            data-placeholder='Select option'
                            data-dropdown-parent='#kt_menu_6122397430c94'
                            data-allow-clear='true'
                            data-select2-id='select2-data-7-7f2z'
                            tabIndex={-1}
                            aria-hidden='true'
                          >
                            <option data-select2-id='select2-data-9-dwcf'></option>
                            <option value='1'>Approved</option>
                            <option value='2'>Pending</option>
                            <option value='2'>In Process</option>
                            <option value='2'>Rejected</option>
                          </select>
                          <span
                            className='select2 select2-container select2-container--bootstrap5'
                            dir='ltr'
                            data-select2-id='select2-data-8-3rsu'
                            style={{width: '100%'}}
                          >
                            <span className='selection'>
                              <span
                                className='select2-selection select2-selection--single form-select form-select-solid'
                                role='combobox'
                                aria-haspopup='true'
                                aria-expanded='false'
                                tabIndex={0}
                                aria-disabled='false'
                                aria-labelledby='select2-hmpu-container'
                                aria-controls='select2-hmpu-container'
                              >
                                <span
                                  className='select2-selection__rendered'
                                  id='select2-hmpu-container'
                                  role='textbox'
                                  aria-readonly='true'
                                  title='Select option'
                                >
                                  <span className='select2-selection__placeholder'>
                                    Select option
                                  </span>
                                </span>
                                <span className='select2-selection__arrow' role='presentation'>
                                  <b role='presentation'></b>
                                </span>
                              </span>
                            </span>
                            <span className='dropdown-wrapper' aria-hidden='true'></span>
                          </span>
                        </div>
                      </div>

                      <div className='mb-10'>
                        <label className='form-label fw-bold'>Member Type:</label>

                        <div className='d-flex'>
                          <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                            <input className='form-check-input' type='checkbox' value='1' />
                            <span className='form-check-label'>Author</span>
                          </label>
                          <label className='form-check form-check-sm form-check-custom form-check-solid'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value='2'
                              checked={true}
                            />
                            <span className='form-check-label'>Customer</span>
                          </label>
                        </div>
                      </div>

                      <div className='mb-10'>
                        <label className='form-label fw-bold'>Notifications:</label>

                        <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='notifications'
                            checked={true}
                          />
                          <label className='form-check-label'>Enabled</label>
                        </div>
                      </div>

                      <div className='d-flex justify-content-end'>
                        <button
                          type='reset'
                          className='btn btn-sm btn-light btn-active-light-primary me-2'
                          data-kt-menu-dismiss='true'
                        >
                          Reset
                        </button>
                        <button
                          type='submit'
                          className='btn btn-sm btn-primary'
                          data-kt-menu-dismiss='true'
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href='#'
                  className='btn btn-sm btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_create_app'
                  id='kt_toolbar_primary_button'
                >
                  Create
                </a>
              </div>
            </div>
          </div>
          <div className='post d-flex flex-column-fluid' id='kt_post'>
            <div id='kt_content_container' className='container'>
              <div className='card'>
                <div className='card-header border-0 pt-6'>
                  <div className='card-title'>
                    <span className='svg-icon svg-icon-1 position-absolute ms-6'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                      >
                        <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                          <rect x='0' y='0' width='24' height='24'></rect>
                          <path
                            d='M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z'
                            fill='#000000'
                            fill-rule='nonzero'
                            opacity='0.3'
                          ></path>
                          <path
                            d='M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z'
                            fill='#000000'
                            fill-rule='nonzero'
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <input
                      type='text'
                      data-kt-user-table-filter=' Filter'
                      className='form-control form-control-solid w-250px ps-14'
                      placeholder='Filter the Customer List'
                    />

                    <div className='card-toolbar'>
                      <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
                        <div
                          className='menu menu-sub menu-sub-dropdown w-300px w-md-325px'
                          data-kt-menu='true'
                        >
                          <div className='px-7 py-5'>
                            <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                          </div>
                          <div className='separator border-gray-200'></div>
                          <div className='px-7 py-5' data-kt-user-table-filter='form'>
                            <div className='mb-10'>
                              <label className='form-label fs-6 fw-bold'>Role:</label>
                              <select
                                className='form-select form-select-solid fw-bolder select2-hidden-accessible'
                                data-kt-select2='true'
                                data-placeholder='Select option'
                                data-allow-clear='true'
                                data-kt-user-table-filter='role'
                                data-hide-search='true'
                                data-select2-id='select2-data-10-8kvy'
                                tabIndex={-1}
                                aria-hidden='true'
                              >
                                <option data-select2-id='select2-data-12-bpao'></option>
                                <option value='Administrator'>Administrator</option>
                                <option value='Analyst'>Analyst</option>
                                <option value='Developer'>Developer</option>
                                <option value='Support'>Support</option>
                                <option value='Trial'>Trial</option>
                              </select>
                              <span
                                className='select2 select2-container select2-container--bootstrap5'
                                dir='ltr'
                                data-select2-id='select2-data-11-gxjq'
                                style={{width: '100%'}}
                              >
                                <span className='selection'>
                                  <span
                                    className='select2-selection select2-selection--single form-select form-select-solid fw-bolder'
                                    role='combobox'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                    tabIndex={0}
                                    aria-disabled='false'
                                    aria-labelledby='select2-v8jv-container'
                                    aria-controls='select2-v8jv-container'
                                  >
                                    <span
                                      className='select2-selection__rendered'
                                      id='select2-v8jv-container'
                                      role='textbox'
                                      aria-readonly='true'
                                      title='Select option'
                                    >
                                      <span className='select2-selection__placeholder'>
                                        Select option
                                      </span>
                                    </span>
                                    <span className='select2-selection__arrow' role='presentation'>
                                      <b role='presentation'></b>
                                    </span>
                                  </span>
                                </span>
                                <span className='dropdown-wrapper' aria-hidden='true'></span>
                              </span>
                            </div>

                            <div className='mb-10'>
                              <label className='form-label fs-6 fw-bold'>
                                Two Step Verification:
                              </label>
                              <select
                                className='form-select form-select-solid fw-bolder select2-hidden-accessible'
                                data-kt-select2='true'
                                data-placeholder='Select option'
                                data-allow-clear='true'
                                data-kt-user-table-filter='two-step'
                                data-hide-search='true'
                                data-select2-id='select2-data-13-gmte'
                                tabIndex={-1}
                                aria-hidden='true'
                              >
                                <option data-select2-id='select2-data-15-n51p'></option>
                                <option value='Enabled'>Enabled</option>
                              </select>
                              <span
                                className='select2 select2-container select2-container--bootstrap5'
                                dir='ltr'
                                data-select2-id='select2-data-14-tgca'
                                style={{width: '100%'}}
                              >
                                <span className='selection'>
                                  <span
                                    className='select2-selection select2-selection--single form-select form-select-solid fw-bolder'
                                    role='combobox'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                    tabIndex={0}
                                    aria-disabled='false'
                                    aria-labelledby='select2-s4n3-container'
                                    aria-controls='select2-s4n3-container'
                                  >
                                    <span
                                      className='select2-selection__rendered'
                                      id='select2-s4n3-container'
                                      role='textbox'
                                      aria-readonly='true'
                                      title='Select option'
                                    >
                                      <span className='select2-selection__placeholder'>
                                        Select option
                                      </span>
                                    </span>
                                    <span className='select2-selection__arrow' role='presentation'>
                                      <b role='presentation'></b>
                                    </span>
                                  </span>
                                </span>
                                <span className='dropdown-wrapper' aria-hidden='true'></span>
                              </span>
                            </div>

                            <div className='d-flex justify-content-end'>
                              <button
                                type='reset'
                                className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'
                                data-kt-menu-dismiss='true'
                                data-kt-user-table-filter='reset'
                              >
                                Reset
                              </button>
                              <button
                                type='submit'
                                className='btn btn-primary fw-bold px-6'
                                data-kt-menu-dismiss='true'
                                data-kt-user-table-filter='filter'
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          type='button'
                          className='btn btn-primary'
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_add_user'
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
                          Add New Customer
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className='d-flex justify-content-end align-items-center d-none'
                    data-kt-user-table-toolbar='selected'
                  >
                    <div className='fw-bolder me-5'>
                      <span className='me-2' data-kt-user-table-select='selected_count'></span>
                      Selected
                    </div>
                    <button
                      type='button'
                      className='btn btn-danger'
                      data-kt-user-table-select='delete_selected'
                    >
                      Delete Selected
                    </button>
                  </div>
                  <div
                    className='modal fade'
                    id='kt_modal_export_users'
                    tabIndex={-1}
                    aria-hidden='true'
                  >
                    <div className='modal-dialog modal-dialog-centered mw-650px'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h2 className='fw-bolder'>Export Users</h2>

                          <div
                            className='btn btn-icon btn-sm btn-active-icon-primary'
                            data-kt-users-modal-action='close'
                          >
                            <span className='svg-icon svg-icon-1'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                xmlnsXlink='http://www.w3.org/1999/xlink'
                                width='24px'
                                height='24px'
                                viewBox='0 0 24 24'
                                version='1.1'
                              >
                                <g
                                  transform='translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)'
                                  fill='#000000'
                                >
                                  <rect
                                    fill='#000000'
                                    x='0'
                                    y='7'
                                    width='16'
                                    height='2'
                                    rx='1'
                                  ></rect>
                                  <rect
                                    fill='#000000'
                                    opacity='0.5'
                                    transform='translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)'
                                    x='0'
                                    y='7'
                                    width='16'
                                    height='2'
                                    rx='1'
                                  ></rect>
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                          <form
                            id='kt_modal_export_users_form'
                            className='form fv-plugins-bootstrap5 fv-plugins-framework'
                            action='#'
                          >
                            <div className='fv-row mb-10'>
                              <label className='fs-6 fw-bold form-label mb-2'>Select Roles:</label>

                              <select
                                name='role'
                                data-control='select2'
                                data-placeholder='Select a role'
                                data-hide-search='true'
                                className='form-select form-select-solid fw-bolder select2-hidden-accessible'
                                data-select2-id='select2-data-16-n33k'
                                tabIndex={-1}
                                aria-hidden='true'
                              >
                                <option data-select2-id='select2-data-18-iycc'></option>
                                <option value='Administrator'>Administrator</option>
                                <option value='Analyst'>Analyst</option>
                                <option value='Developer'>Developer</option>
                                <option value='Support'>Support</option>
                                <option value='Trial'>Trial</option>
                              </select>
                              <span
                                className='select2 select2-container select2-container--bootstrap5'
                                dir='ltr'
                                data-select2-id='select2-data-17-rbn1'
                                style={{width: '100%'}}
                              >
                                <span className='selection'>
                                  <span
                                    className='select2-selection select2-selection--single form-select form-select-solid fw-bolder'
                                    role='combobox'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                    tabIndex={0}
                                    aria-disabled='false'
                                    aria-labelledby='select2-role-ia-container'
                                    aria-controls='select2-role-ia-container'
                                  >
                                    <span
                                      className='select2-selection__rendered'
                                      id='select2-role-ia-container'
                                      role='textbox'
                                      aria-readonly='true'
                                      title='Select a role'
                                    >
                                      <span className='select2-selection__placeholder'>
                                        Select a role
                                      </span>
                                    </span>
                                    <span className='select2-selection__arrow' role='presentation'>
                                      <b role='presentation'></b>
                                    </span>
                                  </span>
                                </span>
                                <span className='dropdown-wrapper' aria-hidden='true'></span>
                              </span>
                            </div>

                            <div className='fv-row mb-10 fv-plugins-icon-container'>
                              <label className='required fs-6 fw-bold form-label mb-2'>
                                Select Export Format:
                              </label>

                              <select
                                name='format'
                                data-control='select2'
                                data-placeholder='Select a format'
                                data-hide-search='true'
                                className='form-select form-select-solid fw-bolder select2-hidden-accessible'
                                data-select2-id='select2-data-19-4b03'
                                tabIndex={-1}
                                aria-hidden='true'
                              >
                                <option data-select2-id='select2-data-21-t8op'></option>
                                <option value='excel'>Excel</option>
                                <option value='pdf'>PDF</option>
                                <option value='cvs'>CVS</option>
                                <option value='zip'>ZIP</option>
                              </select>
                              <span
                                className='select2 select2-container select2-container--bootstrap5'
                                dir='ltr'
                                data-select2-id='select2-data-20-h1xa'
                                style={{width: '100%'}}
                              >
                                <span className='selection'>
                                  <span
                                    className='select2-selection select2-selection--single form-select form-select-solid fw-bolder'
                                    role='combobox'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                    tabIndex={0}
                                    aria-disabled='false'
                                    aria-labelledby='select2-format-pr-container'
                                    aria-controls='select2-format-pr-container'
                                  >
                                    <span
                                      className='select2-selection__rendered'
                                      id='select2-format-pr-container'
                                      role='textbox'
                                      aria-readonly='true'
                                      title='Select a format'
                                    >
                                      <span className='select2-selection__placeholder'>
                                        Select a format
                                      </span>
                                    </span>
                                    <span className='select2-selection__arrow' role='presentation'>
                                      <b role='presentation'></b>
                                    </span>
                                  </span>
                                </span>
                                <span className='dropdown-wrapper' aria-hidden='true'></span>
                              </span>
                              <div className='fv-plugins-message-container invalid-feedback'></div>
                            </div>

                            <div className='text-center'>
                              <button
                                type='reset'
                                className='btn btn-light me-3'
                                data-kt-users-modal-action='cancel'
                              >
                                Discard
                              </button>
                              <button
                                type='submit'
                                className='btn btn-primary'
                                data-kt-users-modal-action='submit'
                              >
                                <span className='indicator-label'>Submit</span>
                                <span className='indicator-progress'>
                                  Please wait...
                                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                              </button>
                            </div>
                            <div></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className='modal fade'
                    id='kt_modal_add_user'
                    tabIndex={-1}
                    aria-hidden='true'
                  >
                    <div className='modal-dialog modal-dialog-centered mw-650px'>
                      <div className='modal-content'>
                        <div className='modal-header' id='kt_modal_add_user_header'>
                          <h2 className='fw-bolder'>Add User</h2>

                          <div
                            className='btn btn-icon btn-sm btn-active-icon-primary'
                            data-kt-users-modal-action='close'
                          >
                            <span className='svg-icon svg-icon-1'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                xmlnsXlink='http://www.w3.org/1999/xlink'
                                width='24px'
                                height='24px'
                                viewBox='0 0 24 24'
                                version='1.1'
                              >
                                <g
                                  transform='translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)'
                                  fill='#000000'
                                >
                                  <rect
                                    fill='#000000'
                                    x='0'
                                    y='7'
                                    width='16'
                                    height='2'
                                    rx='1'
                                  ></rect>
                                  <rect
                                    fill='#000000'
                                    opacity='0.5'
                                    transform='translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)'
                                    x='0'
                                    y='7'
                                    width='16'
                                    height='2'
                                    rx='1'
                                  ></rect>
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                          <form
                            id='kt_modal_add_user_form'
                            className='form fv-plugins-bootstrap5 fv-plugins-framework'
                            action='#'
                          >
                            <div
                              className='d-flex flex-column scroll-y me-n7 pe-7'
                              id='kt_modal_add_user_scroll'
                              data-kt-scroll='true'
                              data-kt-scroll-activate='{default: false, lg: true}'
                              data-kt-scroll-max-height='auto'
                              data-kt-scroll-dependencies='#kt_modal_add_user_header'
                              data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
                              data-kt-scroll-offset='300px'
                              style={{maxHeight: '83px'}}
                            >
                              <div className='fv-row mb-7'>
                                <label className='d-block fw-bold fs-6 mb-5'>Avatar</label>
                                <img width='100px' height='100px' src={this.state.image} />
                                <br />
                                <br />

                                <input type='file' onChange={this.handleChange} />

                                <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
                              </div>

                              <div className='fv-row mb-7 fv-plugins-icon-container'>
                                <label className='required fw-bold fs-6 mb-2'>Full Name</label>

                                <input
                                  type='text'
                                  name='username'
                                  className='form-control form-control-solid mb-3 mb-lg-0'
                                  placeholder='Full name'
                                  value={this.state.username}
                                  onChange={this.handleUsername}
                                />
                                <div className='fv-plugins-message-container invalid-feedback'></div>
                              </div>

                              <div className='fv-row mb-7 fv-plugins-icon-container'>
                                <label className='required fw-bold fs-6 mb-2'>Email</label>

                                <input
                                  type='email'
                                  name='email'
                                  className='form-control form-control-solid mb-3 mb-lg-0'
                                  placeholder='example@domain.com'
                                  value={this.state.email}
                                  onChange={this.handleEmail}
                                />
                                <div className='fv-plugins-message-container invalid-feedback'></div>
                              </div>

                              <div className='mb-7'>
                                <label className='required fw-bold fs-6 mb-5'>Role</label>
                              </div>
                              <div className='d-flex fv-row'>
                                <div className='radio'>
                                  <input
                                    className='form-check-input me-3'
                                    type='radio'
                                    value='Administrator'
                                    checked={this.state.role === 'Administrator'}
                                    onChange={this.onValueChange}
                                  />
                                  <label>Administrator</label>
                                </div>
                              </div>
                              <div className='separator separator-dashed my-5'></div>

                              <div className='radio'>
                                <input
                                  className='form-check-input me-3'
                                  type='radio'
                                  value='Developer'
                                  checked={this.state.role === 'Developer'}
                                  onChange={this.onValueChange}
                                />
                                <label className=' mx-auto'>Developer</label>
                              </div>
                              <div className='separator separator-dashed my-5'></div>

                              <div className='radio'>
                                <input
                                  className='form-check-input me-3'
                                  type='radio'
                                  value='Analyst'
                                  checked={this.state.role === 'Analyst'}
                                  onChange={this.onValueChange}
                                />
                                <label className=' mx-auto'>Analyst</label>
                              </div>
                              <div className='separator separator-dashed my-5'></div>

                              <div className='radio'>
                                <input
                                  className='form-check-input me-3'
                                  type='radio'
                                  value='Support'
                                  checked={this.state.role === 'Support'}
                                  onChange={this.onValueChange}
                                />
                                <label className=' mx-auto'>Support</label>
                              </div>
                              <div className='separator separator-dashed my-5'></div>

                              <div className='radio'>
                                <input
                                  className='form-check-input me-3'
                                  type='radio'
                                  value='Trial'
                                  checked={this.state.role === 'Trial'}
                                  onChange={this.onValueChange}
                                />
                                <label className=' mx-auto'>Trial</label>
                              </div>
                            </div>

                            <div className='text-center pt-15'>
                              <button
                                onClick={this.handleBack}
                                type='reset'
                                className='btn btn-light me-3'
                                data-kt-users-modal-action='cancel'
                              >
                                Discard
                              </button>
                              <button
                                onClick={this.handleSubmit}
                                type='submit'
                                className='btn btn-primary'
                                data-kt-users-modal-action='submit'
                              >
                                <span className='indicator-label'>Submit</span>
                                <span className='indicator-progress'>
                                  Please wait...
                                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                              </button>
                            </div>
                            <div></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card-body pt-0'>
                  <div
                    id='kt_table_users_wrapper'
                    className='dataTables_wrapper dt-bootstrap4 no-footer'
                  >
                    <div className='table-responsive'>
                      <table className="table table-row-dashed table-row-gray-300 gy-7">
      <thead>
          <tr className="fw-bolder fs-6 text-gray-800">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>City</th>
              <th>State</th>
              <th>USDOT Number</th>
              <th>Docket Number</th>
              <th>Available Credit</th>
              <th>Actions</th>

          </tr>
      </thead>
      <tbody>
            {data.map((values,index)=>{
              return(
          <tr  key={index}>
              <td>{values.firstname}</td>
              <td>{values.lastname}</td>
              <td>{values.country}</td>
              <td>{values.city}</td>
              <td>{values.state}</td>
              <td>{values.usdot_no}</td>
              <td>{values.docket_number}</td>
              <td>{values.available_credit}</td>
              <td className="text-end">
  <button
    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
    data-bs-toggle="modal"
    data-bs-target="#kt_modal_update_permission"
  >
    <span class="svg-icon svg-icon-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        
      >
        <path
          d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
          fill="black"
        ></path>
        <path
          opacity="0.3"
          d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
          fill="black"
        ></path>
      </svg>
    </span>
  </button>
  <button
   onClick={(e) => this.deleteCustomer(e, values._id)}
    className="btn btn-icon btn-active-light-primary w-30px h-30px"
    data-kt-permissions-table-filter="delete_row"
  >
    <span >
     <BsTrash className="delete-icon"
/>
    </span>
  </button>
  {" "}
</td>

          </tr>
            )
          })}
      </tbody>
      
  </table>
</div>


                    <div className='row'>
                      <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
                      <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
                        <div
                          className='dataTables_paginate paging_simple_numbers'
                          id='kt_table_users_paginate'
                        >
                          <ul className='pagination'>
                            <li
                              className='paginate_button page-item previous disabled'
                              id='kt_table_users_previous'
                            >
                              <a
                                href='#'
                                aria-controls='kt_table_users'
                                data-dt-idx='0'
                                tabIndex={0}
                                className='page-link'
                              >
                                <i className='previous'></i>
                              </a>
                            </li>
                            <li className='paginate_button page-item active'>
                              <a
                                href='#'
                                aria-controls='kt_table_users'
                                data-dt-idx='1'
                                tabIndex={0}
                                className='page-link'
                              >
                                1
                              </a>
                            </li>
                            <li className='paginate_button page-item '>
                              <a
                                href='#'
                                aria-controls='kt_table_users'
                                data-dt-idx='2'
                                tabIndex={0}
                                className='page-link'
                              >
                                2
                              </a>
                            </li>
                            <li className='paginate_button page-item '>
                              <a
                                href='#'
                                aria-controls='kt_table_users'
                                data-dt-idx='3'
                                tabIndex={0}
                                className='page-link'
                              >
                                3
                              </a>
                            </li>
                            <li className='paginate_button page-item next' id='kt_table_users_next'>
                              <a
                                href='#'
                                aria-controls='kt_table_users'
                                data-dt-idx='4'
                                tabIndex={0}
                                className='page-link'
                              >
                                <i className='next'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default UsersList
