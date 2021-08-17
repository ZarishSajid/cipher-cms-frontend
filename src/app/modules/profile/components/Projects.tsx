/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card2} from '../../../../_metronic/partials/content/cards/Card2'
import {IconUserModel} from '../ProfileModels'
import { toAbsoluteUrl} from '../../../../_metronic/helpers'

export function Projects() {
  return (
    <>




        {/* <h3 className='fw-bolder my-2'>
          My Projects
          <span className='fs-6 text-gray-400 fw-bold ms-1'>Active</span>
        </h3> */}




        {/* <div className='d-flex flex-wrap my-2'>
          <div className='me-4'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='Active'
            >
              <option value='Active'>Active</option>
              <option value='Approved'>In Progress</option>
              <option value='Declined'>To Do</option>
              <option value='In Progress'>Completed</option>
            </select>
          </div>
          <a
            href='#'
            className='btn btn-primary btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_project'
          >
            New Project
          </a>
        </div> */}






      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-9">
      <div className="col-md-4">
        <div className="card card-flush h-md-100">
        
          <div className="card-header">
            
            <div className="card-title">
              <h2>Administrator</h2>
            </div>
          </div>
          
          <div className="card-body pt-1">
            <div className="fw-bolder text-gray-600 mb-5">Total users with this role: 5</div>
          
            <div className="d-flex flex-column text-gray-600">
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>All Admin Controls</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View and Edit Financial Summaries</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>Enabled Bulk Reports</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View and Edit Payouts</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View and Edit Disputes</div>
              <div className='d-flex align-items-center py-2'>
                <span className='bullet bg-primary me-3'></span>
                <em>and 7 more...</em>
              </div>
            </div>
          </div>
          
          <div className="card-footer flex-wrap pt-0">
            <a href="../../demo1/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
          </div>
        </div>
      </div>
    
      <div className="col-md-4">
        <div className="card card-flush h-md-100">
          <div className="card-header">
            <div className="card-title">
              <h2>Developer</h2>
            </div>
          </div>
        
          <div className="card-body pt-1">
            <div className="fw-bolder text-gray-600 mb-5">Total users with this role: 14</div>
            <div className="d-flex flex-column text-gray-600">
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>Some Admin Controls</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Financial Summaries only</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View and Edit API Controls</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Payouts only</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View and Edit Disputes</div>
              <div className='d-flex align-items-center py-2'>
                <span className='bullet bg-primary me-3'></span>
                <em>and 3 more...</em>
              </div>
            </div>
          </div>
      
          <div className="card-footer flex-wrap pt-0">
            <a href="../../demo1/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
          </div>
        </div>
    
      </div>
    
      <div className="col-md-4">
        <div className="card card-flush h-md-100">
        
          <div className="card-header">
          
            <div className="card-title">
              <h2>Analyst</h2>
            </div>
        
          </div>
        
          <div className="card-body pt-1">
            <div className="fw-bolder text-gray-600 mb-5">Total users with this role: 4</div>
          
            <div className="d-flex flex-column text-gray-600">
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>No Admin Controls</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View and Edit Financial Summaries</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>Enabled Bulk Reports</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Payouts only</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Disputes only</div>
              <div className='d-flex align-items-center py-2'>
                <span className='bullet bg-primary me-3'></span>
                <em>and 2 more...</em>
              </div>
            </div>
          </div>
          
          <div className="card-footer flex-wrap pt-0">
            <a href="../../demo1/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
          </div>
        
        </div>
      
      </div>
    
      <div className="col-md-4">
      
        <div className="card card-flush h-md-100">
        
          <div className="card-header">
          
            <div className="card-title">
              <h2>Support</h2>
            </div>
          </div>
        
          <div className="card-body pt-1">
        
            <div className="fw-bolder text-gray-600 mb-5">Total users with this role: 23</div>
          
            <div className="d-flex flex-column text-gray-600">
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>No Admin Controls</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Financial Summaries only</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Payouts only</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View and Edit Disputes</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>Response to Customer Feedback</div>
            </div>
          </div>
      
          <div className="card-footer flex-wrap pt-0">
            <a href="../../demo1/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
          </div>
      
        </div>
      
      </div>
    
      <div className="col-md-4">
        <div className="card card-flush h-md-100">
          <div className="card-header">
            <div className="card-title">
              <h2>Trial</h2>
            </div>
          </div>
        
          <div className="card-body pt-1">
            <div className="fw-bolder text-gray-600 mb-5">Total users with this role: 546</div>
          
            <div className="d-flex flex-column text-gray-600">
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>No Admin Controls</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Financial Summaries only</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Bulk Reports only</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Payouts only</div>
              <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3"></span>View Disputes only</div>
            </div>
          </div>
        
          <div className="card-footer flex-wrap pt-0">
            <a href="../../demo1/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
          </div>
        
        </div>
    
      </div>
    
      <div className="ol-md-4">
        <div className="card h-md-100">
          <div className="card-body d-flex flex-center">
            <button type="button" className="btn btn-clear d-flex flex-column flex-center" data-bs-toggle="modal" data-bs-target="#kt_modal_add_role">
              {/* <img src='../../../../../public/user-role.png' alt="" className="mw-100 mh-150px mb-7" /> */}
              <img
              className='mw-100 mh-200px'
              alt='metronic'
              src={toAbsoluteUrl('/media/illustrations/user-role.png')}
            />
              <div className="fw-bolder fs-3 text-gray-600 text-hover-primary">Add New Role</div>
            </button>
          </div>
        </div>
      </div>
    </div>


      {/* <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            budget='$284,900.00'
            progress={50}
            users={users1}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/disqus.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Leaf CRM'
            description='CRM App application to HR efficiency'
            date='May 10, 2021'
            budget='$36,400.00'
            progress={30}
            users={users2}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/figma-1.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Atica Banking'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={100}
            users={users3}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/sentry-3.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Finance Dispatch'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={60}
            users={users4}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/xing-icon.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='9 Degree'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={40}
            users={users5}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/tvit.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='9 Degree'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={70}
            users={users6}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/aven.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Buldozer CRM'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={70}
            users={users7}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/treva.svg'
            badgeColor='danger'
            status='Overdue'
            statusColor='danger'
            title='Aviasales App'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={10}
            users={users8}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/kanba.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Oppo CRM'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={100}
            users={users9}
          />
        </div>
      </div> */}

  
    </>
  )
}

const users1: Array<IconUserModel> = [
  {name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users2 = [
  {name: 'Alan Warden', initials: 'A', color: 'warning'},
  {name: 'Brian Cox', avatar: '/media/avatars/150-4.jpg'},
]

const users3 = [
  {name: 'Mad Masy', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Cris Willson', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Mike Garcie', initials: 'M', color: 'info'},
]

const users4 = [
  {name: 'Nich Warden', initials: 'N', color: 'warning'},
  {name: 'Rob Otto', initials: 'R', color: 'success'},
]

const users5 = [
  {name: 'Francis Mitcham', avatar: '/media/avatars/150-5.jpg'},
  {name: 'Michelle Swanston', avatar: '/media/avatars/150-13.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users6 = [
  {name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users7 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/150-3.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'success'},
]

const users8 = [
  {name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users9 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/150-3.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'danger'},
]
