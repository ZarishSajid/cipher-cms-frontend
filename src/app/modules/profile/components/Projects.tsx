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
            <a href="/crafted/widgets/tables" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
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
            <a href="/crafted/widgets/tables" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
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
            <a href="/crafted/widgets/tables" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
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
            <a href="/crafted/widgets/tables" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
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
            <a href="/crafted/widgets/tables" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
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


    <div className="modal fade" id="kt_modal_add_role" tabIndex={-1} aria-hidden="true">
	<div className="modal-dialog modal-dialog-centered mw-750px">
  <div className="modal fade show" id="kt_modal_add_role" tabIndex={-1} style={{display: "block" }}aria-modal="true" role="dialog">
									<div className="modal-dialog modal-dialog-centered mw-750px">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="fw-bolder">Add a Role</h2>
												<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
													<span className="svg-icon svg-icon-1">
														<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
															<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
																<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1"></rect>
																<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1"></rect>
															</g>
														</svg>
													</span>
												</div>
											</div>
										
											<div className="modal-body scroll-y mx-lg-5 my-7">
												<form id="kt_modal_add_role_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
													<div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_role_header" data-kt-scroll-wrappers="#kt_modal_add_role_scroll" data-kt-scroll-offset="300px" style={{maxHeight: "106px"}}>
														<div className="fv-row mb-10 fv-plugins-icon-container">
															<label className="fs-5 fw-bolder form-label mb-2">
																<span className="required">Role name</span>
															</label>
														
															<input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name"/>
														<div className="fv-plugins-message-container invalid-feedback"></div></div>
														
														<div className="fv-row">
															<label className="fs-5 fw-bolder form-label mb-2">Role Permissions</label>
															
															<div className="table-responsive">
																<table className="table align-middle table-row-dashed fs-6 gy-5">
																	<tbody className="text-gray-600 fw-bold">
																	<tr>
																			<td className="text-gray-800">Administrator Access 
																			<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="Allows a full access to the system" aria-label="Allows a full access to the system"></i></td>
																			<td>
																				<label className="form-check form-check-custom form-check-solid me-9">
																					<input className="form-check-input" type="checkbox" value="" id="kt_roles_select_all"/>
																					<span className="form-check-label" >Select all</span>
																				</label>
																			</td>
																		</tr>
																	
																		<tr>
																			<td className="text-gray-800">User Management</td>
																		
																			<td>
																				<div className="d-flex">
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="user_management_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
						
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="user_management_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																				
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="user_management_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																				</div>
																			</td>
																		</tr>
																		
																		<tr>
																			
																			<td className="text-gray-800">Content Management</td>
																			
																			<td>
																				<div className="d-flex">
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="content_management_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="content_management_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																				
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="content_management_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																				</div>
																			</td>
																			
																		</tr>
																	
																		<tr>
																			<td className="text-gray-800">Financial Management</td>
																			
																			<td>
																			
																				<div className="d-flex">
																				
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="financial_management_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="financial_management_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="financial_management_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																					
																				</div>
																				
																			</td>
																			
																		</tr>
																	
																		<tr>
																			
																			<td className="text-gray-800">Reporting</td>
																			
																			<td>
																				
																				<div className="d-flex">
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="reporting_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="reporting_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="reporting_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																					
																				</div>
																				
																			</td>
																		
																		</tr>
																		
																		<tr>
																			
																			<td className="text-gray-800">Payroll</td>
																			
																			<td>
																				
																				<div className="d-flex">
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="payroll_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
																				
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="payroll_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																				
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="payroll_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																					
																				</div>
																				
																			</td>
																			
																		</tr>

																		<tr>
																			
																			<td className="text-gray-800">Disputes Management</td>
																		
																			<td>
																				
																				<div className="d-flex">
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="disputes_management_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="disputes_management_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="disputes_management_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																					
																				</div>
																				
																			</td>
																			
																		</tr>
																		
																		<tr>
																			
																			<td className="text-gray-800">API Controls</td>
																		
																			<td>
																				
																				<div className="d-flex">
																				
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="api_controls_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
																				
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="api_controls_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="api_controls_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																					
																				</div>
																				
																			</td>
																		
																		</tr>
																	
																		<tr>
																			
																			<td className="text-gray-800">Database Management</td>
																			
																			<td>
																			
																				<div className="d-flex">
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="database_management_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="database_management_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="database_management_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																				
																				</div>
																				
																			</td>
																			
																		</tr>
																		
																		<tr>
																		
																			<td className="text-gray-800">Repository Management</td>
																			
																			<td>
																				
																				<div className="d-flex">
																				
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="repository_management_read"/>
																						<span className="form-check-label">Read</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																						<input className="form-check-input" type="checkbox" value="" name="repository_management_write"/>
																						<span className="form-check-label">Write</span>
																					</label>
																					
																					<label className="form-check form-check-sm form-check-custom form-check-solid">
																						<input className="form-check-input" type="checkbox" value="" name="repository_management_create"/>
																						<span className="form-check-label">Create</span>
																					</label>
																					
																				</div>
																			
																			</td>
																	
																		</tr>
																	
																	</tbody>
																
																</table>
																
															</div>
															
														</div>
														
													</div>
													
													<div className="text-center pt-15">
														<button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
														<button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
															<span className="indicator-label">Submit</span>
															<span className="indicator-progress">Please wait... 
															<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
														</button>
													</div>
												<div></div></form>
											</div>
										</div>
									</div>
								</div>
	</div>
