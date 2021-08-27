import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname:'',
      lastname:'',
      country:'',
      street_1:'',
      street_2:'',
      usdot_no:'',
      mc_no:'',
      zip:'',
      city:'',
      state:'',
      telephone:'',
      value:'mc',
    }
    this.saveData=this.saveData.bind(this)
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
    this.handleTelephone= this.handleTelephone.bind(this)


  }
  handleMcNumber(event) {
    this.setState({value: event.target.value});
    console.log('MCNumber Number =', event.target.value)

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



  saveData = (e) => {
    
    

    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      city: this.state.city,
      street_1: this.state.street_1,
      street_2: this.state.street_2,
      zip: this.state.zip,
      state:this.state.state,
      country:this.state.country,
      telephone:this.state.telephone,
      usdot_no:this.state.usdot_no,
      // mc_no:this.state.mc_no,

    };
    axios
      .post(`http://localhost:8080/addnewcustomer`, data)
      .then((res) => {
        console.log("RESPONSE = ", res);
        console.log(res.message);
        if (res.data.success) {
          alert("Customer Details Saved");
          this.setState({});
          console.log("data", res.data.message);
        } else {
          //  console.log("else")
          alert(res.data.message);
        }
        //res.sucess=();
      });
  };
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
              <h6 className='text-primary'> hello</h6>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_3'>
              <h6 className='text-primary'> Link 3</h6>
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
<br/>
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

                        <input value={this.state.zip}
                       onChange={this.handleZip} type='text' className='form-control form-control-solid' name='zip' />
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
                      <input value={this.state.state}
                       onChange={this.handleState} type='text' className='form-control form-control-solid' name='state' />
                      <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
                        <span className='svg-icon svg-icon-2hx'></span>
                      </div>
                    </div>
<br/>
                    <div className='fv-plugins-message-container invalid-feedback'></div>
                  </div>
                
                </div>
                
                    <div className='col-md-12 fv-row'>
                    <div className='row fv-row fv-plugins-icon-container'>
                      <div className='col-6'>
                        <label className=' fs-6 fw-bold form-label mb-2'>Street 1</label>

                        <input value={this.state.street_1}
                       onChange={this.handleStreet1} type='text' className='form-control form-control-solid' name='street1' />
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
<br/>
                <div className='col-md-12 fv-row'>
                    <div className='row fv-row fv-plugins-icon-container'>
                      <div className='col-6'>
                        <label className=' fs-6 fw-bold form-label mb-2'>MC Number</label>

                    
                                    <select   
                         onChange={this.handleMcNumber} value={this.state.value} name="mcnumber" className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-hide-search="true"  data-select2-id="select2-data-13-fi4w" tabIndex={-1} aria-hidden="true">
																			<option value="MC">MC</option>
																			<option value="FF">FF</option>
																			<option value="FX">FX</option>
</select> 
                        <div className='fv-plugins-message-container invalid-feedback'></div>
                      </div>

                      <div className='col-6'>
                        <label className='fs-6 fw-bold form-label mb-2'>USDOT Number</label>

                        <input
                       value={this.state.usdot_no}
                         onChange={this.handleUsDot}
                          type='text'
                          maxLength="7"
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
                        <span className='svg-icon svg-icon-3 ms-2 me-0'>
                          
                        </span>
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
          <div className='tab-pane fade' id='kt_tab_pane_2' role='tabpanel'>
            as
          </div>
          <div className='tab-pane fade' id='kt_tab_pane_3' role='tabpanel'>
            Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse
            fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse
            mollit dolore anim cupidatat. eserunt officia id Lorem nostrud aute id commodo elit
            eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur
            in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip
            incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing
            cillum id nulla minim nostrud labore eiusmod et amet.
          </div>
        </div>
      </div>
    )
  }
}
export default UsersList
