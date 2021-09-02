import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import "../index.css"
import { BsTrash} from "react-icons/bs";
import { AiTwotoneEdit
} from "react-icons/ai";
import {Link} from 'react-router-dom'
class UsersList extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
     
      value: '',
      name: '',
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
          window.location.href = '/apps/customers/ViewCustomers'
        }
        console.log(res.message);
      });
  }
  
  render() {
    const {data} =this.state;
    const {open, openActive} = this.state
  const userData =
this.props.location &&
this.props.location.aboutProps &&
this.props.location.aboutProps.userData;
  
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

            </div>
          </div>
         {/* table */}



         <div className="card mb-5 mb-xl-8">
<div className="card-header border-0 pt-5">
  <h3 className="card-title align-items-start flex-column">
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
  <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a user">
											<a href="/apps/customers/AddCustomers" className="btn btn-sm btn-light-primary" data-bs-target="#kt_modal_invite_friends">
											<span className="svg-icon svg-icon-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
													<path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
												</svg>
											</span>
											Add New Customer</a>
										</div>
</div>

<div className="card-body py-3">
  <div className="table-responsive">
    <table className="table align-middle gs-0 gy-4">
      <thead>
        <tr className="fw-bolder text-muted bg-light">
          <th className="min-w-125px"> First Name</th>
          <th className="min-w-125px">Last Name</th>
          <th className="min-w-125px"> Country</th>
          <th className="min-w-200px">City</th>
          <th className="min-w-150px">State</th>
          <th className="min-w-150px">USDOT Number</th>
          <th className="min-w-150px">Docket Number</th>
          <th className="min-w-150px">Postal Code</th>
          <th className="min-w-150px">Actions</th>
          <th className="min-w-200px text-end rounded-end"></th>
        </tr>
      </thead>
      <tbody>
      {data.map((values,index)=>{
              return(
          <tr  key={index}>
          <td>
              <a className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{values.firstname}</a>
          </td>
          <td>
              <a className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{values.lastname}</a>
          </td>
          <td>
              <a  className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{values.country}</a>
          </td>
          <td>
              <a className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{values.city}</a>
          </td>
          <td>
              <a className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{values.state}</a>
          </td>
          <td>
              <a  className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{values.usdot_no}</a>
          </td>
          <td>
              <a  className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{values.docket_number}</a>
          </td>
          <td>
              <a  className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{values.postal_code}</a>
          </td>
          <td>
            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
            <Link to={{
                            pathname: "/apps/customers/UpdateCustomers",
                            aboutProps: { userData: values },
                            
                          }}> <button
    className="btn btn-icon btn-active-light-primary w-30px h-30px"
    data-kt-permissions-table-filter="delete_row"
  >
    <span >
     <AiTwotoneEdit className="edit-icon"
/>
    </span>
  </button>
  </Link>
            </a>
            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
        </div>
      </div>
    )
  }
}
export default UsersList
