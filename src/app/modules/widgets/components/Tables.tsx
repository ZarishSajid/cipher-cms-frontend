import React, {FC} from 'react'
import {
  TablesWidget1,
  TablesWidget2,
  TablesWidget3,
  TablesWidget4,
  TablesWidget5,
  TablesWidget6,
  TablesWidget7,
  TablesWidget8,
  TablesWidget9,
  TablesWidget10,
  TablesWidget11,
  TablesWidget12,
  TablesWidget13,
} from '../../../../_metronic/partials/widgets'

const Tables: FC = () => {
  return (
    <>

            
  	<div className="content d-flex flex-column flex-column-fluid" id="kt_content">
						
							
							
							
						<div className="post d-flex flex-column-fluid" id="kt_post">
							<div id="kt_content_container" className="container">
								<div className="d-flex flex-column flex-xl-row">
									<div className="flex-column flex-lg-row-auto w-100 w-lg-300px mb-10">
										<div className="card card-flush">
											<div className="card-header">
												<div className="card-title">
													<h2 className="mb-0">Developer</h2>
												</div>
											</div>
											<div className="card-body pt-0">
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
													<div className="d-flex align-items-center py-2 d-none">
														<span className="bullet bg-primary me-3"></span>
														<em>and 3 more...</em>
													</div>
												</div>
											</div>
											
											<div className="card-footer pt-0">
												<button type="button" className="btn btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
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
									
									</div>
									
									<div className="flex-lg-row-fluid ms-lg-10">
										<div className="card card-flush mb-6 mb-xl-9">
											<div className="card-header pt-5">
												<div className="card-title">
													<h2 className="d-flex align-items-center">Users Assigned
													<span className="text-gray-600 fs-6 ms-1">(14)</span></h2>
												</div>
											
												<div className="card-toolbar">
													<div className="d-flex align-items-center position-relative my-1" data-kt-view-roles-table-toolbar="base">
														<span className="svg-icon svg-icon-1 position-absolute ms-6">
															<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="0" y="0" width="24" height="24"></rect>
																	<path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
																	<path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"></path>
																</g>
															</svg>
														</span>
														<input type="text" data-kt-roles-table-filter="search" className="form-control form-control-solid w-250px ps-15" placeholder="Search Users"/>
													</div>
											
													<div className="d-flex justify-content-end align-items-center d-none" data-kt-view-roles-table-toolbar="selected">
														<div className="fw-bolder me-5">
														<span className="me-2" data-kt-view-roles-table-select="selected_count"></span>Selected</div>
														<button type="button" className="btn btn-danger" data-kt-view-roles-table-select="delete_selected">Delete Selected</button>
													</div>
												</div>
											</div>
									
											<div className="card-body pt-0">
												<div id="kt_roles_view_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="table-responsive"><table className="table align-middle table-row-dashed fs-6 gy-5 mb-0 dataTable no-footer" id="kt_roles_view_table" role="grid">
													<thead>
														<tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0" role="row"><th className="w-10px pe-2 sorting_disabled" rowSpan={1} colSpan={1} aria-label="" style={{width: "29.5px"}}>
																<div className="form-check form-check-sm form-check-custom form-check-solid me-3">
																	<input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_roles_view_table .form-check-input" value="1"/>
																</div>
															</th>
                              
                              <th className="min-w-50px sorting" tabIndex={0} aria-controls="kt_roles_view_table" rowSpan={1} colSpan={1} aria-label="ID: activate to sort column ascending" style={{width: "50.25px"}}>ID</th><th className="min-w-150px sorting"tabIndex={0} aria-controls="kt_roles_view_table" rowSpan={1} colSpan={1} aria-label="User: activate to sort column ascending" style={{width: "225.25px"}}>User</th><th className="min-w-125px sorting" tabIndex={0} aria-controls="kt_roles_view_table" rowSpan={1} colSpan={1} aria-label="Joined Date: activate to sort column ascending" style={{width: "125.25px"}}>Joined Date</th><th className="text-end min-w-100px sorting_disabled" rowSpan={1} colSpan={1} aria-label="Actions" style={{width: "100.25px"}}>Actions</th></tr>
													</thead>
												
													<tbody className="fw-bold text-gray-600">
													<tr className="odd">
															<td>
																<div className="form-check form-check-sm form-check-custom form-check-solid">
																	<input className="form-check-input" type="checkbox" value="1"/>
																</div>
															</td>
														
															<td>ID3882</td>
														
															<td className="d-flex align-items-center">
																<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html">
																		<div className="symbol-label fs-3 bg-light-warning text-warning">M</div>
																	</a>
																</div>
															
																<div className="d-flex flex-column">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
																	<span>mikaela@pexcom.com</span>
																</div>
															</td>
														
															<td data-order="2021-05-05T06:43:00+05:00">05 May 2021, 6:43 am</td>
														
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions 
																<span className="svg-icon svg-icon-5 m-0">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"></polygon>
																			<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
																		</g>
																	</svg>
																</span>
                                </a>
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
																	<div className="menu-item px-3">
																		<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="menu-link px-3">View</a>
																	</div>
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																	</div>
																</div>
															</td>
														</tr><tr className="even">
															<td>
																<div className="form-check form-check-sm form-check-custom form-check-solid">
																	<input className="form-check-input" type="checkbox" value="1"/>
																</div>
															</td>
													
															<td>ID1004</td>
														
															<td className="d-flex align-items-center">
																<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html">
																		<div className="symbol-label">
																			<img src="/metronic8/demo1/assets/media/avatars/150-8.jpg" alt="Francis Mitcham" className="w-100"/>
																		</div>
																	</a>
																</div>
														
																<div className="d-flex flex-column">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
																	<span>f.mitcham@kpmg.com.au</span>
																</div>
															</td>
														
															<td data-order="2021-08-19T22:10:00+05:00">19 Aug 2021, 10:10 pm</td>
													
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions 
																<span className="svg-icon svg-icon-5 m-0">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"></polygon>
																			<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
																		</g>
																	</svg>
																</span>
															</a>
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
																	<div className="menu-item px-3">
																		<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="menu-link px-3">View</a>
																	</div>
																
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																	</div>
																</div>
															</td>
														</tr><tr className="odd">
															<td>
																<div className="form-check form-check-sm form-check-custom form-check-solid">
																	<input className="form-check-input" type="checkbox" value="1"/>
																</div>
															</td>
														
															<td>ID7089</td>
															
															<td className="d-flex align-items-center">
																<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html">
																		<div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
																	</a>
																</div>
															
																<div className="d-flex flex-column">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Olivia Wild</a>
																	<span>olivia@corpmail.com</span>
																</div>
															</td>
														
															<td data-order="2021-12-20T22:10:00+05:00">20 Dec 2021, 10:10 pm</td>
														
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions 
																<span className="svg-icon svg-icon-5 m-0">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"></polygon>
																			<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
																		</g>
																	</svg>
																</span>
                                </a>
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
																	<div className="menu-item px-3">
																		<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="menu-link px-3">View</a>
																	</div>
																
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																	</div>
																</div>
															</td>
														</tr><tr className="even">
															<td>
																<div className="form-check form-check-sm form-check-custom form-check-solid">
																	<input className="form-check-input" type="checkbox" value="1"/>
																</div>
															</td>
														
															<td>ID9891</td>
														
															<td className="d-flex align-items-center">
																<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html">
																		<div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
																	</a>
																</div>
															
																<div className="d-flex flex-column">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
																	<span>owen.neil@gmail.com</span>
																</div>
															</td>
													
															<td data-order="2021-09-22T17:20:00+05:00">22 Sep 2021, 5:20 pm</td>
														
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions 
																<span className="svg-icon svg-icon-5 m-0">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"></polygon>
																			<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
																		</g>
																	</svg>
																</span>
															</a>
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
																	<div className="menu-item px-3">
																		<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="menu-link px-3">View</a>
																	</div>
															
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																	</div>
																</div>
															</td>
														</tr><tr className="odd">
															<td>
																<div className="form-check form-check-sm form-check-custom form-check-solid">
																	<input className="form-check-input" type="checkbox" value="1"/>
																</div>
															</td>
														
															<td>ID7451</td>
														
															<td className="d-flex align-items-center">
																<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html">
																		<div className="symbol-label">
																			<img src="/metronic8/demo1/assets/media/avatars/150-6.jpg" alt="Dan Wilson" className="w-100"/>
																		</div>
																	</a>
																</div>
																
																<div className="d-flex flex-column">
																	<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
																	<span>dam@consilting.com</span>
																</div>
															</td>
														
															<td data-order="2021-05-05T17:30:00+05:00">05 May 2021, 5:30 pm</td>
															
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions 
																<span className="svg-icon svg-icon-5 m-0">
																	<svg xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"></polygon>
																			<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
																		</g>
																	</svg>
																</span>
                                </a>
															
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
																	<div className="menu-item px-3">
																		<a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html" className="menu-link px-3">View</a>
																	</div>
															
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																	</div>
																</div>
															</td>
														</tr></tbody>
												</table></div><div className="row"><div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div><div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"><div className="dataTables_paginate paging_simple_numbers" id="kt_roles_view_table_paginate"><ul className="pagination"><li className="paginate_button page-item previous" id="kt_roles_view_table_previous"><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="0"  tabIndex={0} className="page-link"><i className="previous"></i></a></li><li className="paginate_button page-item "><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="1"   tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="2" tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="3" tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item next" id="kt_roles_view_table_next"><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="4" tabIndex={0} className="page-link"><i className="next"></i></a></li></ul></div></div></div></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>      
                  
                    </>
  )
}

export {Tables}
