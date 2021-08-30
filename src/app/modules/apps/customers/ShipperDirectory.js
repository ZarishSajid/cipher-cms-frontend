import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import '../index.css'
import {BsTrash} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'

class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        state:'',
    }
    this.handleState = this.handleState.bind(this)

  }
  handleState(event) {
    this.setState({state: event.target.value})
    console.log('State/Province =', event.target.value)
  }
  render() {
    return (
      <div>
        <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
          <div className='toolbar' id='kt_toolbar'>
            <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
              <div
                data-kt-swapper='true'
                data-kt-swapper-mode='prepend'
                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'
              >
                <span className='h-20px border-gray-200 border-start mx-4'></span>
              </div>
              <h5>Shipper Directory</h5>
            </div>
          </div>
          <div className=' card card-custom tab-pane fade active show' role='tabpanel'>
            <div className='w-100'>
              <form
                className='mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework'
                noValidate={true}
              >
                <div data-kt-stepper-element='content' className='completed'></div>

                <div className='col-md-12 fv-row'>
                  <div className='row fv-row fv-plugins-icon-container'>
                    <div className='col-12'>
                      <label className=' fs-6 fw-bold form-label mb-2'>
                        Choose a State/Province:
                      </label>

                      <select
                        type='text'
                        onChange={this.handleState}
                        value={this.state.state}
                        name='temperature_unit'
                        className='form-select form-select-solid select2-hidden-accessible'
                        data-control='select2'
                        data-hide-search='true'
                        data-select2-id='select2-data-13-fi4w'
                        tabIndex={-1}
                        aria-hidden='true'
                      >
                    <option value="default">--select state/province--</option>
                        <option value='AL'>Alabama</option>
                        <option value='AK'>Alaska</option>
                        <option value='AZ'>Arizona</option>
                        <option value='AR'>Arkansas</option>
                        <option value='CA'>California</option>
                        <option value='CO'>Colorado</option>
                        <option value='CT'>Connecticut</option>
                        <option value='DE'>Delaware</option>
                        <option value='DC'>District Of Columbia</option>
                        <option value='FL'>Florida</option>
                        <option value='GA'>Georgia</option>
                        <option value='HI'>Hawaii</option>
                        <option value='ID'>Idaho</option>
                        <option value='IL'>Illinois</option>
                        <option value='IN'>Indiana</option>
                        <option value='IA'>Iowa</option>
                        <option value='KS'>Kansas</option>
                        <option value='KY'>Kentucky</option>
                        <option value='LA'>Louisiana</option>
                        <option value='ME'>Maine</option>
                        <option value='MD'>Maryland</option>
                        <option value='MA'>Massachusetts</option>
                        <option value='MI'>Michigan</option>
                        <option value='MN'>Minnesota</option>
                        <option value='MS'>Mississippi</option>
                        <option value='MO'>Missouri</option>
                        <option value='MT'>Montana</option>
                        <option value='NE'>Nebraska</option>
                        <option value='NV'>Nevada</option>
                        <option value='NH'>New Hampshire</option>
                        <option value='NJ'>New Jersey</option>
                        <option value='NM'>New Mexico</option>
                        <option value='NY'>New York</option>
                        <option value='NC'>North Carolina</option>
                        <option value='ND'>North Dakota</option>
                        <option value='OH'>Ohio</option>
                        <option value='OK'>Oklahoma</option>
                        <option value='OR'>Oregon</option>
                        <option value='PA'>Pennsylvania</option>
                        <option value='RI'>Rhode Island</option>
                        <option value='SC'>South Carolina</option>
                        <option value='SD'>South Dakota</option>
                        <option value='TN'>Tennessee</option>
                        <option value='TX'>Texas</option>
                        <option value='UT'>Utah</option>
                        <option value='VT'>Vermont</option>
                        <option value='VA'>Virginia</option>
                        <option value='WA'>Washington</option>
                        <option value='WV'>West Virginia</option>
                        <option value='WI'>Wisconsin</option>
                        <option value='WY'>Wyoming</option>
                        <option value='AB'>Alberta</option>
                        <option value='BC'>British Columbia</option>
                        <option value='MB'>Manitoba</option>
                        <option value='NB'>New Brunswick</option>
                        <option value='NL'>Newfoundland and Labrador</option>
                        <option value='NS'>Nova Scotia</option>
                        <option value='ON'>Ontario</option>
                        <option value='PE'>Prince Edward Island</option>
                        <option value='QC'>Quebec</option>
                        <option value='SK'>Saskatchewan</option>
                        <option value='NT'>Northwest Territories</option>
                        <option value='NU'>Nunavut</option>
                        <option value='YT'>Yukon</option>
                      </select>
                      
                    </div>
                  </div>
                  <br/>
                  <div className="alert alert-primary">
                  We provide this directory of almost 26,000 direct shippers, freight brokers, and freight forwarders as a resource to select AscendTMS users. This nationwide shipper data comes from public records and not from any AscendTMS system data.
<br/>
<br/>
NOTE: If more than one shipping facility exists for a company in your search, the company name will be shown more than once, but may contain different contact details for each shipping facility.
                  
                  </div>

                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default UsersList
