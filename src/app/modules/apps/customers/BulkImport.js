import React, {Component} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import axios from 'axios'
import '../index.css'
import {BsTrash} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import {AiOutlineDownload} from 'react-icons/ai'

class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      state: '',
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
                <span className='h-20px border-gray-200 border-start mx-4'></span>
              </div>
              <h5>Bulk Import</h5>
            </div>
          </div>
          <div className='panel panel-primary card card-custom tab-pane fade active show '>
            <div className='panel-heading'>
              <div class='alert alert-primary' role='alert'>
                Select a file first, then press the Import File button.
              </div>{' '}
              {/* end::Description */}
            </div>
            <div className=' margin-left margin-10 font-bold font-10 '>
              Select a file first, then press the Import File button.
            </div>
            <br />
            <div className='alert alert-primary'>
              <strong>
                <i className='fa fa-lightbulb-o'></i> Helpful tips!
              </strong>
              <ul>
                <li>
                  To help you get you started, download our example template.
                  <br />
                  <a
                    className='btn btn-xs btn-primary'
                    href='https://s3.amazonaws.com/imgfs/docs/customer-import.xlsx'
                    target='_blank'
                  >
                    <i>
                      <AiOutlineDownload />
                    </i>{' '}
                    Download
                  </a>
                </li>
                <li>
                  If you already have an Excel spreadsheet or Comma-separated file, you may upload
                  that as well.
                </li>
                <li>Each row should contain a different customer.</li>
                <li>Columns will be mapped in upcoming steps.</li>
              </ul>
            </div>
          </div>
          <div className='panel-footer'>
            <div className='d-flex flex-stack pt-15'>
              <div className='mr-2'>
                <button
                  type='button'
                  className='btn btn-secondary btn btn-success me-3 d-inline-block'
                  data-kt-stepper-action='submit'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-align-center'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z' />
                  </svg>

                  <span> Select a File</span>
                </button>
              </div>

              <div>
                <button id='btnImport' className='pull-right btn btn-primary disabled' disabled=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-arrow-bar-right'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z'
                    />
                  </svg>

                  <span> Import File</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=' card card-custom tab-pane fade active show' role='tabpanel'>
         
          </div> */}
      </div>
    )
  }
}
export default UsersList
