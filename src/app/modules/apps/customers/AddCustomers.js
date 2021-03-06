import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import '../index.css'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import validator from 'validator';
import session from 'redux-persist/lib/storage/session'

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
      mcInput: '',
      postal_code: '',
      city: '',
      state: '',
      telephone: '',
      telephone_extension:'',
      value: 'mc',
      email: '',
      mcInput: '',
      distance_unit: '',
      place_name: '',
      customer_type: '',
      stateList: [],
      error:{},
      City: [],
      fireRedirect: false,
      redirectRoute: '',
      image:null
    }
    this.saveData = this.saveData.bind(this)
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleStreet1 = this.handleStreet1.bind(this)
    this.handleStreet2 = this.handleStreet2.bind(this)
    this.handleMcNumber = this.handleMcNumber.bind(this)
    this.handleUsDot = this.handleUsDot.bind(this)
    this.handlePostalCode = this.handlePostalCode.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleTelephone = this.handleTelephone.bind(this)
    this.handleMcInput = this.handleMcInput.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleCustomerType = this.handleCustomerType.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleTelephoneExtension=this.handleTelephoneExtension.bind(this)
  }
 componentDidMount(){
   this.setState({
     email:sessionStorage.getItem('customer_email'),
     street_2:sessionStorage.getItem('customer_street2'),
     street_1:sessionStorage.getItem('customer_street1'),
     country:sessionStorage.getItem('customer_country'),
     customer_type:sessionStorage.getItem('customer_type'),
    firstname:sessionStorage.getItem('customer_firstname'),
    lastname:sessionStorage.getItem('customer_lastname'),
    telephone_extension:sessionStorage.getItem('customer_telephone_extension'),
    telephone:sessionStorage.getItem('customer_telephone_number'),
    postal_code:sessionStorage.getItem('customer_postal_code'),
    usdot_no:sessionStorage.getItem('customer_usdot_no'),
    city:sessionStorage.getItem('customer_city'),
    mcInput:sessionStorage.getItem('customer_mcInput'),
    mc_no:sessionStorage.getItem('customer_mc_no')

   })
 }
  handleChange(event) {
    this.setState({
      files: URL.createObjectURL(event.target.files[0]),
    })
    console.log('filee ************', event.target.value)

    
    // console.log('dataa', data)
    // axios
    //   .post(`http://localhost:8000/post`, data)

    //   .then((res) => {
    //     console.log('RESPONSE = ', res.data.data)
    //     // console.log('City Name = ', res.data.data)
    //     // console.log('State Name = ', res.data.state_name)
    //     // this.setState({isLoading: false, stateList: res.data.data})
    //     // console.log('view state list', this.state.stateList)

        
    //   })

  }
  handleMcNumber(event) {
    this.setState(
      {
        mc_no:event.target.value
      },
      () => {
      window.sessionStorage.setItem("customer_mc_no",this.state.mc_no);
      console.log('MC Number =', event.target.value)

      })
    }  

  handleMcInput(event) {
    this.setState(
      {
        mcInput:event.target.value.toUpperCase()
      },
      () => {
        console.log('MC input =', this.state.mcInput)

      window.sessionStorage.setItem("customer_mcInput",this.state.mcInput);
      })
  }
  
  handleCustomerType(event) {
    this.setState(
      {
        customer_type:event.target.value
      },() => {
        window.sessionStorage.setItem("customer_type",this.state.customer_type);})}

  handleFirstName(event) {
    this.setState(
      {
        firstname:event.target.value.toUpperCase()
      },() => {
        console.log('firstname =', event.target.value)
        window.sessionStorage.setItem("customer_firstname",this.state.firstname);})}
  handleLastName(event) {
    this.setState(
      {
        lastname:event.target.value.toUpperCase()
      },() => {
        console.log('lastname=', event.target.value)
        window.sessionStorage.setItem("customer_lastname",this.state.lastname);})}
  handleCountry(e) {
  this.setState(
    {
      country:e.target.value
    },
    () => {
      console.log('country =', e.target.value)
      window.sessionStorage.setItem("customer_country",this.state.country);
        })
}

  handleEmail(e) {
    this.setState(
      {
        email:e.target.value
      },
      () => {
        window.sessionStorage.setItem('customer_email',this.state.email);

        const regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email.match(regexemail)) {
          // return true; 
          console.log("success")
        } else {
          // return false; 
          console.log("not valid")

        }
          })
    
  console.log('customer email =', this.state.email)
}
  handleStreet1(e) {
    this.setState(
      {
        street_1:e.target.value
      },
      () => {
      window.sessionStorage.setItem("customer_street1",this.state.street_1);
      })
  }

  handleStreet2(e) {
    
    this.setState(
      {
        street_2:e.target.value
      },
      () => {
    
        window.sessionStorage.setItem("customer_street2",this.state.street_2);
          })
  }
  handleUsDot(e) {
    this.setState(
      {
        usdot_no:e.target.value
      },
      () => {
        window.sessionStorage.setItem("customer_usdot_no",this.state.usdot_no);

        console.log("before if in usdot",this.state.usdot_no)
        if((this.state.usdot_no).length == 7){
          console.log("success")
         }
         else{
           console.log("usdot number must be 7 digit")
         }
          })
    // console.log('USDOT Number =', this.state.usdot_no)
  }

  handlePostalCode(event) {
    console.log('Value from postal code:', event.target.value.toUpperCase())

    this.setState(
      {
        postal_code: event.target.value,
      },
      () => {

        console.log('Complete value', this.state.postal_code)
        window.sessionStorage.setItem("customer_postal_code",this.state.postal_code);

        // geoname api start
        const data = {
          postal_code: this.state.postal_code,
          country_code: this.state.country,
        }
        console.log('dataa', data)
        axios
          .post(`http://localhost:8080/api/get_city_state`, data)

          .then((res) => {
            console.log('RESPONSE = ', res.data.data)
            // console.log('City Name = ', res.data.data)
            // console.log('State Name = ', res.data.state_name)
            this.setState({isLoading: false, stateList: res.data.data})
            console.log('view state list', this.state.stateList)

            // this.setState({ City:res.data.data});
            // console.log("City ",this.state.City);

            // console.log(res.message)
          })
      }
    )

    // geonames api calling
  }
  handleCity(event) {
    this.setState(
      {
        city:event.target.value
      },
      () => {
        console.log('city =', this.state.city)
      window.sessionStorage.setItem("customer_city",this.state.city);
      })
  }
  
  handleState(event) {
    this.setState(
      {
        state:event.target.value
      },
      () => {
      window.sessionStorage.setItem("customer_state",this.state.state);
      console.log('State Name =', event.target.value)

      })
  }
  

  
