import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import '../index.css'
import {BsTrash} from 'react-icons/bs'
import {AiTwotoneEdit} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {BsUnlockFill} from 'react-icons/bs'
import {BsLockFill} from 'react-icons/bs'
import swal from 'sweetalert'
import {AiOutlineDownload} from 'react-icons/ai'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'
class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      name: '',
      firstname: '',
      lastname: '',
      country: '',
      city: '',
      state: '',
      usdot_no: '',
      docket_number: '',
      available_credit: '',
      data: [],
      isLoading: true,
      reload: false,
    }
    this.refreshPage = this.refreshPage.bind(this)
  }
  refreshPage() {
    console.log('page refresh')
    axios
      .get(`http://localhost:8080/api/get_customer_list`)

      .then((res) => {
        console.log('RESPONSE = ', res.data.data)
        this.setState({isLoading: false, data: res.data.data})
        console.log('view customer data Api', this.state.data)

        console.log(res.message)
      })
  }
  componentDidMount() {
    this.fetchData()
  }
  block(e, id) {
    e.preventDefault()
    axios.put(`http://localhost:8080/api/block_one_customer/${id}`).then((res) => {
      swal({
        text: ' Blocked Sucessfully!',
        icon: 'success',
        timer: 800,
      })
    })
    // data reloading
    this.refreshPage()
  }
  async unblock(e, id) {
    e.preventDefault()
    await axios.put(`http://localhost:8080/api/unblock_one_customer/${id}`).then((res) => {
      swal({
        text: 'UnBlocked Sucessfully!',
        icon: 'success',
        timer: 800,
      })
    })
    // data reloading
    this.refreshPage()
  }

  fetchData() {
    this.setState({loading: true})

    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      country: this.state.country,
      city: this.state.city,
      state: this.state.state,
      usdot_no: this.state.usdot_no,
      docket_number: this.state.docket_number,
      available_credit: this.state.available_credit,
    }
    axios.get(`http://localhost:8080/api/get_customer_list`).then((res) => {
      console.log('RESPONSE = ', res.data.data)
      this.setState({isLoading: false, data: res.data.data})
      console.log('view customer data', this.state.data)

      console.log(res.message)
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
    e.preventDefault()
    console.log('id inside delete customer')

    swal({
      title: 'Are you sure ?',
      text: 'You want to delete this!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:8080/api/delete_one_customer/${id}`).then((res) => {
          console.log('RESPONSE = ', res._id)
          if (res.data.success === true) {
            // window.location.href = '/apps/customers/ViewCustomers'
          }
        })

        swal('Deleted Sucessfully!', {
          icon: 'success',
        })
      } else {
        swal('Not Deleted!')
      }
      this.refreshPage()
    })
  }
  exportPDF() {
    const input = document.getElementById('pdfdiv')
    html2canvas(input).then((canvas) => {
      var imgWidth = 300
      var marginLeft = 20
      var marginTop = 40
      var unit = 'pt'
      var size = 'A4'
      var setFontSize = 15
      var heightLeft = 20
      var imgHeight = (canvas.height * imgWidth) / canvas.width
      var heightLeft = imgHeight
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      var position = 0
      var heightLeft = imgHeight
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
      pdf.save('download.pdf')
    })
  }
  render() {
    const {data} = this.state
    const {open, openActive} = this.state
    const userData =
      this.props.location &&
      this.props.location.aboutProps &&
      this.props.location.aboutProps.userData

    return (
      <div>
        <PageTitle breadcrumbs={[]}>Users List</PageTitle>

        <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
          <div className='toolbar' id='kt_toolbar'>
            <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
              <h5>Customer List</h5>
            </div>
          </div>
          {/* table */}

          <div className='card mb-5 mb-xl-8'>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
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
              </h3>
              <div
                className='card-toolbar'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-trigger='hover'
                title='Click to add a user'
              >
                <a
                  href='/apps/customers/AddCustomers'
                  className='btn btn-sm btn-light-primary'
                  data-bs-target='#kt_modal_invite_friends'
                >
                  <span className='svg-icon svg-icon-3'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      class='mh-50px'
                    >
                      <rect
                        opacity='0.5'
                        x='11.364'
                        y='20.364'
                        width='16'
                        height='2'
                        rx='1'
                        transform='rotate(-90 11.364 20.364)'
                        fill='black'
                      ></rect>
                      <rect x='4.36396' y='11.364' width='16' height='2' rx='1' fill='black'></rect>
                    </svg>
                  </span>
                  Add New Customer
                </a>
              </div>
            </div>

            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table id='pdfdiv' className='table align-middle gs-0 gy-4'>
                  <thead>
                    <tr className='fw-bolder text-muted bg-light'>
                      <th className='min-w-125px'> First Name</th>
                      <th className='min-w-125px'>Last Name</th>
                      <th className='min-w-125px'> Country</th>
                      <th className='min-w-200px'>City</th>
                      <th className='min-w-150px'>State</th>
                      <th className='min-w-150px'>USDOT Number</th>
                      <th className='min-w-150px'>Docket Number</th>
                      <th className='min-w-150px'>Postal Code</th>
                      <th className='min-w-150px'>Status</th>
                      <th className='min-w-200px'>Actions</th>
                      <th className='min-w-200px text-end rounded-end'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((values, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {values.firstname}
                            </a>
                          </td>
                          <td>
                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {values.lastname}
                            </a>
                          </td>
                          <td>
                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {values.country}
                            </a>
                          </td>
                          <td>
                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {values.city}
                            </a>
                          </td>
                          <td>
                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {values.state}
                            </a>
                          </td>
                          <td>
                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {values.usdot_no}
                            </a>
                          </td>
                          <td>
                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {values.docket_number}
                            </a>
                          </td>
                          <td>
                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {values.postal_code}
                            </a>
                          </td>

                          <td>
                            {values.active === true ? (
                              <span class='badge badge-light-success fs-7 fw-bold'>ACTIVE</span>
                            ) : (
                              <span class='badge badge-light-danger fs-7 fw-bold'>DISABLE</span>
                            )}
                          </td>

                          <td>
                            
                            <a
                              href='#'
                              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                            >
                              {values.active ? (
                                <BsUnlockFill
                                  className='unblock-icon'
                                  onClick={(e) => this.block(e, values._id)}
                                ></BsUnlockFill>
                              ) : (
                                <BsLockFill
                                  onClick={(e) => this.unblock(e, values._id)}
                                  className='block-icon'
                                ></BsLockFill>
                              )}
                            </a>


                            
                            
                            <a
                              href='#'
                              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                            >
                              <Link
                                to={{
                                  pathname: '/apps/customers/UpdateCustomers',
                                  aboutProps: {userData: values},
                                }}
                              >
                                <button
                                  className='btn btn-icon btn-active-light-primary w-30px h-30px'
                                  data-kt-permissions-table-filter='edit_row'
                                >
                                  <span>
                                    <AiTwotoneEdit className='edit-icon' />
                                  </span>
                                </button>
                              </Link>
                            </a>                    

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
                            <a
                              href='#'
                              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                            >
                              <button
                               data-toggle="tooltip" data-placement="top" title="download"
                                onClick={(e) => this.deleteCustomer(e, values._id)}
                                className='btn btn-icon btn-active-light-primary w-30px h-30px'
                                data-kt-permissions-table-filter='delete_row'
                              >
                                <span>
                                  <AiOutlineDownload className='delete-icon' />
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
          </div>
          {/* <div>
            <a onClick={() => this.exportPDF()} className='btn btn-xs btn-primary' target='_blank'>
              <i>
                <AiOutlineDownload />
              </i>{' '}
              Download
            </a>
          </div> */}
        </div>
      </div>
    )
  }
}
export default UsersList
