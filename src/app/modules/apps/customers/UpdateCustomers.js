import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import '../index.css'
import {Link, Redirect} from 'react-router-dom'
import swal from 'sweetalert'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
class UpdateCustomers extends React.Component {
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
      postal_code: '',
      city: '',
      state: '',
      telephone: '',
      value: 'mc',
      mcInput: '',
      place_name: '',
      stateList: [],
      fireRedirect: false,
      redirectRoute: '',
      customerContact: [],
      email: '',
      id: '',
      customer_type: '',
      redirect: false,
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
  }
  componentDidMount() {
    const userData = this.props.location.aboutProps && this.props.location.aboutProps.userData
    console.log('user data in update customer', userData)
    this.setState({
      id: userData._id,
    })
    console.log('id inside componentt did mount ****', userData._id)
    axios.get(`http://localhost:8080/api/get_customer_contacts/${userData._id}`).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        this.setState({
          customerContact: res.data.data,
        })
        console.log(' if res for customer contact', this.state.customerContact)
        userData.customerContact = this.state.customerContact
        console.log(' if res for user data', userData)
      } else {
        console.log(' else response for customer list', res)
      }
    })
    this.setState({
      firstname: userData && userData._id ? userData.firstname : this.state.firstname,
      lastname: userData && userData._id ? userData.lastname : this.state.lastname,
      telephone: userData && userData._id ? userData.telephone : this.state.telephone,
      country: userData && userData._id ? userData.country : this.state.country,
      postal_code: userData && userData._id ? userData.postal_code : this.state.postal_code,
      street_1: userData && userData._id ? userData.street_1 : this.state.street_1,
      street_2: userData && userData._id ? userData.street_2 : this.state.street_2,
      mc_no: userData && userData._id ? userData.mc_no : this.state.mc_no,
      mcInput: userData && userData._id ? userData.mcInput : this.state.mcInput,
      state: userData && userData._id ? userData.state : this.state.state,
      usdot_no: userData && userData._id ? userData.usdot_no : this.state.usdot_no,
      customer_type: userData && userData._id ? userData.customer_type : this.state.customer_type,
      email: userData && userData._id ? userData.email : this.state.email,
      city: userData && userData._id ? userData.city : this.state.city,
      docket_number: userData && userData._id ? userData.docket_number : this.state.docket_number,
    })
    console.log('city from component did mount', this.state.city)
    console.log('state from component did mount', this.state.state)
    console.log(this.state.customer_type, 'customer type  from component did mount')
  }

  handleMcNumber(event) {
    this.setState({mc_no: event.target.value})
    console.log('MCNumber Number =', event.target.value)
  }

  handleMcInput(event) {
    this.setState({docket_number: event.target.value.toUpperCase()})
    console.log('docket =', this.state.docket_number)
  }

  handleFirstName(e) {
    this.setState({
      firstname: e.target.value.toUpperCase(),
    })

    console.log('First Name =', this.state.firstname)
  }
  handleLastName(e) {
    this.setState({
      lastname: e.target.value.toUpperCase(),
    })
    console.log('Last Name =', this.state.lastname)
  }
  handleCountry(e) {
    this.setState({
      country: e.target.value,
    })
    console.log('Country =', e.target.value)
  }

  handleStreet1(e) {
    this.setState({
      street_1: e.target.value.toUpperCase(),
    })
    console.log('Street 1 =', this.state.street_1)
  }

  handleStreet2(e) {
    this.setState({
      street_2: e.target.value.toUpperCase(),
    })
    console.log('Street 2 =', this.state.street_2)
  }
  handleUsDot(e) {
    this.setState({
      usdot_no: e.target.value.toUpperCase(),
    })
    console.log('USDOT Number =', this.state.usdot_no)
  }

  handlePostalCode(event) {
    console.log('Value from postal code:', event.target.value.toUpperCase())

    this.setState(
      {
        postal_code: event.target.value,
      },
      () => {
        console.log('Complete value', this.state.postal_code)

        // geoname api start

        const data = {
          postal_code: this.state.postal_code,
          country_code: this.state.country,
        }
        console.log('dataa', data)
        axios
          .post(`http://localhost:8080/api/get_city_state`, data)

          .then((res) => {
            //  console.log('RESPONSE = ', res.data.data)
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
  handleCity(e) {
    this.setState({
      city: e.target.value,
    })
    console.log('City =', e.target.value)
  }
  handleState(event) {
    this.setState({state: event.target.value})
    console.log('State Name =', event.target.value)
  }
  handleTelephone(e) {
    this.setState({
      telephone: e.target.value,
    })
    console.log('Phone =', this.state.telephone)
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value.toUpperCase(),
    })
    console.log('Email =', this.state.email)
  }
  handleCustomerType(event) {
    this.setState({customer_type: event.target.value})
    console.log('Customer Type ', event.target.value)
  }

  saveData = (e) => {
    const userData = this.props.location.aboutProps && this.props.location.aboutProps.userData
    var id = userData._id
    console.log('### id inside save method ##', id)
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
      usdot_no: this.state.usdot_no,
      mc_no: this.state.mc_no,
      mcInput: this.state.mcInput,
      email: this.state.email,
      customer_type: this.state.customer_type,
      docket_number: this.state.docket_number,
    }
    axios.put(`http://localhost:8080/api/update_new_customer/${id}`, data).then((res) => {
      console.log('RESPONSE = ', res)
      console.log(res.message)
      if (res.data.success) {
        swal({
          text: 'Updated Sucessfully!',
          icon: 'success',
          timer: 800,
        })

        // console.log('data', res.data.message)
        this.props.history.push({
          pathname: '/apps/customers/UpdateAccounting',
          aboutProps: {userData},
        })
      } else {
        swal({
          text: 'Error',
          icon: 'error',
        })
      }
    })
  }

  render() {
    const {stateList} = this.state
    const userData =
      this.props.location &&
      this.props.location.aboutProps &&
      this.props.location.aboutProps.userData

    return (
      <div>
        <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
          <li className='nav-item'>
            <a className='nav-link active'>
              <Link to={{pathname: '/apps/customers/UpdateCustomers', aboutProps: {userData}}}>
                {' '}
                <h6 className='text-primary'> Customer Details</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link
                to={{
                  pathname: '/apps/customers/UpdateAccounting',

                  aboutProps: {userData},
                }}
              >
                <h6 className='text-primary'> Accounting</h6>
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
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

        <div>
          <div className=' card '>
            <div className='w-100'>
              <form
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
                      <label className='form-label text-dark fw-bolder required'>First Name</label>

                      <input
                        type='text'
                        name='firstname'
                        value={this.state.firstname}
                        onChange={this.handleFirstName}
                        className='form-control form-control-lg form-control-solid'
                      />

                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>
                    <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
                      <label className='form-label form-label text-dark fw-bolder required'>
                        Last Name
                      </label>

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
                            <label className=' fs-6 fw-bold form-label mb-2 form-label text-dark fw-bolder required'>
                              Email
                            </label>

                            <input
                              value={this.state.email}
                              onChange={this.handleEmail}
                              type='email'
                              className='form-control form-control-solid'
                              name='email'
                            />
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>

                          <div className='col-6'>
                            <label className='fs-6 fw-bold form-label mb-2 form-label text-dark fw-bolder required'>
                              Customer Type
                            </label>

                            <div className='input-group-prepend'>
                              <select
                                onChange={this.handleCustomerType}
                                value={this.state.customer_type}
                                type='text'
                                className='form-control form-control-solid'
                                name='customer_type'
                                className='form-select form-select-solid select2-hidden-accessible'
                                data-control='select2'
                                data-hide-search='true'
                                data-select2-id='select2-data-13-fi4w'
                                tabIndex={-1}
                                aria-hidden='true'
                              >
                                <option>Select</option>
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
                      <label className='fs-6 fw-bold form-label form-label text-dark fw-bolder required'>
                        Telephone
                      </label>
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
                      <label className='fs-6 fw-bold form-label form-label text-dark fw-bolder required'>
                        Country
                      </label>
                      {/* <input
                        value={this.state.country}
                        onChange={this.handleCountry}
                        type='text'
                        name='country'
                        className='form-control form-control-lg form-control-solid'
                      /> */}
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
                            <label className=' fs-6 fw-bold form-label required form-label text-dark fw-bolder mb-2'>
                              Postal Code
                            </label>

                            <input
                              value={this.state.postal_code}
                              onChange={this.handlePostalCode}
                              type='text'
                              className='form-control form-control-solid'
                              name='postal_code'
                            />
                            <div className='fv-plugins-message-container invalid-feedback'></div>
                          </div>

                          <div className='col-6'>
                            <label className=' fs-6 fw-bold form-label mb-2 form-label text-dark fw-bolder required '>
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
                        <label className=' fs-6 fw-bold form-label form-label text-dark fw-bolder required mb-2'>
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
                          <label className=' fs-6 fw-bold form-label required form-label text-dark fw-bolder mb-2'>
                            Street 1
                          </label>

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
                          <label className='fs-6 fw-bold form-label required form-label text-dark fw-bolder mb-2'>
                            Street 2
                          </label>

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
                      <label className=' fs-6 fw-bold form-label mb-2 required form-label text-dark fw-bolder'>
                        MC/FF/MX Number
                      </label>

                      <div className='input-group mb-3'>
                        {/* <div className='input-group-prepend'>
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
                        </div> */}
                        <input
                          value={this.state.docket_number}
                          onChange={this.handleMcInput}
                          type='text'
                          className='form-control form-control-solid'
                          name='mcInput'
                        />
                      </div>
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>

                    <div className='col-6'>
                      <label className='fs-6 fw-bold form-label mb-2 required form-label text-dark fw-bolder'>
                        USDOT Number
                      </label>

                      <input
                        value={this.state.usdot_no}
                        onChange={this.handleUsDot}
                        type='number'
                        maxlength='7'
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
                        Update
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
                    <ToastContainer />
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
export default UpdateCustomers