handleTelephoneExtension(event){
  this.setState(
    {
      telephone_extension:event.target.value
    },() => {

      console.log("Telephone extension",this.state.telephone_extension)
      window.sessionStorage.setItem("customer_telephone_extension",this.state.telephone_extension);})}




  handleTelephone(e) {
      this.setState(
        {
          telephone:e.target.value
        },
        () => {
          window.sessionStorage.setItem("customer_telephone_number",this.state.telephone);

          const regexphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
          if (this.state.telephone.match(regexphone)) {
            // return true; 
            console.log("success")
          } else {
            // return false; 
            console.log("not valid")

          }
            })
      
    console.log('Phone =', this.state.telephone)
  }

  saveData = (e) => {
    console.log("inside save data")

    if((this.state.firstname==null || this.state.firstname=='' )||(this.state.lastname==null || this.state.lastname=='') ||(this.state.country==null || this.state.country=='')||(this.state.state==null || this.state.state=='')||(this.state.street_1==null || this.state.street_1=='')||(this.state.street_2==null || this.state.street_2=='')||(this.state.usdot_no==null || this.state.usdot_no=='')||(this.state.mcInput==null || this.state.mcInput=='')||(this.state.postal_code==null || this.state.postal_code=='')||(this.state.city==null || this.state.city=='')||(this.state.telephone==null || this.state.telephone=='')||(this.state.email==null || this.state.email=='')||(this.state.mc_no==null || this.state.mc_no=='')){
 alert("Required fields")
    }
    else{
      alert("Success")
    }

    

    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      city: this.state.city,
      street_1: this.state.street_1,
      street_2: this.state.street_2,
      postal_code: this.state.postal_code,
      state: this.state.state,
      country: this.state.country,
      telephone: this.state.telephone,
      telephone_extension:this.state.telephone_extension,
      usdot_no: this.state.usdot_no,
      mc_no: this.state.mc_no,
      mcInput: this.state.mcInput,
      customer_type: this.state.customer_type,
      email: this.state.email,
    }
    console.log('console befor axios')
    axios.post(`http://localhost:8080/api/add_new_customer`, data).then((res) => {
      console.log('RESPONSE = ', res.data.data)
      console.log(res.message)
      if (res.data.success) {
        console.log('data', res.data.message)
        sessionStorage.setItem('customer_id', res.data.data._id)

        swal({
          text: 'Saved Sucessfully!',
          icon: 'success',
          timer: 800,
        })
        this.props.history.push({
          pathname: '/apps/customers/Accounting',
        })
      } else {
        console.log('else response', res)
        swal({
          text: res.data.message,
          icon: 'error',
        })
      }
    })
  }
  fileValidation() {
    var fileInput = document.getElementById('file')

    var filePath = fileInput.value

    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i

    if (!allowedExtensions.exec(filePath)) {
      alert('Invalid file type')
      fileInput.value = ''
      return false
    } else {
      // Image preview
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
          document.getElementById('imagePreview').innerHTML = '<img src="' + e.target.result + '"/>'
        }

        reader.readAsDataURL(fileInput.files[0])
      }
    }
  }
  render() {
    const {stateList} = this.state
   
    return (
      <div>
        <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
          <li className='nav-item'>
            <a className='nav-link active'>
              <Link to='/apps/customers/AddCustomers'>
                {' '}
                <h6 className='text-primary'> Customer Details</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link to={{pathname: '/apps/customers/Accounting'}}>
                <h6 className='text-primary'> Accounting</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
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

        <div>
          <div className=' card '>
            <div className='w-100'>
              <form
              // onSubmit={this.saveData()}
                className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate={true}
              >
                <div data-kt-stepper-element='content' className='completed'></div>

                <div data-kt-stepper-element='content' className='completed'>
                  <div className='w-100' data-select2-id='select2-data-77-feqh'>
                    <div className='pb-10 pb-lg-12'>
                      <h2 className='fw-bolder text-dark'>Customer Details</h2>
                    </div>

                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label required text-dark fw-bolder'>First Name</label>

                      <input
                        value={this.state.firstname}
                        onChange={this.handleFirstName}
                        name='firstname'
                        type="text"
                        className='form-control form-control-lg form-control-solid'
                      />

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label required text-dark fw-bolder'>Last Name</label>

                      <input
                        value={this.state.lastname}
                        onChange={this.handleLastName}
                        name='lastname'
                        className='form-control form-control-lg form-control-solid'
                      />
                      <br />
                      <div className='col-md-12 fv-row'>
                        <div className='row fv-row fv-plugins-icon-container'>
                          <div className='col-6'>
                            <label className=' fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                              Email
                            </label>

                            <input
                              value={this.state.email}
                              onChange={this.handleEmail}
                              type='email'
                              className='form-control form-control-lg form-control-solid'
                              name='email'
                            />
                            <div className='fv-plugins-message-container invalid-feedback'>
                              {/* <span
                                style={{
                                  fontWeight: 'bold',
                                  color: 'red',
                                }}
                              >
                                {this.state.emailError}
                              </span> */}
                            </div>
                          </div>

                          <div className='col-6'>
                            <label className='fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                              Customer Type
                            </label>

                            <div className='input-group-prepend'>
                              <select
                                onChange={this.handleCustomerType}
                                value={this.state.customer_type}
                                type='text'
                                className='form-control form-control-solid'
                                className='form-select form-select-solid select2-hidden-accessible'
                                data-control='select2'
                                data-hide-search='true'
                                data-select2-id='select2-data-13-fi4w'
                                tabIndex={-1}
                                aria-hidden='true'
                              >
                                {' '}
                                <option value=''>Select</option>
                                <option value='DISTRIBUTORC'>DISTRIBUTOR</option>
                                <option value='COMMERCE'>COMMERCE</option>
                                <option value='FEDERAL GOVERNMENT'>FEDERAL GOVERNMENT</option>
                                <option value='MANUFACTURER'>MANUFACTURER</option>
                                <option value='MAILING COMPANY'>MAILING COMPANY</option>
                                <option value='STATE GOVERNMENT'>STATE GOVERNMENT</option>
                              </select>
                            </div>
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>
                        </div>
                      </div>
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-0 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <div className='col-md-12 fv-row'>
                        <div className='row fv-row fv-plugins-icon-container'>
                          <div className='col-6'>
                            <label className=' fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                              EXT
                            </label>

                            <select
                           onChange={this.handleTelephoneExtension}
                           value={this.state.telephone_extension}
                           type='text'
                                className='form-control form-control-solid'
                                className='form-select form-select-solid select2-hidden-accessible'
                                data-control='select2'
                                data-hide-search='true'
                                data-select2-id='select2-data-13-fi4w'
                                tabIndex={-1}
                                aria-hidden='true'
                          >
                            <option data-countryCode='GB' value='44' Selected>
                              UK (+44)
                            </option>
                            <option data-countryCode='US' value='1'>
                              USA (+1)
                            </option>
                            <option data-countryCode='DZ' value='213'>
                              Algeria (+213)
                            </option>
                            <option data-countryCode='AD' value='376'>
                              Andorra (+376)
                            </option>
                            <option data-countryCode='AO' value='244'>
                              Angola (+244)
                            </option>
                            <option data-countryCode='AI' value='1264'>
                              Anguilla (+1264)
                            </option>
                            <option data-countryCode='AG' value='1268'>
                              Antigua &amp; Barbuda (+1268)
                            </option>
                            <option data-countryCode='AR' value='54'>
                              Argentina (+54)
                            </option>
                            <option data-countryCode='AM' value='374'>
                              Armenia (+374)
                            </option>
                            <option data-countryCode='AW' value='297'>
                              Aruba (+297)
                            </option>
                            <option data-countryCode='AU' value='61'>
                              Australia (+61)
                            </option>
                            <option data-countryCode='AT' value='43'>
                              Austria (+43)
                            </option>
                            <option data-countryCode='AZ' value='994'>
                              Azerbaijan (+994)
                            </option>
                            <option data-countryCode='BS' value='1242'>
                              Bahamas (+1242)
                            </option>
                            <option data-countryCode='BH' value='973'>
                              Bahrain (+973)
                            </option>
                            <option data-countryCode='BD' value='880'>
                              Bangladesh (+880)
                            </option>
                            <option data-countryCode='BB' value='1246'>
                              Barbados (+1246)
                            </option>
                            <option data-countryCode='BY' value='375'>
                              Belarus (+375)
                            </option>
                            <option data-countryCode='BE' value='32'>
                              Belgium (+32)
                            </option>
                            <option data-countryCode='BZ' value='501'>
                              Belize (+501)
                            </option>
                            <option data-countryCode='BJ' value='229'>
                              Benin (+229)
                            </option>
                            <option data-countryCode='BM' value='1441'>
                              Bermuda (+1441)
                            </option>
                            <option data-countryCode='BT' value='975'>
                              Bhutan (+975)
                            </option>
                            <option data-countryCode='BO' value='591'>
                              Bolivia (+591)
                            </option>
                            <option data-countryCode='BA' value='387'>
                              Bosnia Herzegovina (+387)
                            </option>
                            <option data-countryCode='BW' value='267'>
                              Botswana (+267)
                            </option>
                            <option data-countryCode='BR' value='55'>
                              Brazil (+55)
                            </option>
                            <option data-countryCode='BN' value='673'>
                              Brunei (+673)
                            </option>
                            <option data-countryCode='BG' value='359'>
                              Bulgaria (+359)
                            </option>
                            <option data-countryCode='BF' value='226'>
                              Burkina Faso (+226)
                            </option>
                            <option data-countryCode='BI' value='257'>
                              Burundi (+257)
                            </option>
                            <option data-countryCode='KH' value='855'>
                              Cambodia (+855)
                            </option>
                            <option data-countryCode='CM' value='237'>
                              Cameroon (+237)
                            </option>
                            <option data-countryCode='CA' value='1'>
                              Canada (+1)
                            </option>
                            <option data-countryCode='CV' value='238'>
                              Cape Verde Islands (+238)
                            </option>
                            <option data-countryCode='KY' value='1345'>
                              Cayman Islands (+1345)
                            </option>
                            <option data-countryCode='CF' value='236'>
                              Central African Republic (+236)
                            </option>
                            <option data-countryCode='CL' value='56'>
                              Chile (+56)
                            </option>
                            <option data-countryCode='CN' value='86'>
                              China (+86)
                            </option>
                            <option data-countryCode='CO' value='57'>
                              Colombia (+57)
                            </option>
                            <option data-countryCode='KM' value='269'>
                              Comoros (+269)
                            </option>
                            <option data-countryCode='CG' value='242'>
                              Congo (+242)
                            </option>
                            <option data-countryCode='CK' value='682'>
                              Cook Islands (+682)
                            </option>
                            <option data-countryCode='CR' value='506'>
                              Costa Rica (+506)
                            </option>
                            <option data-countryCode='HR' value='385'>
                              Croatia (+385)
                            </option>
                            <option data-countryCode='CU' value='53'>
                              Cuba (+53)
                            </option>
                            <option data-countryCode='CY' value='90392'>
                              Cyprus North (+90392)
                            </option>
                            <option data-countryCode='CY' value='357'>
                              Cyprus South (+357)
                            </option>
                            <option data-countryCode='CZ' value='42'>
                              Czech Republic (+42)
                            </option>
                            <option data-countryCode='DK' value='45'>
                              Denmark (+45)
                            </option>
                            <option data-countryCode='DJ' value='253'>
                              Djibouti (+253)
                            </option>
                            <option data-countryCode='DM' value='1809'>
                              Dominica (+1809)
                            </option>
                            <option data-countryCode='DO' value='1809'>
                              Dominican Republic (+1809)
                            </option>
                            <option data-countryCode='EC' value='593'>
                              Ecuador (+593)
                            </option>
                            <option data-countryCode='EG' value='20'>
                              Egypt (+20)
                            </option>
                            <option data-countryCode='SV' value='503'>
                              El Salvador (+503)
                            </option>
                            <option data-countryCode='GQ' value='240'>
                              Equatorial Guinea (+240)
                            </option>
                            <option data-countryCode='ER' value='291'>
                              Eritrea (+291)
                            </option>
                            <option data-countryCode='EE' value='372'>
                              Estonia (+372)
                            </option>
                            <option data-countryCode='ET' value='251'>
                              Ethiopia (+251)
                            </option>
                            <option data-countryCode='FK' value='500'>
                              Falkland Islands (+500)
                            </option>
                            <option data-countryCode='FO' value='298'>
                              Faroe Islands (+298)
                            </option>
                            <option data-countryCode='FJ' value='679'>
                              Fiji (+679)
                            </option>
                            <option data-countryCode='FI' value='358'>
                              Finland (+358)
                            </option>
                            <option data-countryCode='FR' value='33'>
                              France (+33)
                            </option>
                            <option data-countryCode='GF' value='594'>
                              French Guiana (+594)
                            </option>
                            <option data-countryCode='PF' value='689'>
                              French Polynesia (+689)
                            </option>
                            <option data-countryCode='GA' value='241'>
                              Gabon (+241)
                            </option>
                            <option data-countryCode='GM' value='220'>
                              Gambia (+220)
                            </option>
                            <option data-countryCode='GE' value='7880'>
                              Georgia (+7880)
                            </option>
                            <option data-countryCode='DE' value='49'>
                              Germany (+49)
                            </option>
                            <option data-countryCode='GH' value='233'>
                              Ghana (+233)
                            </option>
                            <option data-countryCode='GI' value='350'>
                              Gibraltar (+350)
                            </option>
                            <option data-countryCode='GR' value='30'>
                              Greece (+30)
                            </option>
                            <option data-countryCode='GL' value='299'>
                              Greenland (+299)
                            </option>
                            <option data-countryCode='GD' value='1473'>
                              Grenada (+1473)
                            </option>
                            <option data-countryCode='GP' value='590'>
                              Guadeloupe (+590)
                            </option>
                            <option data-countryCode='GU' value='671'>
                              Guam (+671)
                            </option>
                            <option data-countryCode='GT' value='502'>
                              Guatemala (+502)
                            </option>
                            <option data-countryCode='GN' value='224'>
                              Guinea (+224)
                            </option>
                            <option data-countryCode='GW' value='245'>
                              Guinea - Bissau (+245)
                            </option>
                            <option data-countryCode='GY' value='592'>
                              Guyana (+592)
                            </option>
                            <option data-countryCode='HT' value='509'>
                              Haiti (+509)
                            </option>
                            <option data-countryCode='HN' value='504'>
                              Honduras (+504)
                            </option>
                            <option data-countryCode='HK' value='852'>
                              Hong Kong (+852)
                            </option>
                            <option data-countryCode='HU' value='36'>
                              Hungary (+36)
                            </option>
                            <option data-countryCode='IS' value='354'>
                              Iceland (+354)
                            </option>
                            <option data-countryCode='IN' value='91'>
                              India (+91)
                            </option>
                            <option data-countryCode='ID' value='62'>
                              Indonesia (+62)
                            </option>
                            <option data-countryCode='IR' value='98'>
                              Iran (+98)
                            </option>
                            <option data-countryCode='IQ' value='964'>
                              Iraq (+964)
                            </option>
                            <option data-countryCode='IE' value='353'>
                              Ireland (+353)
                            </option>
                            <option data-countryCode='IL' value='972'>
                              Israel (+972)
                            </option>
                            <option data-countryCode='IT' value='39'>
                              Italy (+39)
                            </option>
                            <option data-countryCode='JM' value='1876'>
                              Jamaica (+1876)
                            </option>
                            <option data-countryCode='JP' value='81'>
                              Japan (+81)
                            </option>
                            <option data-countryCode='JO' value='962'>
                              Jordan (+962)
                            </option>
                            <option data-countryCode='KZ' value='7'>
                              Kazakhstan (+7)
                            </option>
                            <option data-countryCode='KE' value='254'>
                              Kenya (+254)
                            </option>
                            <option data-countryCode='KI' value='686'>
                              Kiribati (+686)
                            </option>
                            <option data-countryCode='KP' value='850'>
                              Korea North (+850)
                            </option>
                            <option data-countryCode='KR' value='82'>
                              Korea South (+82)
                            </option>
                            <option data-countryCode='KW' value='965'>
                              Kuwait (+965)
                            </option>
                            <option data-countryCode='KG' value='996'>
                              Kyrgyzstan (+996)
                            </option>
                            <option data-countryCode='LA' value='856'>
                              Laos (+856)
                            </option>
                            <option data-countryCode='LV' value='371'>
                              Latvia (+371)
                            </option>
                            <option data-countryCode='LB' value='961'>
                              Lebanon (+961)
                            </option>
                            <option data-countryCode='LS' value='266'>
                              Lesotho (+266)
                            </option>
                            <option data-countryCode='LR' value='231'>
                              Liberia (+231)
                            </option>
                            <option data-countryCode='LY' value='218'>
                              Libya (+218)
                            </option>
                            <option data-countryCode='LI' value='417'>
                              Liechtenstein (+417)
                            </option>
                            <option data-countryCode='LT' value='370'>
                              Lithuania (+370)
                            </option>
                            <option data-countryCode='LU' value='352'>
                              Luxembourg (+352)
                            </option>
                            <option data-countryCode='MO' value='853'>
                              Macao (+853)
                            </option>
                            <option data-countryCode='MK' value='389'>
                              Macedonia (+389)
                            </option>
                            <option data-countryCode='MG' value='261'>
                              Madagascar (+261)
                            </option>
                            <option data-countryCode='MW' value='265'>
                              Malawi (+265)
                            </option>
                            <option data-countryCode='MY' value='60'>
                              Malaysia (+60)
                            </option>
                            <option data-countryCode='MV' value='960'>
                              Maldives (+960)
                            </option>
                            <option data-countryCode='ML' value='223'>
                              Mali (+223)
                            </option>
                            <option data-countryCode='MT' value='356'>
                              Malta (+356)
                            </option>
                            <option data-countryCode='MH' value='692'>
                              Marshall Islands (+692)
                            </option>
                            <option data-countryCode='MQ' value='596'>
                              Martinique (+596)
                            </option>
                            <option data-countryCode='MR' value='222'>
                              Mauritania (+222)
                            </option>
                            <option data-countryCode='YT' value='269'>
                              Mayotte (+269)
                            </option>
                            <option data-countryCode='MX' value='52'>
                              Mexico (+52)
                            </option>
                            <option data-countryCode='FM' value='691'>
                              Micronesia (+691)
                            </option>
                            <option data-countryCode='MD' value='373'>
                              Moldova (+373)
                            </option>
                            <option data-countryCode='MC' value='377'>
                              Monaco (+377)
                            </option>
                            <option data-countryCode='MN' value='976'>
                              Mongolia (+976)
                            </option>
                            <option data-countryCode='MS' value='1664'>
                              Montserrat (+1664)
                            </option>
                            <option data-countryCode='MA' value='212'>
                              Morocco (+212)
                            </option>
                            <option data-countryCode='MZ' value='258'>
                              Mozambique (+258)
                            </option>
                            <option data-countryCode='MN' value='95'>
                              Myanmar (+95)
                            </option>
                            <option data-countryCode='NA' value='264'>
                              Namibia (+264)
                            </option>
                            <option data-countryCode='NR' value='674'>
                              Nauru (+674)
                            </option>
                            <option data-countryCode='NP' value='977'>
                              Nepal (+977)
                            </option>
                            <option data-countryCode='NL' value='31'>
                              Netherlands (+31)
                            </option>
                            <option data-countryCode='NC' value='687'>
                              New Caledonia (+687)
                            </option>
                            <option data-countryCode='NZ' value='64'>
                              New Zealand (+64)
                            </option>
                            <option data-countryCode='NI' value='505'>
                              Nicaragua (+505)
                            </option>
                            <option data-countryCode='NE' value='227'>
                              Niger (+227)
                            </option>
                            <option data-countryCode='NG' value='234'>
                              Nigeria (+234)
                            </option>
                            <option data-countryCode='NU' value='683'>
                              Niue (+683)
                            </option>
                            <option data-countryCode='NF' value='672'>
                              Norfolk Islands (+672)
                            </option>
                            <option data-countryCode='NP' value='670'>
                              Northern Marianas (+670)
                            </option>
                            <option data-countryCode='NO' value='47'>
                              Norway (+47)
                            </option>
                            <option data-countryCode='OM' value='968'>
                              Oman (+968)
                            </option>
                            <option data-countryCode='PK' value='92'>
                              Pakistan (+92)
                            </option>
                            <option data-countryCode='PW' value='680'>
                              Palau (+680)
                            </option>
                            <option data-countryCode='PA' value='507'>
                              Panama (+507)
                            </option>
                            <option data-countryCode='PG' value='675'>
                              Papua New Guinea (+675)
                            </option>
                            <option data-countryCode='PY' value='595'>
                              Paraguay (+595)
                            </option>
                            <option data-countryCode='PE' value='51'>
                              Peru (+51)
                            </option>
                            <option data-countryCode='PH' value='63'>
                              Philippines (+63)
                            </option>
                            <option data-countryCode='PL' value='48'>
                              Poland (+48)
                            </option>
                            <option data-countryCode='PT' value='351'>
                              Portugal (+351)
                            </option>
                            <option data-countryCode='PR' value='1787'>
                              Puerto Rico (+1787)
                            </option>
                            <option data-countryCode='QA' value='974'>
                              Qatar (+974)
                            </option>
                            <option data-countryCode='RE' value='262'>
                              Reunion (+262)
                            </option>
                            <option data-countryCode='RO' value='40'>
                              Romania (+40)
                            </option>
                            <option data-countryCode='RU' value='7'>
                              Russia (+7)
                            </option>
                            <option data-countryCode='RW' value='250'>
                              Rwanda (+250)
                            </option>
                            <option data-countryCode='SM' value='378'>
                              San Marino (+378)
                            </option>
                            <option data-countryCode='ST' value='239'>
                              Sao Tome &amp; Principe (+239)
                            </option>
                            <option data-countryCode='SA' value='966'>
                              Saudi Arabia (+966)
                            </option>
                            <option data-countryCode='SN' value='221'>
                              Senegal (+221)
                            </option>
                            <option data-countryCode='CS' value='381'>
                              Serbia (+381)
                            </option>
                            <option data-countryCode='SC' value='248'>
                              Seychelles (+248)
                            </option>
                            <option data-countryCode='SL' value='232'>
                              Sierra Leone (+232)
                            </option>
                            <option data-countryCode='SG' value='65'>
                              Singapore (+65)
                            </option>
                            <option data-countryCode='SK' value='421'>
                              Slovak Republic (+421)
                            </option>
                            <option data-countryCode='SI' value='386'>
                              Slovenia (+386)
                            </option>
                            <option data-countryCode='SB' value='677'>
                              Solomon Islands (+677)
                            </option>
                            <option data-countryCode='SO' value='252'>
                              Somalia (+252)
                            </option>
                            <option data-countryCode='ZA' value='27'>
                              South Africa (+27)
                            </option>
                            <option data-countryCode='ES' value='34'>
                              Spain (+34)
                            </option>
                            <option data-countryCode='LK' value='94'>
                              Sri Lanka (+94)
                            </option>
                            <option data-countryCode='SH' value='290'>
                              St. Helena (+290)
                            </option>
                            <option data-countryCode='KN' value='1869'>
                              St. Kitts (+1869)
                            </option>
                            <option data-countryCode='SC' value='1758'>
                              St. Lucia (+1758)
                            </option>
                            <option data-countryCode='SD' value='249'>
                              Sudan (+249)
                            </option>
                            <option data-countryCode='SR' value='597'>
                              Suriname (+597)
                            </option>
                            <option data-countryCode='SZ' value='268'>
                              Swaziland (+268)
                            </option>
                            <option data-countryCode='SE' value='46'>
                              Sweden (+46)
                            </option>
                            <option data-countryCode='CH' value='41'>
                              Switzerland (+41)
                            </option>
                            <option data-countryCode='SI' value='963'>
                              Syria (+963)
                            </option>
                            <option data-countryCode='TW' value='886'>
                              Taiwan (+886)
                            </option>
                            <option data-countryCode='TJ' value='7'>
                              Tajikstan (+7)
                            </option>
                            <option data-countryCode='TH' value='66'>
                              Thailand (+66)
                            </option>
                            <option data-countryCode='TG' value='228'>
                              Togo (+228)
                            </option>
                            <option data-countryCode='TO' value='676'>
                              Tonga (+676)
                            </option>
                            <option data-countryCode='TT' value='1868'>
                              Trinidad &amp; Tobago (+1868)
                            </option>
                            <option data-countryCode='TN' value='216'>
                              Tunisia (+216)
                            </option>
                            <option data-countryCode='TR' value='90'>
                              Turkey (+90)
                            </option>
                            <option data-countryCode='TM' value='7'>
                              Turkmenistan (+7)
                            </option>
                            <option data-countryCode='TM' value='993'>
                              Turkmenistan (+993)
                            </option>
                            <option data-countryCode='TC' value='1649'>
                              Turks &amp; Caicos Islands (+1649)
                            </option>
                            <option data-countryCode='TV' value='688'>
                              Tuvalu (+688)
                            </option>
                            <option data-countryCode='UG' value='256'>
                              Uganda (+256)
                            </option>
                            <option data-countryCode='GB' value='44'>
                              UK (+44)
                            </option>
                            <option data-countryCode='UA' value='380'>
                              Ukraine (+380)
                            </option>
                            <option data-countryCode='AE' value='971'>
                              United Arab Emirates (+971)
                            </option>
                            <option data-countryCode='UY' value='598'>
                              Uruguay (+598)
                            </option>
                            <option data-countryCode='US' value='1'>
                              USA (+1)
                            </option>
                            <option data-countryCode='UZ' value='7'>
                              Uzbekistan (+7)
                            </option>
                            <option data-countryCode='VU' value='678'>
                              Vanuatu (+678)
                            </option>
                            <option data-countryCode='VA' value='379'>
                              Vatican City (+379)
                            </option>
                            <option data-countryCode='VE' value='58'>
                              Venezuela (+58)
                            </option>
                            <option data-countryCode='VN' value='84'>
                              Vietnam (+84)
                            </option>
                            <option data-countryCode='VG' value='84'>
                              Virgin Islands - British (+1284)
                            </option>
                            <option data-countryCode='VI' value='84'>
                              Virgin Islands - US (+1340)
                            </option>
                            <option data-countryCode='WF' value='681'>
                              Wallis &amp; Futuna (+681)
                            </option>
                            <option data-countryCode='YE' value='969'>
                              Yemen (North)(+969)
                            </option>
                            <option data-countryCode='YE' value='967'>
                              Yemen (South)(+967)
                            </option>
                            <option data-countryCode='ZM' value='260'>
                              Zambia (+260)
                            </option>
                            <option data-countryCode='ZW' value='263'>
                              Zimbabwe (+263)
                            </option>
                          </select>{' '}
                            <div className='fv-plugins-message-container invalid-feedback'>
                              
                            </div>
                          </div>

                          <div className='col-6'>
                            <label className='fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                             Telephone
                            </label>

                            <div className='input-group-prepend'>
                             <input
                        value={this.state.country}
                        onChange={this.handleCountry}
                        type='text'
                        name='country'
                        className='form-control form-control-lg form-control-solid'
                      />
                            </div>
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>
                        </div>
                      </div>                    

                      <br />
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-0 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='fs-6 fw-bold form-label required text-dark fw-bolder'>
                        Country
                      </label>
                      
                      <select
                        onChange={this.handleCountry}
                        value={this.state.country}
                        name='country'
                        className='form-select form-select-solid select2-hidden-accessible'
                        data-control='select2'
                        data-hide-search='true'
                        data-select2-id='select2-data-13-fi4w'
                        tabIndex={-1}
                        aria-hidden='true'
                      >
                        <option value='AF'>Afghanistan</option>
                        <option value='AL'>Albania </option>
                        <option value='DZ'>Algeria</option>
                        <option value='AS'>American Samoa</option>
                        <option value='AD'>Andorra</option>
                        <option value='AO'>Angola</option>
                        <option value='AI'>Anguilla</option>
                        <option value='AQ'>Antarctica</option>
                        <option value='AG'>Antigua and Barbuda</option>
                        <option value='AR'>Argentina</option>
                        <option value='AM'>Armenia</option>
                        <option value='AW'>Aruba</option>
                        <option value='AU'>Australia</option>
                        <option value='AT'>Austria</option>
                        <option value='AZ'>Azerbaijan</option>
                        <option value='BS'>Bahamas</option>
                        <option value='BH'>Bahrain</option>
                        <option value='BD'>Bangladesh</option>
                        <option value='BB'>Barbados</option>
                        <option value='BY'>Belarus</option>
                        <option value='BE'>Belgium</option>
                        <option value='BZ'>Belize</option>
                        <option value='BJ'>Benin</option>
                        <option value='BM'>Bermuda</option>
                        <option value='BT'>Bhutan</option>
                        <option value='BO'>Bolivia</option>
                        <option value='BA'>Bosnia and Herzegowina</option>
                        <option value='BW'>Botswana</option>
                        <option value='BV'>Bouvet Island</option>
                        <option value='BR'>Brazil</option>
                        <option value='IO'>British Indian Ocean Territory</option>
                        <option value='BN'>Brunei Darussalam</option>
                        <option value='BG'>Bulgaria</option>
                        <option value='BF'>Burkina Faso</option>
                        <option value='BI'>Burundi</option>
                        <option value='KH'>Cambodia</option>
                        <option value='CM'>Cameroon</option>
                        <option value='CA'>Canada</option>
                        <option value='CV'>Cape Verde</option>
                        <option value='KY'>Cayman Islands</option>
                        <option value='CF'>Central African Republic</option>
                        <option value='TD'>Chad</option>
                        <option value='CL'>Chile</option>
                        <option value='CN'>China</option>
                        <option value='CX'>Christmas Island</option>
                        <option value='CC'>Cocos (Keeling) Islands</option>
                        <option value='CO'>Colombia</option>
                        <option value='KM'>Comoros</option>
                        <option value='CG'>Congo</option>
                        <option value='CD'>Congo, the Democratic Republic of the</option>
                        <option value='CK'>Cook Islands</option>
                        <option value='CR'>Costa Rica</option>
                        <option value='CI'>Cote d'Ivoire</option>
                        <option value='HR'>Croatia (Hrvatska)</option>
                        <option value='CU'>Cuba</option>
                        <option value='CY'>Cyprus</option>
                        <option value='CZ'>Czech Republic</option>
                        <option value='DK'>Denmark</option>
                        <option value='DJ'>Djibouti</option>
                        <option value='DM'>Dominica</option>
                        <option value='DO'>Dominican Republic</option>
                        <option value='TP'>East Timor</option>
                        <option value='EC'>Ecuador</option>
                        <option value='EG'>Egypt</option>
                        <option value='SV'>El Salvador</option>
                        <option value='GQ'>Equatorial Guinea</option>
                        <option value='ER'>Eritrea</option>
                        <option value='EE'>Estonia</option>
                        <option value='ET'>Ethiopia</option>
                        <option value='FK'>Falkland Islands (Malvinas)</option>
                        <option value='FO'>Faroe Islands</option>
                        <option value='FJ'>Fiji</option>
                        <option value='FI'>Finland</option>
                        <option value='FR'>France</option>
                        <option value='FX'>France, Metropolitan</option>
                        <option value='GF'>French Guiana</option>
                        <option value='PF'>French Polynesia</option>
                        <option value='TF'>French Southern Territories</option>
                        <option value='GA'>Gabon</option>
                        <option value='GM'>Gambia</option>
                        <option value='GE'>Georgia</option>
                        <option value='DE'>Germany</option>
                        <option value='GH'>Ghana</option>
                        <option value='GI'>Gibraltar</option>
                        <option value='GR'>Greece</option>
                        <option value='GL'>Greenland</option>
                        <option value='GD'>Grenada</option>
                        <option value='GP'>Guadeloupe</option>
                        <option value='GU'>Guam</option>
                        <option value='GT'>Guatemala</option>
                        <option value='GN'>Guinea</option>
                        <option value='GW'>Guinea-Bissau</option>
                        <option value='GY'>Guyana</option>
                        <option value='HT'>Haiti</option>
                        <option value='HM'>Heard and Mc Donald Islands</option>
                        <option value='VA'>Holy See (Vatican City State)</option>
                        <option value='HN'>Honduras</option>
                        <option value='HK'>Hong Kong</option>
                        <option value='HU'>Hungary</option>
                        <option value='IS'>Iceland</option>
                        <option value='IN'>India</option>
                        <option value='ID'>Indonesia</option>
                        <option value='IR'>Iran (Islamic Republic of)</option>
                        <option value='IQ'>Iraq</option>
                        <option value='IE'>Ireland</option>
                        <option value='IL'>Israel</option>
                        <option value='IT'>Italy</option>
                        <option value='JM'>Jamaica</option>
                        <option value='JP'>Japan</option>
                        <option value='JO'>Jordan</option>
                        <option value='KZ'>Kazakhstan</option>
                        <option value='KE'>Kenya</option>
                        <option value='KI'>Kiribati</option>
                        <option value='KP'>Korea, Democratic People's Republic of</option>
                        <option value='KR'>Korea, Republic of</option>
                        <option value='KW'>Kuwait</option>
                        <option value='KG'>Kyrgyzstan</option>
                        <option value='LA'>Lao People's Democratic Republic</option>
                        <option value='LV'>Latvia</option>
                        <option value='LB'>Lebanon</option>
                        <option value='LS'>Lesotho</option>
                        <option value='LR'>Liberia</option>
                        <option value='LY'>Libyan Arab Jamahiriya</option>
                        <option value='LI'>Liechtenstein</option>
                        <option value='LT'>Lithuania</option>
                        <option value='LU'>Luxembourg</option>
                        <option value='MO'>Macau</option>
                        <option value='MK'>Macedonia, The Former Yugoslav Republic of</option>
                        <option value='MG'>Madagascar</option>
                        <option value='MW'>Malawi</option>
                        <option value='MY'>Malaysia</option>
                        <option value='MV'>Maldives</option>
                        <option value='ML'>Mali</option>
                        <option value='MT'>Malta</option>
                        <option value='MH'>Marshall Islands</option>
                        <option value='MQ'>Martinique</option>
                        <option value='MR'>Mauritania</option>
                        <option value='MU'>Mauritius</option>
                        <option value='YT'>Mayotte</option>
                        <option value='MX'>Mexico</option>
                        <option value='FM'>Micronesia, Federated States of</option>
                        <option value='MD'>Moldova, Republic of</option>
                        <option value='MC'>Monaco</option>
                        <option value='MN'>Mongolia</option>
                        <option value='MS'>Montserrat</option>
                        <option value='MA'>Morocco</option>
                        <option value='MZ'>Mozambique</option>
                        <option value='MM'>Myanmar</option>
                        <option value='NA'>Namibia</option>
                        <option value='NR'>Nauru</option>
                        <option value='NP'>Nepal</option>
                        <option value='NL'>Netherlands</option>
                        <option value='AN'>Netherlands Antilles</option>
                        <option value='NC'>New Caledonia</option>
                        <option value='NZ'>New Zealand</option>
                        <option value='NI'>Nicaragua</option>
                        <option value='NE'>Niger</option>
                        <option value='NG'>Nigeria</option>
                        <option value='NU'>Niue</option>
                        <option value='NF'>Norfolk Island</option>
                        <option value='MP'>Northern Mariana Islands</option>
                        <option value='NO'>Norway</option>
                        <option value='OM'>Oman</option>
                        <option value='PK'>Pakistan</option>
                        <option value='PW'>Palau</option>
                        <option value='PA'>Panama</option>
                        <option value='PG'>Papua New Guinea</option>
                        <option value='PY'>Paraguay</option>
                        <option value='PE'>Peru</option>
                        <option value='PH'>Philippines</option>
                        <option value='PN'>Pitcairn</option>
                        <option value='PL'>Poland</option>
                        <option value='PT'>Portugal</option>
                        <option value='PR'>Puerto Rico</option>
                        <option value='QA'>Qatar</option>
                        <option value='RE'>Reunion</option>
                        <option value='RO'>Romania</option>
                        <option value='RU'>Russian Federation</option>
                        <option value='RW'>Rwanda</option>
                        <option value='KN'>Saint Kitts and Nevis</option>
                        <option value='LC'>Saint LUCIA</option>
                        <option value='VC'>Saint Vincent and the Grenadines</option>
                        <option value='WS'>Samoa</option>
                        <option value='SM'>San Marino</option>
                        <option value='ST'>Sao Tome and Principe</option>
                        <option value='SA'>Saudi Arabia</option>
                        <option value='SN'>Senegal</option>
                        <option value='SC'>Seychelles</option>
                        <option value='SL'>Sierra Leone</option>
                        <option value='SG'>Singapore</option>
                        <option value='SK'>Slovakia (Slovak Republic)</option>
                        <option value='SI'>Slovenia</option>
                        <option value='SB'>Solomon Islands</option>
                        <option value='SO'>Somalia</option>
                        <option value='ZA'>South Africa</option>
                        <option value='GS'>South Georgia and the South Sandwich Islands</option>
                        <option value='ES'>Spain</option>
                        <option value='LK'>Sri Lanka</option>
                        <option value='SH'>St. Helena</option>
                        <option value='PM'>St. Pierre and Miquelon</option>
                        <option value='SD'>Sudan</option>
                        <option value='SR'>Suriname</option>
                        <option value='SJ'>Svalbard and Jan Mayen Islands</option>
                        <option value='SZ'>Swaziland</option>
                        <option value='SE'>Sweden</option>
                        <option value='CH'>Switzerland</option>
                        <option value='SY'>Syrian Arab Republic</option>
                        <option value='TW'>Taiwan, Province of China</option>
                        <option value='TJ'>Tajikistan</option>
                        <option value='TZ'>Tanzania, United Republic of</option>
                        <option value='TH'>Thailand</option>
                        <option value='TG'>Togo</option>
                        <option value='TK'>Tokelau</option>
                        <option value='TO'>Tonga</option>
                        <option value='TT'>Trinidad and Tobago</option>
                        <option value='TN'>Tunisia</option>
                        <option value='TR'>Turkey</option>
                        <option value='TM'>Turkmenistan</option>
                        <option value='TC'>Turks and Caicos Islands</option>
                        <option value='TV'>Tuvalu</option>
                        <option value='UG'>Uganda</option>
                        <option value='UA'>Ukraine</option>
                        <option value='AE'>United Arab Emirates</option>
                        <option value='GB'>United Kingdom</option>
                        <option value='US'>United States</option>
                        <option value='UM'>United States Minor Outlying Islands</option>
                        <option value='UY'>Uruguay</option>
                        <option value='UZ'>Uzbekistan</option>
                        <option value='VU'>Vanuatu</option>
                        <option value='VE'>Venezuela</option>
                        <option value='VN'>Viet Nam</option>
                        <option value='VG'>Virgin Islands (British)</option>
                        <option value='VI'>Virgin Islands (U.S.)</option>
                        <option value='WF'>Wallis and Futuna Islands</option>
                        <option value='EH'>Western Sahara</option>
                        <option value='YE'>Yemen</option>
                        <option value='YU'>Yugoslavia</option>
                        <option value='ZM'>Zambia</option>
                        <option value='ZW'>Zimbabwe</option>
                      </select>

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <br />
                    <div className='row mb-10'>
                      <div className='col-md-8 fv-row'>
                        <div className='row fv-row fv-plugins-icon-container'>
                          <div className='col-6'>
                            <label className=' fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                              Postal Code
                            </label>

                            <input
                              value={this.state.postal_code}
                              onChange={this.handlePostalCode}
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='postal_code'
                            />
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>

                          <div className='col-6'>
                            <label className=' fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                              City
                            </label>

                            <select
                              type='text'
                              onChange={this.handleCity}
                              value={this.state.city}
                              name='city'
                              className='form-select form-select-solid select2-hidden-accessible'
                              data-control='select2'
                              data-hide-search='true'
                              data-select2-id='select2-data-13-fi4w'
                              tabIndex={-1}
                              aria-hidden='true'
                            >
                              {stateList.map((list) => (
                                <option value={list.admin_name1}>{list.admin_name1}</option>
                              ))}
                            </select>
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>
                        </div>
                      </div>

                      <div className='col-4'>
                        <label className=' fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                          State
                        </label>

                        <select
                          type='text'
                          onChange={this.handleState}
                          value={this.state.state}
                          name='state'
                          className='form-select form-select-solid select2-hidden-accessible'
                          data-control='select2'
                          data-hide-search='true'
                          data-select2-id='select2-data-13-fi4w'
                          tabIndex={-1}
                          aria-hidden='true'
                        >
                          {stateList.map((list) => (
                            <option value={list.place_name}>{list.place_name}</option>
                          ))}
                        </select>
                        <div className='fv-plugins-message-container invalid-feedback'></div>
                      </div>
                    </div>
                    <div className='col-md-12 fv-row'>
                      <div className='row fv-row fv-plugins-icon-container'>
                        <div className='col-6'>
                          <label className=' fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                            Street 1
                          </label>

                          <input
                            value={this.state.street_1}
                            onChange={this.handleStreet1}
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            name='street1'
                          />
                          <div className='fv-plugins-message-container invalid-feedback'></div>
                        </div>

                        <div className='col-6'>
                          <label className='fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                            Street 2
                          </label>

                          <input
                            value={this.state.street_2}
                            onChange={this.handleStreet2}
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            name='street2'
                          />
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
                      <label className=' fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                        MC Number
                      </label>

                      <div className='input-group mb-3'>
                        <div className='input-group-prepend'>
                          <select
                            onChange={this.handleMcNumber}
                            value={this.state.mc_no}
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
                          className='form-control form-control-lg form-control-solid'
                          name='mcInput'
                        />
                      </div>
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>

                    <div className='col-6'>
                      <label className='fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                        USDOT Number
                      </label>

                      <input
                        value={this.state.usdot_no}
                        onChange={this.handleUsDot}
                        type='number'
                        className='form-control form-control-lg form-control-solid'
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
                   


                   

<br/>
<div className='col-12'>
                           <br/>
                        <div className='input-group-prepend'>
                        <input
                              type='file'
                              id='profile_pic'
                              name='profile_pic'
                              accept='.pdf, .jpeg, .png,.docx'
                              className='form-control form-control-lg form-control-solid'
                              onChange={this.handleChange}
                            />
                            <img  style={{ width:"50px",height:"44px",
                        // backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")`
                    }} src={this.state.files} /> 
                        </div>   
                            
                           
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>
                         
                    <div className='col-12'>
                          <br/>
                      <label className='fs-6 fw-bold form-label mb-2 text-dark fw-bolder'>
                        File Type
                      </label>

                      <select
                                onChange={this.handleCustomerType}
                                value={this.state.customer_type}
                                type='text'
                                className='form-control form-control-solid'
                                className='form-select form-select-solid select2-hidden-accessible'
                                data-control='select2'
                                data-hide-search='true'
                                data-select2-id='select2-data-13-fi4w'
                                tabIndex={-1}
                                aria-hidden='true'
                              >
                                {' '}
                                <option value=''>Select</option>
                                <option value='Business License'>Business License</option>
                                <option value='COMMERCE'>Insurance</option>
                                <option value='FEDERAL GOVERNMENT'>FEDERAL GOVERNMENT</option>
                                <option value='MANUFACTURER'>MANUFACTURER</option>
                                <option value='MAILING COMPANY'>MAILING COMPANY</option>
                                <option value='STATE GOVERNMENT'>STATE GOVERNMENT</option>
                              </select>
                   
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                   
                  </div>
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div>
                    <button
                      onClick={() => this.saveData()}
                      type='button'
                      className='btn btn-lg btn-primary me-3 d-inline-block'
                      data-kt-stepper-action='submit'
                    >
                      <span className='indicator-label'>
                        Save All
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
                  <div className='mr-2'>
                    <button
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      Next
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
        </div>
      </div>
    )
  }
}
export default UsersList