</div>


    <div className="modal fade" id="kt_modal_update_role" tabIndex={-1} aria-hidden="true">
											<div className="modal-dialog modal-dialog-centered mw-750px">
												<div className="modal-content">
													<div className="modal-header">
														<h2 className="fw-bolder">Update Role</h2>
												
														<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
															<span className="svg-icon svg-icon-1">
																<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
																		<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1"></rect>
																		<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1"></rect>
																	</g>
																</svg>
															</span>
														</div>
													</div>
											
													<div className="modal-body scroll-y mx-5 my-7">
														<form id="kt_modal_update_role_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
															<div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_role_header" data-kt-scroll-wrappers="#kt_modal_update_role_scroll" data-kt-scroll-offset="300px" style={{maxHeight: "106px"}}>
																<div className="fv-row mb-10 fv-plugins-icon-container">
																	<label className="fs-5 fw-bolder form-label mb-2">
																		<span className="required">Role name</span>
																	</label>
															
																	<input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer"/>
																<div className="fv-plugins-message-container invalid-feedback"></div></div>
															
																<div className="fv-row">
																	<label className="fs-5 fw-bolder form-label mb-2">Role Permissions</label>
															
																	<div className="table-responsive">
																		<table className="table align-middle table-row-dashed fs-6 gy-5">
																			<tbody className="text-gray-600 fw-bold">
																				<tr>
																					<td className="text-gray-800">Administrator Access 
																					<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="Allows a full access to the system" aria-label="Allows a full access to the system"></i></td>
																					<td>
																						<label className="form-check form-check-sm form-check-custom form-check-solid me-9">
																							<input className="form-check-input" type="checkbox" value="" id="kt_roles_select_all"/>
																							<span className="form-check-label" >Select all</span>
																						</label>
																					</td>
																				</tr>
																			
																				<tr>
																					<td className="text-gray-800">User Management</td>
																			
																					<td>
																						<div className="d-flex">
																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="user_management_read"/>
																								<span className="form-check-label">Read</span>
																							</label>

																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="user_management_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="user_management_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>
																					</td>
																				</tr>
																			
																				<tr>
																					<td className="text-gray-800">Content Management</td>
																				
																					<td>
																						<div className="d-flex">
																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="content_management_read"/>
																								<span className="form-check-label">Read</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="content_management_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																							
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="content_management_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>																					</td>
																				</tr>
																			
																				<tr>
																					<td className="text-gray-800">Financial Management</td>
																				
																					<td>
																						<div className="d-flex">
																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="financial_management_read"/>
																								<span className="form-check-label">Read</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="financial_management_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="financial_management_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>
																					</td>
																				</tr>
																		
																				<tr>
																					<td className="text-gray-800">Reporting</td>
																					<td>
																						<div className="d-flex">																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="reporting_read"/>
																								<span className="form-check-label">Read</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="reporting_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="reporting_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>
																					</td>
																				</tr>
																			
																				<tr>
																					<td className="text-gray-800">Payroll</td>
																					<td>
																						<div className="d-flex">
																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="payroll_read"/>
																								<span className="form-check-label">Read</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="payroll_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																					
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="payroll_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>
																					</td>
																				</tr>
																			
																				<tr>
																					<td className="text-gray-800">Disputes Management</td>
																				
																					<td>
																						<div className="d-flex">
																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="disputes_management_read"/>
																								<span className="form-check-label">Read</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="disputes_management_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																							
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="disputes_management_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>
																					</td>
																				</tr>
																				
																				<tr>
																					<td className="text-gray-800">API Controls</td>
																				
																					<td>
																						<div className="d-flex">
																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="api_controls_read"/>
																								<span className="form-check-label">Read</span>
																							</label>
																							
																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="api_controls_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="api_controls_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>
																					</td>
																				</tr>
																		
																				<tr>
																					<td className="text-gray-800">Database Management</td>
																			
																					<td>
																						<div className="d-flex">
																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="database_management_read"/>
																								<span className="form-check-label">Read</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="database_management_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="database_management_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>
																					</td>
																				</tr>
																			
																				<tr>
																					<td className="text-gray-800">Repository Management</td>
																				
																					<td>
																						<div className="d-flex">
																							<label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="repository_management_read"/>
																								<span className="form-check-label">Read</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input className="form-check-input" type="checkbox" value="" name="repository_management_write"/>
																								<span className="form-check-label">Write</span>
																							</label>
																						
																							<label className="form-check form-check-custom form-check-solid">
																								<input className="form-check-input" type="checkbox" value="" name="repository_management_create"/>
																								<span className="form-check-label">Create</span>
																							</label>
																						</div>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
															</div>
														
															<div className="text-center pt-15">
																<button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
																<button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
																	<span className="indicator-label">Submit</span>
																	<span className="indicator-progress">Please wait... 
																	<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
																</button>
															</div>
														<div></div></form>
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
