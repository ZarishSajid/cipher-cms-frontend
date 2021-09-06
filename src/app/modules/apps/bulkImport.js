import React, {Component} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import axios from 'axios'
import '../apps/index.css'
class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
    
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
              <h5 >Bulk Import</h5>

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
          <p  className='margin-30 list-unstyled text-gray-600 fw-bold fs-6 p-2 m-30 '>Use the import wizard to bulk import your carriers from a spreadsheet or comma delimeted file</p>

          <div className='card mb-30'>
        
        <div className='card-body d-flex align-items-center py-8 first-div'>
          {/* begin::Icon */}
          
        
          
          {/* end::Icon */}

          {/* begin::Description */}
          <div className='ms-6'>
          1. Select the file containing your carriers to import

          </div>
          {/* end::Description */}
        </div>
        <div className='margin-30 margin-10 font-bold font-10 '>Select a file first, then press the Import File button.</div>
        <div className='helpful-tips'>

    <h5 className=' tips-color margin-10'>Helpful tips!</h5>

    <ul>
    <li className='list-color'>To help you get you started, download our example template.<br/><a class="btn btn-xs btn-primary" href="https://s3.amazonaws.com/imgfs/docs/carrier-import.xlsx" target="_blank"><i class="fa fa-download"></i> Download</a></li>
    <li className='list-color'>If you already have an Excel spreadsheet or Comma-separated file, you may upload that as well.</li>
    <li className='list-color'>Each row should contain a different carrier.</li>
    <li className='list-color'>Columns wilFd be mapped in upcoming steps.</li>
  </ul>
  <div class="panel-footer">
    <div class="row fileupload-buttonbar">
      <span class="btn btn-success fileinput-button">
        <i class="fa fa-plus fa fa-fw fa-white"></i>
        <span>Select a File</span>
        <input id="fileupload" type="file" name="files[]" data-url="/files/" accept=".csv,.ods,.ots,.sxc,.xlsx,.xls,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
      </span>
      <span id="lblFile" class="text-info"></span>
      <button id="btnImport" class="pull-right btn btn-primary disabled" disabled=""><i class="fa fa-fw fa-sign-in"></i> Import File</button>
    </div>
  </div>
        </div>

      </div>

      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          
        </div>
        {/* end::Header */}

        {/* begin::Form */}
        <form className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
         </div>
          </div>
          {/* end::Body */}

          {/* begin::Footer */}
         
          {/* end::Footer */}
        </form>
        {/* end::Form */}
      </div>
        </div>
      </div>
    )
  }
}
export default UsersList
