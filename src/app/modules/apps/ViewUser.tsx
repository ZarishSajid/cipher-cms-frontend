import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
const Permissions: React.FC = () => {
  return (
    <div>
      <PageTitle breadcrumbs={[]}>View User Details</PageTitle>
      <div className="post d-flex flex-column-fluid" id="kt_post">
							<div id="kt_content_container" className="container">
								<div className="d-flex flex-column flex-xl-row">
									<div className="flex-column flex-lg-row-auto w-100 w-xl-400px mb-10">
										<div className="card mb-5 mb-xl-8">
											<div className="card-body">
												
												<div className="d-flex flex-center flex-column py-5">
													<div className="symbol symbol-100px symbol-circle mb-7">
                            <img src={toAbsoluteUrl('/media/illustrations/150-1.jpg')}
                                  />
													</div>
												
													<a href="#" className="fs-3 text-gray-800 text-hover-primary fw-bolder mb-3">Emma Smith</a>
													
													<div className="mb-9">
														<div className="badge badge-lg badge-light-primary d-inline">Administrator</div>
													</div>
													<div className="fw-bolder mb-3">Assigned Tickets 
													<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Number of support tickets assigned, closed and pending this week." data-bs-original-title="" title=""></i></div>
													<div className="d-flex flex-wrap flex-center">
														<div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
															<div className="fs-4 fw-bolder text-gray-700">
																<span className="w-75px">243</span>
																<span className="svg-icon svg-icon-3 svg-icon-success">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"></polygon>
																			<rect fill="#000000" opacity="0.5" x="11" y="5" width="2" height="14" rx="1"></rect>
																			<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero"></path>
																		</g>
																	</svg>
																</span>
															</div>
															<div className="fw-bold text-muted">Total</div>
														</div>
														<div className="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
															<div className="fs-4 fw-bolder text-gray-700">
																<span className="w-50px">56</span>
																<span className="svg-icon svg-icon-3 svg-icon-danger">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"></polygon>
																			<rect fill="#000000" opacity="0.5" x="11" y="5" width="2" height="14" rx="1"></rect>
																			<path d="M6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L11.2928932,11.2928932 C11.6714722,10.9143143 12.2810586,10.9010687 12.6757246,11.2628459 L18.6757246,16.7628459 C19.0828436,17.1360383 19.1103465,17.7686056 18.7371541,18.1757246 C18.3639617,18.5828436 17.7313944,18.6103465 17.3242754,18.2371541 L12.0300757,13.3841378 L6.70710678,18.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 14.999999) scale(1, -1) translate(-12.000003, -14.999999)"></path>
																		</g>
																	</svg>
																</span>
															</div>
															<div className="fw-bold text-muted">Solved</div>
														</div>
														
														<div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
															<div className="fs-4 fw-bolder text-gray-700">
																<span className="w-50px">188</span>
																<span className="svg-icon svg-icon-3 svg-icon-success">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"></polygon>
																			<rect fill="#000000" opacity="0.5" x="11" y="5" width="2" height="14" rx="1"></rect>
																			<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero"></path>
																		</g>
																	</svg>
																</span>
															</div>
															<div className="fw-bold text-muted">Open</div>
														</div>
													</div>
												</div>
											
												<div className="d-flex flex-stack fs-4 py-3">
													<div className="fw-bolder rotate collapsible" data-bs-toggle="collapse"  role="button" aria-expanded="false" aria-controls="kt_user_view_details">Details 
													<span className="ms-2 rotate-180">
														<span className="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<polygon points="0 0 24 0 24 24 0 24"></polygon>
																	<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
																</g>
															</svg>
														</span>
													</span></div>
													<span data-bs-toggle="tooltip" data-bs-trigger="hover" title="" data-bs-original-title="Edit customer details">
														<a href="#" className="btn btn-sm btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_update_details">Edit</a>
													</span>
												</div>
												<div className="separator"></div>
												<div id="kt_user_view_details" className="collapse show">
													<div className="pb-5 fs-6">
														<div className="fw-bolder mt-5">Account ID</div>
														<div className="text-gray-600">ID-45453423</div>
														
														<div className="fw-bolder mt-5">Email</div>
														<div className="text-gray-600">
															<a href="#" className="text-gray-600 text-hover-primary">info@keenthemes.com</a>
														</div>
														
														<div className="fw-bolder mt-5">Address</div>
														<div className="text-gray-600">101 Collin Street, 
														{/* <br/>Melbourne 3000 VIC
														<br/>Australia */}
														</div>
													
			
														<div className="fw-bolder mt-5">Language</div>
														<div className="text-gray-600">English</div>
														
														<div className="fw-bolder mt-5">Last Login</div>
														<div className="text-gray-600">25 Oct 2021, 10:10 pm</div>
													</div>
												</div>
											</div>
										</div>
										
										<div className="card mb-5 mb-xl-8">
											<div className="card-header border-0">
												<div className="card-title">
													<h3 className="fw-bolder m-0">Connected Accounts</h3>
												</div>
											</div>
											
											<div className="card-body pt-2">
												<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
													
													<span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
														<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
															<path d="M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z" fill="#000000" opacity="0.3"></path>
															<path d="M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z" fill="#000000"></path>
														</svg>
													</span>
													
													<div className="d-flex flex-stack flex-grow-1">
													
														<div className="fw-bold">
															<div className="fs-6 text-gray-700">By connecting an account, you hereby agree to our 
															<a href="#" className="me-1">privacy policy</a>and 
															<a href="#">terms of use</a>.</div>
														</div>
													</div>
												</div>
												
												<div className="py-2">
													<div className="d-flex flex-stack">
														<div className="d-flex">
															<img src="/metronic8/demo1/assets/media/svg/brand-logos/google-icon.svg" className="w-30px me-6" alt=""/>
															<div className="d-flex flex-column">
																<a href="#" className="fs-5 text-dark text-hover-primary fw-bolder">Google</a>
																<div className="fs-6 fw-bold text-muted">Plan properly your workflow</div>
															</div>
														</div>
														<div className="d-flex justify-content-end">
															<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
																<input className="form-check-input" name="google" type="checkbox" value="1" id="kt_modal_connected_accounts_google" checked={true} />
																<span className="form-check-label fw-bold text-muted" ></span>
															</label>
														</div>
													</div>
													<div className="separator separator-dashed my-5"></div>
													<div className="d-flex flex-stack">
														<div className="d-flex">
															<img src="/metronic8/demo1/assets/media/svg/brand-logos/github.svg" className="w-30px me-6" alt=""/>
															<div className="d-flex flex-column">
																<a href="#" className="fs-5 text-dark text-hover-primary fw-bolder">Github</a>
																<div className="fs-6 fw-bold text-muted">Keep eye on on your Repositories</div>
															</div>
														</div>
														<div className="d-flex justify-content-end">
															<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
																<input className="form-check-input" name="github" type="checkbox" value="1" id="kt_modal_connected_accounts_github" checked={true}/>
																<span className="form-check-label fw-bold text-muted" ></span>
															</label>
														</div>
													</div>
													<div className="separator separator-dashed my-5"></div>
													<div className="d-flex flex-stack">
														<div className="d-flex">
															<img src="/metronic8/demo1/assets/media/svg/brand-logos/slack-icon.svg" className="w-30px me-6" alt=""/>
															<div className="d-flex flex-column">
																<a href="#" className="fs-5 text-dark text-hover-primary fw-bolder">Slack</a>
																<div className="fs-6 fw-bold text-muted">Integrate Projects Discussions</div>
															</div>
														</div>
														<div className="d-flex justify-content-end">
															<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
																<input className="form-check-input" name="slack" type="checkbox" value="1" id="kt_modal_connected_accounts_slack"/>
																<span className="form-check-label fw-bold text-muted" ></span>
															</label>
														</div>
													</div>
												</div>
											</div>
											<div className="card-footer border-0 d-flex justify-content-center pt-0">
												<button className="btn btn-sm btn-light-primary">Save Changes</button>
											</div>
										</div>
									</div>
									<div className="flex-lg-row-fluid ms-lg-15">
										<ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
											<li className="nav-item">
												<a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_user_view_overview_tab">Overview</a>
											</li>
											<li className="nav-item">
												<a className="nav-link text-active-primary pb-4" data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_user_view_overview_security">Security</a>
											</li>
											<li className="nav-item">
												<a className="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#kt_user_view_overview_events_and_logs_tab">Events &amp; Logs</a>
											</li>
											
											<li className="nav-item ms-auto">
												<a href="#" className="btn btn-primary ps-7" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">Actions 
												<span className="svg-icon svg-icon-2 me-0">
													<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
															<polygon points="0 0 24 0 24 24 0 24"></polygon>
															<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
														</g>
													</svg>
												</span>
											</a>
												
												<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold py-4 w-250px fs-6" data-kt-menu="true">
													<div className="menu-item px-5">
														<div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">Payments</div>
													</div>
													
													<div className="menu-item px-5">
														<a href="#" className="menu-link px-5">Create invoice</a>
													</div>
												
													<div className="menu-item px-5">
														<a href="#" className="menu-link flex-stack px-5">Create payments 
														<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="Specify a target name for future usage and reference" aria-label="Specify a target name for future usage and reference"></i></a>
													</div>
													
													<div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start" data-kt-menu-flip="center, top">
														<a href="#" className="menu-link px-5">
															<span className="menu-title">Subscription</span>
															<span className="menu-arrow"></span>
														</a>
														<div className="menu-sub menu-sub-dropdown w-175px py-4">
															
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-5">Apps</a>
															</div>
															
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-5">Billing</a>
															</div>
															
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-5">Statements</a>
															</div>
														
															<div className="separator my-2"></div>
															
															<div className="menu-item px-3">
																<div className="menu-content px-3">
																	<label className="form-check form-switch form-check-custom form-check-solid">
																		<input className="form-check-input w-30px h-20px" type="checkbox" value="" name="notifications" checked={true} id="kt_user_menu_notifications"/>
																		<span className="form-check-label text-muted fs-6" >Notifications</span>
																	</label>
																</div>
															</div>
															
														</div>
													</div>
													<div className="separator my-3"></div>
													
													<div className="menu-item px-5">
														<div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">Account</div>
													</div>
													<div className="menu-item px-5">
														<a href="#" className="menu-link px-5">Reports</a>
													</div>
													<div className="menu-item px-5 my-1">
														<a href="#" className="menu-link px-5">Account Settings</a>
													</div>
													<div className="menu-item px-5">
														<a href="#" className="menu-link text-danger px-5">Delete customer</a>
													</div>
												</div>
												
											</li>
										</ul>
										<div className="tab-content" id="myTabContent">
											<div className="tab-pane fade show active" id="kt_user_view_overview_tab" role="tabpanel">
												<div className="card card-flush mb-6 mb-xl-9">
													<div className="card-header mt-6">
														<div className="card-title flex-column">
															<h2 className="mb-1">User's Schedule</h2>
															<div className="fs-6 fw-bold text-muted">2 upcoming meetings</div>
														</div>
														
														<div className="card-toolbar">
															<button type="button" className="btn btn-light-primary btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_add_schedule"/>
															<span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.25" d="M4 4H20V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V4Z" fill="#12131A"></path>
																	<path d="M12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071L11 10.4142V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V10.4142L14.2929 11.7071C14.6834 12.0976 15.3166 12.0976 15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929L12.7071 7.29289Z" fill="#12131A"></path>
																	<path d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3V3Z" fill="#12131A"></path>
																</svg>
															</span>
														</div>
													</div>
													<div className="card-body p-9 pt-4">
														<ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2">
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_0">
																	<span className="opacity-50 fs-7 fw-bold">Su</span>
																	<span className="fs-6 fw-boldest">21</span>
																</a>
															</li>
															
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary active" data-bs-toggle="tab" href="#kt_schedule_day_1">
																	<span className="opacity-50 fs-7 fw-bold">Mo</span>
																	<span className="fs-6 fw-boldest">22</span>
																</a>
															</li>
														
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_2">
																	<span className="opacity-50 fs-7 fw-bold">Tu</span>
																	<span className="fs-6 fw-boldest">23</span>
																</a>
															</li>
														
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_3">
																	<span className="opacity-50 fs-7 fw-bold">We</span>
																	<span className="fs-6 fw-boldest">24</span>
																</a>
															</li>
															
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_4">
																	<span className="opacity-50 fs-7 fw-bold">Th</span>
																	<span className="fs-6 fw-boldest">25</span>
																</a>
															</li>
															
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_5">
																	<span className="opacity-50 fs-7 fw-bold">Fr</span>
																	<span className="fs-6 fw-boldest">26</span>
																</a>
															</li>
															
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_6">
																	<span className="opacity-50 fs-7 fw-bold">Sa</span>
																	<span className="fs-6 fw-boldest">27</span>
																</a>
															</li>
															
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_7">
																	<span className="opacity-50 fs-7 fw-bold">Su</span>
																	<span className="fs-6 fw-boldest">28</span>
																</a>
															</li>
															
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_8">
																	<span className="opacity-50 fs-7 fw-bold">Mo</span>
																	<span className="fs-6 fw-boldest">29</span>
																</a>
															</li>
															
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_9">
																	<span className="opacity-50 fs-7 fw-bold">Tu</span>
																	<span className="fs-6 fw-boldest">30</span>
																</a>
															</li>
															
															<li className="nav-item me-1">
																<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_10">
																	<span className="opacity-50 fs-7 fw-bold">We</span>
																	<span className="fs-6 fw-boldest">31</span>
																</a>
															</li>
														</ul>
														
														<div className="tab-content">
															<div id="kt_schedule_day_0" className="tab-pane fade show">
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">9:00 - 10:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Team Backlog Grooming Session</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Michael Walters</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">11:00 - 11:45 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																	
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Weekly Team Stand-Up</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Naomi Hayabusa</a></div>
																	
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">13:00 - 14:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Team Backlog Grooming Session</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Peter Marcus</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">10:00 - 11:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Weekly Team Stand-Up</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Michael Walters</a></div>
																		
																	</div>
																
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																
																</div>
														
															</div>
														
															<div id="kt_schedule_day_1" className="tab-pane fade show active">
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">14:30 - 15:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Committee Review Approvals</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Naomi Hayabusa</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">12:00 - 13:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Project Review &amp; Testing</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Mark Randall</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">13:00 - 14:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Committee Review Approvals</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Karina Clarke</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">13:00 - 14:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Development Team Capacity Review</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Peter Marcus</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">14:30 - 15:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Creative Content Initiative</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">David Stevenson</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																
																</div>
															
															</div>
															
															<div id="kt_schedule_day_2" className="tab-pane fade show">
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">9:00 - 10:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																	
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Team Backlog Grooming Session</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Kendell Trevor</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
															
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																
																	<div className="fw-bold ms-5">
																	
																		<div className="fs-7 mb-1">10:00 - 11:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Weekly Team Stand-Up</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Terry Robins</a></div>
																		
																	</div>
																
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																
																</div>
															
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">10:00 - 11:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Weekly Team Stand-Up</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Naomi Hayabusa</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
															
															</div>
															
															<div id="kt_schedule_day_3" className="tab-pane fade show">
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">16:30 - 17:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Michael Walters</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">10:00 - 11:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Team Backlog Grooming Session</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Naomi Hayabusa</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">11:00 - 11:45 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Caleb Donaldson</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
															</div>
															<div id="kt_schedule_day_4" className="tab-pane fade show">
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">10:00 - 11:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Marketing Campaign Discussion</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Karina Clarke</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">14:30 - 15:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Project Review &amp; Testing</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Sean Bean</a></div>
																	
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
															
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">14:30 - 15:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Creative Content Initiative</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Kendell Trevor</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">16:30 - 17:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Team Backlog Grooming Session</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Yannis Gloverson</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">16:30 - 17:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Committee Review Approvals</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Sean Bean</a></div>
																	</div>
																
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
															</div>
															
															<div id="kt_schedule_day_5" className="tab-pane fade show">
															
																<div className="d-flex flex-stack position-relative mt-6">
																
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																
																	<div className="fw-bold ms-5">
																	
																		<div className="fs-7 mb-1">13:00 - 14:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Project Review &amp; Testing</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Mark Randall</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">12:00 - 13:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Committee Review Approvals</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Peter Marcus</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																
																</div>
															
																<div className="d-flex flex-stack position-relative mt-6">
																
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">12:00 - 13:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Marketing Campaign Discussion</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Bob Harris</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
															
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">16:30 - 17:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Sales Pitch Proposal</a>
																	
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Karina Clarke</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																
																</div>
															
															</div>
															
															<div id="kt_schedule_day_6" className="tab-pane fade show">
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																	
																		<div className="fs-7 mb-1">9:00 - 10:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																	
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Development Team Capacity Review</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Bob Harris</a></div>
																	
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">10:00 - 11:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																	
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
																	
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Kendell Trevor</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">13:00 - 14:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Sales Pitch Proposal</a>
																	
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Karina Clarke</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
															</div>
															<div id="kt_schedule_day_7" className="tab-pane fade show">
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">12:00 - 13:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Team Backlog Grooming Session</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Terry Robins</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">13:00 - 14:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Caleb Donaldson</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">16:30 - 17:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Michael Walters</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
															
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">13:00 - 14:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Sales Pitch Proposal</a>
																	
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Yannis Gloverson</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
															</div>
															<div id="kt_schedule_day_8" className="tab-pane fade show">
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">13:00 - 14:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																	
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
																	
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Naomi Hayabusa</a></div>
																	</div>
																
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">14:30 - 15:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Development Team Capacity Review</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Walter White</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																
																		<div className="fs-7 mb-1">16:30 - 17:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Development Team Capacity Review</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Terry Robins</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">11:00 - 11:45 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Committee Review Approvals</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Caleb Donaldson</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
																
															</div>
															
															<div id="kt_schedule_day_9" className="tab-pane fade show">
																
																<div className="d-flex flex-stack position-relative mt-6">
																
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		
																		<div className="fs-7 mb-1">14:30 - 15:30 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Committee Review Approvals</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Peter Marcus</a></div>
																		
																	</div>
																
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																	
																</div>
															
																<div className="d-flex flex-stack position-relative mt-6">
																
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																	
																		<div className="fs-7 mb-1">9:00 - 10:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Committee Review Approvals</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Karina Clarke</a></div>
																		
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">10:00 - 11:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Sales Pitch Proposal</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Kendell Trevor</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">10:00 - 11:00 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																		
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Project Review &amp; Testing</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Michael Walters</a></div>
																	</div>
																	
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
															</div>
															<div id="kt_schedule_day_10" className="tab-pane fade show">
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">11:00 - 11:45 
																		<span className="fs-7 text-muted text-uppercase">am</span></div>
																	
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Development Team Capacity Review</a>
																		
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Mark Randall</a></div>
																	</div>
																
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">12:00 - 13:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Marketing Campaign Discussion</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Peter Marcus</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">12:00 - 13:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Mark Randall</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
																<div className="d-flex flex-stack position-relative mt-6">
																	<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
																	<div className="fw-bold ms-5">
																		<div className="fs-7 mb-1">12:00 - 13:00 
																		<span className="fs-7 text-muted text-uppercase">pm</span></div>
																		<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
																		<div className="fs-7 text-muted">Lead by 
																		<a href="#">Karina Clarke</a></div>
																	</div>
																	<a href="#" className="btn btn-light bnt-active-light-primary btn-sm">View</a>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="card card-flush mb-6 mb-xl-9">
													<div className="card-header mt-6">
														<div className="card-title flex-column">
															<h2 className="mb-1">User's Tasks</h2>
															<div className="fs-6 fw-bold text-muted">Total 25 tasks in backlog</div>
														</div>
														<div className="card-toolbar">
															<button type="button" className="btn btn-light-primary btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_add_task"/>
															<span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.25" d="M3 4C3 2.34315 4.34315 1 6 1H15.7574C16.553 1 17.3161 1.31607 17.8787 1.87868L20.1213 4.12132C20.6839 4.68393 21 5.44699 21 6.24264V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4Z" fill="#12131A"></path>
																	<path d="M15 1.89181C15 1.39927 15.3993 1 15.8918 1V1C16.6014 1 17.2819 1.28187 17.7836 1.78361L20.2164 4.21639C20.7181 4.71813 21 5.39863 21 6.10819V6.10819C21 6.60073 20.6007 7 20.1082 7H16C15.4477 7 15 6.55228 15 6V1.89181Z" fill="#12131A"></path>
																	<path d="M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V13H9C8.44771 13 8 13.4477 8 14C8 14.5523 8.44771 15 9 15H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H13V11Z" fill="#12131A"></path>
																</svg>
															</span>
														</div>
													</div>
													<div className="card-body d-flex flex-column">
														<div className="d-flex align-items-center position-relative mb-7">
															<div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
															<div className="fw-bold ms-5">
																<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary">Create FureStibe branding logo</a>
																<div className="fs-7 text-muted">Due in 1 day 
																<a href="#">Karina Clark</a></div>
															</div>
															<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
																<span className="svg-icon svg-icon-3">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<path opacity="0.25" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H17.5C19.9853 2 22 4.01472 22 6.5V6.5C22 8.98528 19.9853 11 17.5 11H6.5C4.01472 11 2 8.98528 2 6.5V6.5Z" fill="#12131A"></path>
																		<path d="M20 6.5C20 7.88071 18.8807 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z" fill="#12131A"></path>
																		<path opacity="0.25" d="M2 17.5C2 15.0147 4.01472 13 6.5 13H17.5C19.9853 13 22 15.0147 22 17.5V17.5C22 19.9853 19.9853 22 17.5 22H6.5C4.01472 22 2 19.9853 2 17.5V17.5Z" fill="#12131A"></path>
																		<path d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z" fill="#12131A"></path>
																	</svg>
																</span>
															</button>
															<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" data-kt-menu-id="kt-users-tasks">
																<div className="px-7 py-5">
																	<div className="fs-5 text-dark fw-bolder">Update Status</div>
																</div>
																<div className="separator border-gray-200"></div>
																<form className="form px-7 py-5 fv-plugins-bootstrap5 fv-plugins-framework" data-kt-menu-id="kt-users-tasks-form">
																	<div className="fv-row mb-10 fv-plugins-icon-container">
																		<label className="form-label fs-6 fw-bold">Status:</label>
																		<select className="form-select form-select-solid select2-hidden-accessible" name="task_status" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-hide-search="true" data-select2-id="select2-data-10-wqho" tabIndex={-1} aria-hidden="true">
																			<option data-select2-id="select2-data-12-uik0"></option>
																			<option value="1">Approved</option>
																			<option value="2">Pending</option>
																			<option value="3">In Process</option>
																			<option value="4">Rejected</option>
																		</select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-11-zxe4" style={{width: "100%"}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-task_status-6x-container" aria-controls="select2-task_status-6x-container"><span className="select2-selection__rendered" id="select2-task_status-6x-container" role="textbox" aria-readonly="true" title="Select option"><span className="select2-selection__placeholder">Select option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
																	<div className="fv-plugins-message-container invalid-feedback"></div></div>
																	<div className="d-flex justify-content-end">
																		<button type="button" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-users-update-task-status="reset">Reset</button>
																		<button type="submit" className="btn btn-sm btn-primary" data-kt-users-update-task-status="submit">
																			<span className="indicator-label">Apply</span>
																			<span className="indicator-progress">Please wait... 
																			<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
																		</button>
																	</div>
																<div></div></form>
															</div>
														</div>
														<div className="d-flex align-items-center position-relative mb-7">
															<div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
															<div className="fw-bold ms-5">
																<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary">Schedule a meeting with FireBear CTO John</a>
																<div className="fs-7 text-muted">Due in 3 days 
																<a href="#">Rober Doe</a></div>
															</div>
															<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
																<span className="svg-icon svg-icon-3">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<path opacity="0.25" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H17.5C19.9853 2 22 4.01472 22 6.5V6.5C22 8.98528 19.9853 11 17.5 11H6.5C4.01472 11 2 8.98528 2 6.5V6.5Z" fill="#12131A"></path>
																		<path d="M20 6.5C20 7.88071 18.8807 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z" fill="#12131A"></path>
																		<path opacity="0.25" d="M2 17.5C2 15.0147 4.01472 13 6.5 13H17.5C19.9853 13 22 15.0147 22 17.5V17.5C22 19.9853 19.9853 22 17.5 22H6.5C4.01472 22 2 19.9853 2 17.5V17.5Z" fill="#12131A"></path>
																		<path d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z" fill="#12131A"></path>
																	</svg>
																</span>
															</button>
															<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" data-kt-menu-id="kt-users-tasks">
																<div className="px-7 py-5">
																	<div className="fs-5 text-dark fw-bolder">Update Status</div>
																</div>
																<div className="separator border-gray-200"></div>
																<form className="form px-7 py-5 fv-plugins-bootstrap5 fv-plugins-framework" data-kt-menu-id="kt-users-tasks-form">
																	<div className="fv-row mb-10 fv-plugins-icon-container">
																		<label className="form-label fs-6 fw-bold">Status:</label>
																		<select className="form-select form-select-solid select2-hidden-accessible" name="task_status" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-hide-search="true" data-select2-id="select2-data-13-6yke" tabIndex={-1} aria-hidden="true">
																			<option data-select2-id="select2-data-15-qs5j"></option>
																			<option value="1">Approved</option>
																			<option value="2">Pending</option>
																			<option value="3">In Process</option>
																			<option value="4">Rejected</option>
																		</select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-14-8m7x" style={{width: "100%"}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-task_status-r0-container" aria-controls="select2-task_status-r0-container"><span className="select2-selection__rendered" id="select2-task_status-r0-container" role="textbox" aria-readonly="true" title="Select option"><span className="select2-selection__placeholder">Select option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
																	<div className="fv-plugins-message-container invalid-feedback"></div></div>
																	<div className="d-flex justify-content-end">
																		<button type="button" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-users-update-task-status="reset">Reset</button>
																		<button type="submit" className="btn btn-sm btn-primary" data-kt-users-update-task-status="submit">
																			<span className="indicator-label">Apply</span>
																			<span className="indicator-progress">Please wait... 
																			<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
																		</button>
																	</div>
																<div></div></form>
															</div>
														</div>
														<div className="d-flex align-items-center position-relative mb-7">
															<div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
															<div className="fw-bold ms-5">
																<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary">9 Degree Project Estimation</a>
																<div className="fs-7 text-muted">Due in 1 week 
																<a href="#">Neil Owen</a></div>
															</div>
															<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
																<span className="svg-icon svg-icon-3">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<path opacity="0.25" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H17.5C19.9853 2 22 4.01472 22 6.5V6.5C22 8.98528 19.9853 11 17.5 11H6.5C4.01472 11 2 8.98528 2 6.5V6.5Z" fill="#12131A"></path>
																		<path d="M20 6.5C20 7.88071 18.8807 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z" fill="#12131A"></path>
																		<path opacity="0.25" d="M2 17.5C2 15.0147 4.01472 13 6.5 13H17.5C19.9853 13 22 15.0147 22 17.5V17.5C22 19.9853 19.9853 22 17.5 22H6.5C4.01472 22 2 19.9853 2 17.5V17.5Z" fill="#12131A"></path>
																		<path d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z" fill="#12131A"></path>
																	</svg>
																</span>
															</button>
															<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" data-kt-menu-id="kt-users-tasks">
																<div className="px-7 py-5">
																	<div className="fs-5 text-dark fw-bolder">Update Status</div>
																</div>
																<div className="separator border-gray-200"></div>
																<form className="form px-7 py-5 fv-plugins-bootstrap5 fv-plugins-framework" data-kt-menu-id="kt-users-tasks-form">
																	<div className="fv-row mb-10 fv-plugins-icon-container">
																		<label className="form-label fs-6 fw-bold">Status:</label>
																		<select className="form-select form-select-solid select2-hidden-accessible" name="task_status" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-hide-search="true" data-select2-id="select2-data-16-6n0e" tabIndex={-1} aria-hidden="true">
																			<option data-select2-id="select2-data-18-u2a4"></option>
																			<option value="1">Approved</option>
																			<option value="2">Pending</option>
																			<option value="3">In Process</option>
																			<option value="4">Rejected</option>
																		</select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-17-qtfh" style={{width: "100%"}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-task_status-14-container" aria-controls="select2-task_status-14-container"><span className="select2-selection__rendered" id="select2-task_status-14-container" role="textbox" aria-readonly="true" title="Select option"><span className="select2-selection__placeholder">Select option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
																	<div className="fv-plugins-message-container invalid-feedback"></div></div>
																	<div className="d-flex justify-content-end">
																		<button type="button" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-users-update-task-status="reset">Reset</button>
																		<button type="submit" className="btn btn-sm btn-primary" data-kt-users-update-task-status="submit">
																			<span className="indicator-label">Apply</span>
																			<span className="indicator-progress">Please wait... 
																			<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
																		</button>
																	</div>
																<div></div></form>
															</div>
														</div>
														<div className="d-flex align-items-center position-relative mb-7">
															<div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
															<div className="fw-bold ms-5">
																<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary">Dashboard UI &amp; UX for Leafr CRM</a>
																<div className="fs-7 text-muted">Due in 1 week 
																<a href="#">Olivia Wild</a></div>
															</div>
															<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
																<span className="svg-icon svg-icon-3">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<path opacity="0.25" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H17.5C19.9853 2 22 4.01472 22 6.5V6.5C22 8.98528 19.9853 11 17.5 11H6.5C4.01472 11 2 8.98528 2 6.5V6.5Z" fill="#12131A"></path>
																		<path d="M20 6.5C20 7.88071 18.8807 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z" fill="#12131A"></path>
																		<path opacity="0.25" d="M2 17.5C2 15.0147 4.01472 13 6.5 13H17.5C19.9853 13 22 15.0147 22 17.5V17.5C22 19.9853 19.9853 22 17.5 22H6.5C4.01472 22 2 19.9853 2 17.5V17.5Z" fill="#12131A"></path>
																		<path d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z" fill="#12131A"></path>
																	</svg>
																</span>
															</button>
															<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" data-kt-menu-id="kt-users-tasks">
																<div className="px-7 py-5">
																	<div className="fs-5 text-dark fw-bolder">Update Status</div>
																</div>
																<div className="separator border-gray-200"></div>
																<form className="form px-7 py-5 fv-plugins-bootstrap5 fv-plugins-framework" data-kt-menu-id="kt-users-tasks-form">
																	<div className="fv-row mb-10 fv-plugins-icon-container">
																		<label className="form-label fs-6 fw-bold">Status:</label>
																		<select className="form-select form-select-solid select2-hidden-accessible" name="task_status" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-hide-search="true" data-select2-id="select2-data-19-moa9" tabIndex={-1} aria-hidden="true">
																			<option data-select2-id="select2-data-21-hkna"></option>
																			<option value="1">Approved</option>
																			<option value="2">Pending</option>
																			<option value="3">In Process</option>
																			<option value="4">Rejected</option>
																		</select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-20-b8uf" style={{width: "100%"}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-task_status-v6-container" aria-controls="select2-task_status-v6-container"><span className="select2-selection__rendered" id="select2-task_status-v6-container" role="textbox" aria-readonly="true" title="Select option"><span className="select2-selection__placeholder">Select option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
																	<div className="fv-plugins-message-container invalid-feedback"></div></div>
																	<div className="d-flex justify-content-end">
																		<button type="button" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-users-update-task-status="reset">Reset</button>
																		<button type="submit" className="btn btn-sm btn-primary" data-kt-users-update-task-status="submit">
																			<span className="indicator-label">Apply</span>
																			<span className="indicator-progress">Please wait... 
																			<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
																		</button>
																	</div>
																<div></div></form>
															</div>
														</div>
														<div className="d-flex align-items-center position-relative">
															<div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
															<div className="fw-bold ms-5">
																<a href="#" className="fs-5 fw-bolder text-dark text-hover-primary">Mivy App R&amp;D, Meeting with clients</a>
																<div className="fs-7 text-muted">Due in 2 weeks 
																<a href="#">Sean Bean</a></div>
															</div>
															<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
																<span className="svg-icon svg-icon-3">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<path opacity="0.25" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H17.5C19.9853 2 22 4.01472 22 6.5V6.5C22 8.98528 19.9853 11 17.5 11H6.5C4.01472 11 2 8.98528 2 6.5V6.5Z" fill="#12131A"></path>
																		<path d="M20 6.5C20 7.88071 18.8807 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z" fill="#12131A"></path>
																		<path opacity="0.25" d="M2 17.5C2 15.0147 4.01472 13 6.5 13H17.5C19.9853 13 22 15.0147 22 17.5V17.5C22 19.9853 19.9853 22 17.5 22H6.5C4.01472 22 2 19.9853 2 17.5V17.5Z" fill="#12131A"></path>
																		<path d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z" fill="#12131A"></path>
																	</svg>
																</span>
															</button>
															<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" data-kt-menu-id="kt-users-tasks">
																<div className="px-7 py-5">
																	<div className="fs-5 text-dark fw-bolder">Update Status</div>
																</div>
																<div className="separator border-gray-200"></div>
																<form className="form px-7 py-5 fv-plugins-bootstrap5 fv-plugins-framework" data-kt-menu-id="kt-users-tasks-form">
																	<div className="fv-row mb-10 fv-plugins-icon-container">
																		<label className="form-label fs-6 fw-bold">Status:</label>
																		<select className="form-select form-select-solid select2-hidden-accessible" name="task_status" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-hide-search="true" data-select2-id="select2-data-22-ubc1" tabIndex={-1} aria-hidden="true">
																			<option data-select2-id="select2-data-24-0htk"></option>
																			<option value="1">Approved</option>
																			<option value="2">Pending</option>
																			<option value="3">In Process</option>
																			<option value="4">Rejected</option>
																		</select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-23-wfki" style={{width: "100%"}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-task_status-be-container" aria-controls="select2-task_status-be-container"><span className="select2-selection__rendered" id="select2-task_status-be-container" role="textbox" aria-readonly="true" title="Select option"><span className="select2-selection__placeholder">Select option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
																	<div className="fv-plugins-message-container invalid-feedback"></div></div>
																	<div className="d-flex justify-content-end">
																		<button type="button" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-users-update-task-status="reset">Reset</button>
																		<button type="submit" className="btn btn-sm btn-primary" data-kt-users-update-task-status="submit">
																			<span className="indicator-label">Apply</span>
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
											<div className="tab-pane fade" id="kt_user_view_overview_security" role="tabpanel">
												<div className="card pt-4 mb-6 mb-xl-9">
													<div className="card-header border-0">
														<div className="card-title">
															<h2>Profile</h2>
														</div>
													</div>
													<div className="card-body pt-0 pb-5">
														<div className="table-responsive">
															<table className="table align-middle table-row-dashed gy-5" id="kt_table_users_login_session">
																<tbody className="fs-6 fw-bold text-gray-600">
																	<tr>
																		<td>Email</td>
																		<td>e.smith@kpmg.com.au</td>
																		<td className="text-end">
																			<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" data-bs-toggle="modal" data-bs-target="#kt_modal_update_email">
																				<span className="svg-icon svg-icon-3">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.25" x="3" y="21" width="18" height="2" rx="1" fill="#191213"></rect>
																						<path fill-rule="evenodd" clip-rule="evenodd" d="M4.08576 11.5L3.58579 12C3.21071 12.375 3 12.8838 3 13.4142V17C3 18.1045 3.89543 19 5 19H8.58579C9.11622 19 9.62493 18.7893 10 18.4142L10.5 17.9142L4.08576 11.5Z" fill="#121319"></path>
																						<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 10.0858L11.5858 4L18 10.4142L11.9142 16.5L5.5 10.0858Z" fill="#121319"></path>
																						<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M18.1214 1.70705C16.9498 0.535476 15.0503 0.535476 13.8787 1.70705L13 2.58576L19.4142 8.99997L20.2929 8.12126C21.4645 6.94969 21.4645 5.0502 20.2929 3.87862L18.1214 1.70705Z" fill="#191213"></path>
																					</svg>
																				</span>
																		
																			</button>
																		</td>
																	</tr>
																	<tr>
																		<td>Password</td>
																		<td>******</td>
																		<td className="text-end">
																			<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" data-bs-toggle="modal" data-bs-target="#kt_modal_update_password">
																			
																				<span className="svg-icon svg-icon-3">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.25" x="3" y="21" width="18" height="2" rx="1" fill="#191213"></rect>
																						<path fill-rule="evenodd" clip-rule="evenodd" d="M4.08576 11.5L3.58579 12C3.21071 12.375 3 12.8838 3 13.4142V17C3 18.1045 3.89543 19 5 19H8.58579C9.11622 19 9.62493 18.7893 10 18.4142L10.5 17.9142L4.08576 11.5Z" fill="#121319"></path>
																						<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 10.0858L11.5858 4L18 10.4142L11.9142 16.5L5.5 10.0858Z" fill="#121319"></path>
																						<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M18.1214 1.70705C16.9498 0.535476 15.0503 0.535476 13.8787 1.70705L13 2.58576L19.4142 8.99997L20.2929 8.12126C21.4645 6.94969 21.4645 5.0502 20.2929 3.87862L18.1214 1.70705Z" fill="#191213"></path>
																					</svg>
																				</span>
																				
																			</button>
																		</td>
																	</tr>
																	<tr>
																		<td>Role</td>
																		<td>Administrator</td>
																		<td className="text-end">
																			<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">
																			
																				<span className="svg-icon svg-icon-3">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.25" x="3" y="21" width="18" height="2" rx="1" fill="#191213"></rect>
																						<path fill-rule="evenodd" clip-rule="evenodd" d="M4.08576 11.5L3.58579 12C3.21071 12.375 3 12.8838 3 13.4142V17C3 18.1045 3.89543 19 5 19H8.58579C9.11622 19 9.62493 18.7893 10 18.4142L10.5 17.9142L4.08576 11.5Z" fill="#121319"></path>
																						<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 10.0858L11.5858 4L18 10.4142L11.9142 16.5L5.5 10.0858Z" fill="#121319"></path>
																						<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M18.1214 1.70705C16.9498 0.535476 15.0503 0.535476 13.8787 1.70705L13 2.58576L19.4142 8.99997L20.2929 8.12126C21.4645 6.94969 21.4645 5.0502 20.2929 3.87862L18.1214 1.70705Z" fill="#191213"></path>
																					</svg>
																				</span>
																			</button>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
												<div className="card pt-4 mb-6 mb-xl-9">
													<div className="card-header border-0">
														<div className="card-title flex-column">
															<h2 className="mb-1">Two Step Authentication</h2>
															<div className="fs-6 fw-bold text-muted">Keep your account extra secure with a second authentication step.</div>
														</div>
														<div className="card-toolbar">
															<button type="button" className="btn btn-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end"/>
															<span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.11117 13.2288C3.27137 11.0124 5.01376 9.29156 7.2315 9.15059C8.55778 9.06629 10.1795 9 12 9C13.8205 9 15.4422 9.06629 16.7685 9.15059C18.9862 9.29156 20.7286 11.0124 20.8888 13.2288C20.9535 14.1234 21 15.085 21 16C21 16.915 20.9535 17.8766 20.8888 18.7712C20.7286 20.9876 18.9862 22.7084 16.7685 22.8494C15.4422 22.9337 13.8205 23 12 23C10.1795 23 8.55778 22.9337 7.23151 22.8494C5.01376 22.7084 3.27137 20.9876 3.11118 18.7712C3.04652 17.8766 3 16.915 3 16C3 15.085 3.04652 14.1234 3.11117 13.2288Z" fill="#12131A"></path>
																	<path fill-rule="evenodd" clip-rule="evenodd" d="M13 16.7324C13.5978 16.3866 14 15.7403 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 15.7403 10.4022 16.3866 11 16.7324V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V16.7324Z" fill="#12131A"></path>
																	<path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10V6Z" fill="#12131A"></path>
																</svg>
															</span>
															<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4" data-kt-menu="true">
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_add_auth_app">Use authenticator app</a>
																</div>
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_add_one_time_password">Enable one-time password</a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-body pb-5">
														<div className="d-flex flex-stack">
															<div className="d-flex flex-column">
																<span>SMS</span>
																<span className="text-muted fs-6">+61 412 345 678</span>
															</div>
															<div className="d-flex justify-content-end align-items-center">
																<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto me-5" data-bs-toggle="modal" data-bs-target="#kt_modal_add_one_time_password">
																	<span className="svg-icon svg-icon-3">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.25" x="3" y="21" width="18" height="2" rx="1" fill="#191213"></rect>
																			<path fill-rule="evenodd" clip-rule="evenodd" d="M4.08576 11.5L3.58579 12C3.21071 12.375 3 12.8838 3 13.4142V17C3 18.1045 3.89543 19 5 19H8.58579C9.11622 19 9.62493 18.7893 10 18.4142L10.5 17.9142L4.08576 11.5Z" fill="#121319"></path>
																			<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 10.0858L11.5858 4L18 10.4142L11.9142 16.5L5.5 10.0858Z" fill="#121319"></path>
																			<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M18.1214 1.70705C16.9498 0.535476 15.0503 0.535476 13.8787 1.70705L13 2.58576L19.4142 8.99997L20.2929 8.12126C21.4645 6.94969 21.4645 5.0502 20.2929 3.87862L18.1214 1.70705Z" fill="#191213"></path>
																		</svg>
																	</span>
																</button>
																<button type="button" className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto" id="kt_users_delete_two_step">
																	<span className="svg-icon svg-icon-3">
																		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																				<rect x="0" y="0" width="24" height="24"></rect>
																				<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"></path>
																				<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"></path>
																			</g>
																		</svg>
																	</span>
																</button>
															</div>
														</div>
														<div className="separator separator-dashed my-5"></div>
														<div className="text-gray-600">If you lose your mobile device or security key, you can 
														<a href="#" className="me-1">generate a backup code</a>to sign in to your account.</div>
													</div>
												</div>
												<div className="card pt-4 mb-6 mb-xl-9">
													<div className="card-header border-0">
														<div className="card-title flex-column">
															<h2>Email Notifications</h2>
															<div className="fs-6 fw-bold text-muted">Choose what messages you???d like to receive for each of your accounts.</div>
														</div>
													</div>
													<div className="card-body">
														<form className="form" id="kt_users_email_notification_form">
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_0" type="checkbox" value="0" id="kt_modal_update_email_notification_0" checked={true}/>
																	<label className="form-check-label" >
																		<div className="fw-bolder">Successful Payments</div>
																		<div className="text-gray-600">Receive a notification for every successful payment.</div>
																	</label>
																</div>
															</div>
															<div className="separator separator-dashed my-5"></div>
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_1" type="checkbox" value="1" id="kt_modal_update_email_notification_1"/>
																	<label className="form-check-label" >
																		<div className="fw-bolder">Payouts</div>
																		<div className="text-gray-600">Receive a notification for every initiated payout.</div>
																	</label>
																</div>
															</div>
															<div className="separator separator-dashed my-5"></div>
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_2" type="checkbox" value="2" id="kt_modal_update_email_notification_2"/>
																	<label className="form-check-label">
																		<div className="fw-bolder">Application fees</div>
																		<div className="text-gray-600">Receive a notification each time you collect a fee from an account.</div>
																	</label>
																</div>
															</div>
															<div className="separator separator-dashed my-5"></div>
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_3" type="checkbox" value="3" id="kt_modal_update_email_notification_3" checked={true}/>
																	<label className="form-check-label">
																		<div className="fw-bolder">Disputes</div>
																		<div className="text-gray-600">Receive a notification if a payment is disputed by a customer and for dispute resolutions.</div>
																	</label>
																</div>
															</div>
															<div className="separator separator-dashed my-5"></div>
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_4" type="checkbox" value="4" id="kt_modal_update_email_notification_4" checked={true}/>
																	
																	<label className="form-check-label" >
																		<div className="fw-bolder">Payment reviews</div>
																		<div className="text-gray-600">Receive a notification if a payment is marked as an elevated risk.</div>
																	</label>
																</div>
															</div>
															<div className="separator separator-dashed my-5"></div>
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_5" type="checkbox" value="5" id="kt_modal_update_email_notification_5"/>
																	
																	<label className="form-check-label" >
																		<div className="fw-bolder">Mentions</div>
																		<div className="text-gray-600">Receive a notification if a teammate mentions you in a note.</div>
																	</label>
																</div>
															</div>
															<div className="separator separator-dashed my-5"></div>
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_6" type="checkbox" value="6" id="kt_modal_update_email_notification_6"/>
																	
																	<label className="form-check-label" >
																		<div className="fw-bolder">Invoice Mispayments</div>
																		<div className="text-gray-600">Receive a notification if a customer sends an incorrect amount to pay their invoice.</div>
																	</label>
																</div>
															</div>
															<div className="separator separator-dashed my-5"></div>
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_7" type="checkbox" value="7" id="kt_modal_update_email_notification_7"/>
																	<label className="form-check-label" >
																		<div className="fw-bolder">Webhooks</div>
																		<div className="text-gray-600">Receive notifications about consistently failing webhook endpoints.</div>
																	</label>
																</div>
															</div>
															<div className="separator separator-dashed my-5"></div>
															<div className="d-flex">
																<div className="form-check form-check-custom form-check-solid">
																	<input className="form-check-input me-3" name="email_notification_8" type="checkbox" value="8" id="kt_modal_update_email_notification_8"/>
																	
																	<label className="form-check-label">
																		<div className="fw-bolder">Trial</div>
																		<div className="text-gray-600">Receive helpful tips when you try out our products.</div>
																	</label>
																</div>
															</div>
															<div className="d-flex justify-content-end align-items-center mt-12">
																<button type="button" className="btn btn-light me-5" id="kt_users_email_notification_cancel">Cancel</button>
																<button type="button" className="btn btn-primary" id="kt_users_email_notification_submit">
																	<span className="indicator-label">Save</span>
																	<span className="indicator-progress">Please wait... 
																	<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
											<div className="tab-pane fade" id="kt_user_view_overview_events_and_logs_tab" role="tabpanel">
												<div className="card pt-4 mb-6 mb-xl-9">
													<div className="card-header border-0">
														<div className="card-title">
															<h2>Login Sessions</h2>
														</div>
														<div className="card-toolbar">
															<button type="button" className="btn btn-sm btn-flex btn-light-primary" id="kt_modal_sign_out_sesions"/>
															<span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.25" d="M13.1409 21.8611C11.5331 21.7101 10.3267 20.4628 10.2092 18.8523C10.0992 17.3432 10 15.118 10 12C10 8.882 10.0992 6.65682 10.2092 5.14773C10.3267 3.5372 11.5331 2.2899 13.1408 2.13886C13.9779 2.06022 14.9589 2 16 2C17.0411 2 18.0221 2.06022 18.8592 2.13886C20.4669 2.2899 21.6733 3.53721 21.7908 5.14773C21.9008 6.65683 22 8.882 22 12C22 15.118 21.9008 17.3432 21.7908 18.8523C21.6733 20.4628 20.4669 21.7101 18.8591 21.8611C18.0221 21.9398 17.0411 22 16 22C14.9589 22 13.9779 21.9398 13.1409 21.8611Z" fill="#12131A"></path>
																	<path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L5.41421 13L7.20711 14.7929Z" fill="#12131A"></path>
																</svg>
															</span>
														</div>
													</div>
													<div className="card-body pt-0 pb-5">
														<div className="table-responsive">
															<table className="table align-middle table-row-dashed gy-5" id="kt_table_users_login_session">
																<thead className="border-bottom border-gray-200 fs-7 fw-bolder">
																	<tr className="text-start text-muted text-uppercase gs-0">
																		<th className="min-w-100px">Location</th>
																		<th>Device</th>
																		<th>IP Address</th>
																		<th className="min-w-125px">Time</th>
																		<th className="min-w-70px">Actions</th>
																	</tr>
																</thead>
																<tbody className="fs-6 fw-bold text-gray-600">
																	<tr>
																		<td>Australia</td>
																		<td>Chome - Windows</td>
																		<td>207.11.15.110</td>
																		<td>23 seconds ago</td>
																		<td>Current session</td>
																	</tr>
																	<tr>
																		<td>Australia</td>
																		<td>Safari - iOS</td>
																		<td>207.15.39.65</td>
																		<td>3 days ago</td>
																		<td>
																			<a href="#" data-kt-users-sign-out="single_user">Sign out</a>
																		</td>
																	</tr>
																	<tr>
																		<td>Australia</td>
																		<td>Chrome - Windows</td>
																		<td>207.28.14.10</td>
																		<td>last week</td>
																		<td>Expired</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
												<div className="card pt-4 mb-6 mb-xl-9">
													<div className="card-header border-0">
														<div className="card-title">
															<h2>Logs</h2>
														</div>
														<div className="card-toolbar">
															<button type="button" className="btn btn-sm btn-light-primary"/>
															<span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<rect x="0" y="0" width="24" height="24"></rect>
																		<path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
																		<rect fill="#000000" opacity="0.3" transform="translate(12.000000, 8.000000) rotate(-180.000000) translate(-12.000000, -8.000000)" x="11" y="1" width="2" height="14" rx="1"></rect>
																		<path d="M7.70710678,15.7071068 C7.31658249,16.0976311 6.68341751,16.0976311 6.29289322,15.7071068 C5.90236893,15.3165825 5.90236893,14.6834175 6.29289322,14.2928932 L11.2928932,9.29289322 C11.6689749,8.91681153 12.2736364,8.90091039 12.6689647,9.25670585 L17.6689647,13.7567059 C18.0794748,14.1261649 18.1127532,14.7584547 17.7432941,15.1689647 C17.3738351,15.5794748 16.7415453,15.6127532 16.3310353,15.2432941 L12.0362375,11.3779761 L7.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000004, 12.499999) rotate(-180.000000) translate(-12.000004, -12.499999)"></path>
																	</g>
																</svg>
															</span>
														</div>
													</div>
												
													<div className="card-body py-0">
														<div className="table-responsive">
															<table className="table align-middle table-row-dashed fw-bold text-gray-600 fs-6 gy-5" id="kt_table_users_logs">
																<tbody>
																	<tr>
																		<td className="min-w-70px">
																			<div className="badge badge-light-warning">404 WRN</div>
																		</td>
																		<td>POST /v1/customer/c_61229730ac68b/not_found</td>
																		<td className="pe-0 text-end min-w-200px">10 Nov 2021, 6:05 pm</td>
																	</tr>
																	<tr>
																		<td className="min-w-70px">
																			<div className="badge badge-light-success">200 OK</div>
																		</td>
																		<td>POST /v1/invoices/in_1634_1551/payment</td>
																		<td className="pe-0 text-end min-w-200px">19 Aug 2021, 5:30 pm</td>
																	</tr>
																	<tr>
																		<td className="min-w-70px">
																			<div className="badge badge-light-danger">500 ERR</div>
																		</td>
																		<td>POST /v1/invoice/in_9479_8558/invalid</td>
																		<td className="pe-0 text-end min-w-200px">10 Mar 2021, 6:05 pm</td>
																	</tr>
																	<tr>
																		<td className="min-w-70px">
																			<div className="badge badge-light-success">200 OK</div>
																		</td>
																		<td>POST /v1/invoices/in_1117_6481/payment</td>
																		<td className="pe-0 text-end min-w-200px">20 Dec 2021, 11:05 am</td>
																	</tr>
																	<tr>
																		<td className="min-w-70px">
																			<div className="badge badge-light-warning">404 WRN</div>
																		</td>
																		<td>POST /v1/customer/c_61229730ac68b/not_found</td>
																		<td className="pe-0 text-end min-w-200px">10 Mar 2021, 11:05 am</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
												<div className="card pt-4 mb-6 mb-xl-9">
													<div className="card-header border-0">
														<div className="card-title">
															<h2>Events</h2>
														</div>
														<div className="card-toolbar">
															<button type="button" className="btn btn-sm btn-light-primary"/>
															<span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<rect x="0" y="0" width="24" height="24"></rect>
																		<path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
																		<rect fill="#000000" opacity="0.3" transform="translate(12.000000, 8.000000) rotate(-180.000000) translate(-12.000000, -8.000000)" x="11" y="1" width="2" height="14" rx="1"></rect>
																		<path d="M7.70710678,15.7071068 C7.31658249,16.0976311 6.68341751,16.0976311 6.29289322,15.7071068 C5.90236893,15.3165825 5.90236893,14.6834175 6.29289322,14.2928932 L11.2928932,9.29289322 C11.6689749,8.91681153 12.2736364,8.90091039 12.6689647,9.25670585 L17.6689647,13.7567059 C18.0794748,14.1261649 18.1127532,14.7584547 17.7432941,15.1689647 C17.3738351,15.5794748 16.7415453,15.6127532 16.3310353,15.2432941 L12.0362375,11.3779761 L7.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000004, 12.499999) rotate(-180.000000) translate(-12.000004, -12.499999)"></path>
																	</g>
																</svg>
															</span>
														</div>
													</div>
													<div className="card-body py-0">
														<table className="table align-middle table-row-dashed fs-6 text-gray-600 fw-bold gy-5" id="kt_table_customers_events">
															<tbody>
																<tr>
																	<td className="min-w-400px">Invoice 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary me-1">#KIO-45656</a>status has changed from 
																	<span className="badge badge-light-succees me-1">In Transit</span>to 
																	<span className="badge badge-light-success">Approved</span></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">22 Sep 2021, 8:43 pm</td>
																</tr>
																<tr>
																	<td className="min-w-400px">Invoice 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary me-1">#WER-45670</a>is 
																	<span className="badge badge-light-info">In Progress</span></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">10 Mar 2021, 2:40 pm</td>
																</tr>
																<tr>
																	<td className="min-w-400px">
																	<a href="#" className="text-gray-600 text-hover-primary me-1">Brian Cox</a>has made payment to 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary">#OLP-45690</a></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">25 Oct 2021, 6:05 pm</td>
																</tr>
																<tr>
																	<td className="min-w-400px">
																	<a href="#" className="text-gray-600 text-hover-primary me-1">Brian Cox</a>has made payment to 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary">#OLP-45690</a></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">19 Aug 2021, 9:23 pm</td>
																</tr>
																<tr>
																	<td className="min-w-400px">
																	<a href="#" className="text-gray-600 text-hover-primary me-1">Melody Macy</a>has made payment to 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary">#XRS-45670</a></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">05 May 2021, 11:30 am</td>
																</tr>
																<tr>
																	<td className="min-w-400px">
																	<a href="#" className="text-gray-600 text-hover-primary me-1">Melody Macy</a>has made payment to 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary">#XRS-45670</a></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">25 Jul 2021, 10:30 am</td>
																</tr>
																<tr>
																	<td className="min-w-400px">Invoice 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary me-1">#DER-45645</a>status has changed from 
																	<span className="badge badge-light-info me-1">In Progress</span>to 
																	<span className="badge badge-light-primary">In Transit</span></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">10 Mar 2021, 5:30 pm</td>
																</tr>
																<tr>
																	<td className="min-w-400px">
																	<a href="#" className="text-gray-600 text-hover-primary me-1">Max Smith</a>has made payment to 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary">#SDK-45670</a></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">10 Nov 2021, 6:43 am</td>
																</tr>
																<tr>
																	<td className="min-w-400px">
																	<a href="#" className="text-gray-600 text-hover-primary me-1">Max Smith</a>has made payment to 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary">#SDK-45670</a></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">21 Feb 2021, 11:05 am</td>
																</tr>
																<tr>
																	<td className="min-w-400px">Invoice 
																	<a href="#" className="fw-bolder text-gray-900 text-hover-primary me-1">#WER-45670</a>is 
																	<span className="badge badge-light-info">In Progress</span></td>
																	<td className="pe-0 text-gray-600 text-end min-w-200px">05 May 2021, 6:05 pm</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal fade" id="kt_modal_update_details" tabIndex={-1} aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered mw-650px">
										<div className="modal-content">
											<form className="form" action="#" id="kt_modal_update_user_form">
												<div className="modal-header" id="kt_modal_update_user_header">
													<h2 className="fw-bolder">Update User Details</h2>
													<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
												<div className="modal-body py-10 px-lg-17">
													<div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_user_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_user_header" data-kt-scroll-wrappers="#kt_modal_update_user_scroll" data-kt-scroll-offset="300px" style={{maxHeight: "83px"}}>
														<div className="fw-boldest fs-3 rotate collapsible mb-7" data-bs-toggle="collapse"  role="button" aria-expanded="false" aria-controls="kt_modal_update_user_user_info">User Information 
														<span className="ms-2 rotate-180">
															<span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<polygon points="0 0 24 0 24 24 0 24"></polygon>
																		<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
																	</g>
																</svg>
															</span>
														</span></div>
														<div id="kt_modal_update_user_user_info" className="collapse show">
															<div className="mb-7">
																<label className="fs-6 fw-bold mb-2">
																	<span>Update Avatar</span>
																	<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="Allowed file types: png, jpg, jpeg." aria-label="Allowed file types: png, jpg, jpeg."></i>
																</label>
																<div className="mt-1">
																	<div className="image-input image-input-outline" data-kt-image-input="true" style={{backgroundImage: "url(/metronic8/demo1/assets/media/avatars/blank.png)"}}>
																		<div className="image-input-wrapper w-125px h-125px" style={{backgroundImage: "url(/metronic8/demo1/assets/media/avatars/150-1.jpg"}}></div>
																		<label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="" data-bs-original-title="Change avatar">
																			<i className="bi bi-pencil-fill fs-7"></i>
																			<input type="file" name="avatar" accept=".png, .jpg, .jpeg"/>
																			<input type="hidden" name="avatar_remove"/>
																		</label>
																	
																		<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="" data-bs-original-title="Cancel avatar">
																			<i className="bi bi-x fs-2"></i>
																		</span>
																		
																		<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove avatar">
																			<i className="bi bi-x fs-2"></i>
																		</span>
																	</div>
																</div>
															</div>
															<div className="fv-row mb-7">
																<label className="fs-6 fw-bold mb-2">Name</label>
																<input type="text" className="form-control form-control-solid" placeholder="" name="name" value="Emma Smith"/>
															</div>
															<div className="fv-row mb-7">
																<label className="fs-6 fw-bold mb-2">
																	<span>Email</span>
																	<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="Email address must be active" aria-label="Email address must be active"></i>
																</label>
																<input type="email" className="form-control form-control-solid" placeholder="" name="email" value="e.smith@kpmg.com.au"/>
															</div>
															<div className="fv-row mb-7">
																<label className="fs-6 fw-bold mb-2">Description</label>
																<input type="text" className="form-control form-control-solid" placeholder="" name="description"/>
															</div>
															<div className="fv-row mb-15">
																<label className="fs-6 fw-bold mb-2">Language</label>
																<select name="language" aria-label="Select a Language" data-control="select2" data-placeholder="Select a Language..." className="form-select form-select-solid select2-hidden-accessible" data-dropdown-parent="#kt_modal_update_details" data-select2-id="select2-data-25-g28s" tabIndex={-1} aria-hidden="true">
																	<option data-select2-id="select2-data-27-d06o"></option>
																	<option value="id">Bahasa Indonesia - Indonesian</option>
																	<option value="msa">Bahasa Melayu - Malay</option>
																	<option value="ca">Catal?? - Catalan</option>
																	<option value="cs">??e??tina - Czech</option>
																	<option value="da">Dansk - Danish</option>
																	<option value="de">Deutsch - German</option>
																	<option value="en">English</option>
																	<option value="en-gb">English UK - British English</option>
																	<option value="es">Espa??ol - Spanish</option>
																	<option value="fil">Filipino</option>
																	<option value="fr">Fran??ais - French</option>
																	<option value="ga">Gaeilge - Irish (beta)</option>
																	<option value="gl">Galego - Galician (beta)</option>
																	<option value="hr">Hrvatski - Croatian</option>
																	<option value="it">Italiano - Italian</option>
																	<option value="hu">Magyar - Hungarian</option>
																	<option value="nl">Nederlands - Dutch</option>
																	<option value="no">Norsk - Norwegian</option>
																	<option value="pl">Polski - Polish</option>
																	<option value="pt">Portugu??s - Portuguese</option>
																	<option value="ro">Rom??n?? - Romanian</option>
																	<option value="sk">Sloven??ina - Slovak</option>
																	<option value="fi">Suomi - Finnish</option>
																	<option value="sv">Svenska - Swedish</option>
																	<option value="vi">Ti???ng Vi???t - Vietnamese</option>
																	<option value="tr">T??rk??e - Turkish</option>
																	<option value="el">???????????????? - Greek</option>
																	<option value="bg">?????????????????? ???????? - Bulgarian</option>
																	<option value="ru">?????????????? - Russian</option>
																	<option value="sr">???????????? - Serbian</option>
																	<option value="uk">???????????????????? ???????? - Ukrainian</option>
																	<option value="he">???????????????? - Hebrew</option>
																	<option value="ur">???????? - Urdu (beta)</option>
																	<option value="ar">?????????????? - Arabic</option>
																	<option value="fa">?????????? - Persian</option>
																	<option value="mr">??????????????? - Marathi</option>
																	<option value="hi">?????????????????? - Hindi</option>
																	<option value="bn">??????????????? - Bangla</option>
																	<option value="gu">????????????????????? - Gujarati</option>
																	<option value="ta">??????????????? - Tamil</option>
																	<option value="kn">??????????????? - Kannada</option>
																	<option value="th">????????????????????? - Thai</option>
																	<option value="ko">????????? - Korean</option>
																	<option value="ja">????????? - Japanese</option>
																	<option value="zh-cn">???????????? - Simplified Chinese</option>
																	<option value="zh-tw">???????????? - Traditional Chinese</option>
																</select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-26-3rmb" style={{width: "100%"}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-language-i7-container" aria-controls="select2-language-i7-container"><span className="select2-selection__rendered" id="select2-language-i7-container" role="textbox" aria-readonly="true" title="Select a Language..."><span className="select2-selection__placeholder">Select a Language...</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
															</div>
														</div>
														<div className="fw-boldest fs-3 rotate collapsible mb-7" data-bs-toggle="collapse"  role="button" aria-expanded="false" aria-controls="kt_modal_update_user_address">Address Details 
														<span className="ms-2 rotate-180">
															<span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<polygon points="0 0 24 0 24 24 0 24"></polygon>
																		<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
																	</g>
																</svg>
															</span>
														</span></div>
														<div id="kt_modal_update_user_address" className="collapse show">
															<div className="d-flex flex-column mb-7 fv-row">
																<label className="fs-6 fw-bold mb-2">Address Line 1</label>
																<input className="form-control form-control-solid" placeholder="" name="address1" value="101, Collins Street"/>
															</div>
															<div className="d-flex flex-column mb-7 fv-row">
																<label className="fs-6 fw-bold mb-2">Address Line 2</label>
																<input className="form-control form-control-solid" placeholder="" name="address2"/>
															</div>
															<div className="d-flex flex-column mb-7 fv-row">
																<label className="fs-6 fw-bold mb-2">Town</label>
																<input className="form-control form-control-solid" placeholder="" name="city" value="Melbourne"/>
															</div>
															<div className="row g-9 mb-7">
																<div className="col-md-6 fv-row">
																	<label className="fs-6 fw-bold mb-2">State / Province</label>
																	<input className="form-control form-control-solid" placeholder="" name="state" value="Victoria"/>
																</div>
																<div className="col-md-6 fv-row">
																	<label className="fs-6 fw-bold mb-2">Post Code</label>
																	<input className="form-control form-control-solid" placeholder="" name="postcode" value="3000"/>
																</div>
															</div>
															<div className="d-flex flex-column mb-7 fv-row">
																<label className="fs-6 fw-bold mb-2">
																	<span>Country</span>
																	<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="Country of origination" aria-label="Country of origination"></i>
																</label>
																<select name="country" aria-label="Select a Country" data-control="select2" data-placeholder="Select a Country..." className="form-select form-select-solid select2-hidden-accessible" data-dropdown-parent="#kt_modal_update_details" data-select2-id="select2-data-28-8f5y" tabIndex={-1} aria-hidden="true">
																	<option value="" data-select2-id="select2-data-30-4ef9">Select a Country...</option>
																	<option value="AF">Afghanistan</option>
																	<option value="AX">Aland Islands</option>
																	<option value="AL">Albania</option>
																	<option value="DZ">Algeria</option>
																	<option value="AS">American Samoa</option>
																	<option value="AD">Andorra</option>
																	<option value="AO">Angola</option>
																	<option value="AI">Anguilla</option>
																	<option value="AQ">Antarctica</option>
																	<option value="AG">Antigua and Barbuda</option>
																	<option value="AR">Argentina</option>
																	<option value="AM">Armenia</option>
																	<option value="AW">Aruba</option>
																	<option value="AU">Australia</option>
																	<option value="AT">Austria</option>
																	<option value="AZ">Azerbaijan</option>
																	<option value="BS">Bahamas</option>
																	<option value="BH">Bahrain</option>
																	<option value="BD">Bangladesh</option>
																	<option value="BB">Barbados</option>
																	<option value="BY">Belarus</option>
																	<option value="BE">Belgium</option>
																	<option value="BZ">Belize</option>
																	<option value="BJ">Benin</option>
																	<option value="BM">Bermuda</option>
																	<option value="BT">Bhutan</option>
																	<option value="BO">Bolivia, Plurinational State of</option>
																	<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
																	<option value="BA">Bosnia and Herzegovina</option>
																	<option value="BW">Botswana</option>
																	<option value="BV">Bouvet Island</option>
																	<option value="BR">Brazil</option>
																	<option value="IO">British Indian Ocean Territory</option>
																	<option value="BN">Brunei Darussalam</option>
																	<option value="BG">Bulgaria</option>
																	<option value="BF">Burkina Faso</option>
																	<option value="BI">Burundi</option>
																	<option value="KH">Cambodia</option>
																	<option value="CM">Cameroon</option>
																	<option value="CA">Canada</option>
																	<option value="CV">Cape Verde</option>
																	<option value="KY">Cayman Islands</option>
																	<option value="CF">Central African Republic</option>
																	<option value="TD">Chad</option>
																	<option value="CL">Chile</option>
																	<option value="CN">China</option>
																	<option value="CX">Christmas Island</option>
																	<option value="CC">Cocos (Keeling) Islands</option>
																	<option value="CO">Colombia</option>
																	<option value="KM">Comoros</option>
																	<option value="CG">Congo</option>
																	<option value="CD">Congo, the Democratic Republic of the</option>
																	<option value="CK">Cook Islands</option>
																	<option value="CR">Costa Rica</option>
																	<option value="CI">C??te d'Ivoire</option>
																	<option value="HR">Croatia</option>
																	<option value="CU">Cuba</option>
																	<option value="CW">Cura??ao</option>
																	<option value="CY">Cyprus</option>
																	<option value="CZ">Czech Republic</option>
																	<option value="DK">Denmark</option>
																	<option value="DJ">Djibouti</option>
																	<option value="DM">Dominica</option>
																	<option value="DO">Dominican Republic</option>
																	<option value="EC">Ecuador</option>
																	<option value="EG">Egypt</option>
																	<option value="SV">El Salvador</option>
																	<option value="GQ">Equatorial Guinea</option>
																	<option value="ER">Eritrea</option>
																	<option value="EE">Estonia</option>
																	<option value="ET">Ethiopia</option>
																	<option value="FK">Falkland Islands (Malvinas)</option>
																	<option value="FO">Faroe Islands</option>
																	<option value="FJ">Fiji</option>
																	<option value="FI">Finland</option>
																	<option value="FR">France</option>
																	<option value="GF">French Guiana</option>
																	<option value="PF">French Polynesia</option>
																	<option value="TF">French Southern Territories</option>
																	<option value="GA">Gabon</option>
																	<option value="GM">Gambia</option>
																	<option value="GE">Georgia</option>
																	<option value="DE">Germany</option>
																	<option value="GH">Ghana</option>
																	<option value="GI">Gibraltar</option>
																	<option value="GR">Greece</option>
																	<option value="GL">Greenland</option>
																	<option value="GD">Grenada</option>
																	<option value="GP">Guadeloupe</option>
																	<option value="GU">Guam</option>
																	<option value="GT">Guatemala</option>
																	<option value="GG">Guernsey</option>
																	<option value="GN">Guinea</option>
																	<option value="GW">Guinea-Bissau</option>
																	<option value="GY">Guyana</option>
																	<option value="HT">Haiti</option>
																	<option value="HM">Heard Island and McDonald Islands</option>
																	<option value="VA">Holy See (Vatican City State)</option>
																	<option value="HN">Honduras</option>
																	<option value="HK">Hong Kong</option>
																	<option value="HU">Hungary</option>
																	<option value="IS">Iceland</option>
																	<option value="IN">India</option>
																	<option value="ID">Indonesia</option>
																	<option value="IR">Iran, Islamic Republic of</option>
																	<option value="IQ">Iraq</option>
																	<option value="IE">Ireland</option>
																	<option value="IM">Isle of Man</option>
																	<option value="IL">Israel</option>
																	<option value="IT">Italy</option>
																	<option value="JM">Jamaica</option>
																	<option value="JP">Japan</option>
																	<option value="JE">Jersey</option>
																	<option value="JO">Jordan</option>
																	<option value="KZ">Kazakhstan</option>
																	<option value="KE">Kenya</option>
																	<option value="KI">Kiribati</option>
																	<option value="KP">Korea, Democratic People's Republic of</option>
																	<option value="KW">Kuwait</option>
																	<option value="KG">Kyrgyzstan</option>
																	<option value="LA">Lao People's Democratic Republic</option>
																	<option value="LV">Latvia</option>
																	<option value="LB">Lebanon</option>
																	<option value="LS">Lesotho</option>
																	<option value="LR">Liberia</option>
																	<option value="LY">Libya</option>
																	<option value="LI">Liechtenstein</option>
																	<option value="LT">Lithuania</option>
																	<option value="LU">Luxembourg</option>
																	<option value="MO">Macao</option>
																	<option value="MK">Macedonia, the former Yugoslav Republic of</option>
																	<option value="MG">Madagascar</option>
																	<option value="MW">Malawi</option>
																	<option value="MY">Malaysia</option>
																	<option value="MV">Maldives</option>
																	<option value="ML">Mali</option>
																	<option value="MT">Malta</option>
																	<option value="MH">Marshall Islands</option>
																	<option value="MQ">Martinique</option>
																	<option value="MR">Mauritania</option>
																	<option value="MU">Mauritius</option>
																	<option value="YT">Mayotte</option>
																	<option value="MX">Mexico</option>
																	<option value="FM">Micronesia, Federated States of</option>
																	<option value="MD">Moldova, Republic of</option>
																	<option value="MC">Monaco</option>
																	<option value="MN">Mongolia</option>
																	<option value="ME">Montenegro</option>
																	<option value="MS">Montserrat</option>
																	<option value="MA">Morocco</option>
																	<option value="MZ">Mozambique</option>
																	<option value="MM">Myanmar</option>
																	<option value="NA">Namibia</option>
																	<option value="NR">Nauru</option>
																	<option value="NP">Nepal</option>
																	<option value="NL">Netherlands</option>
																	<option value="NC">New Caledonia</option>
																	<option value="NZ">New Zealand</option>
																	<option value="NI">Nicaragua</option>
																	<option value="NE">Niger</option>
																	<option value="NG">Nigeria</option>
																	<option value="NU">Niue</option>
																	<option value="NF">Norfolk Island</option>
																	<option value="MP">Northern Mariana Islands</option>
																	<option value="NO">Norway</option>
																	<option value="OM">Oman</option>
																	<option value="PK">Pakistan</option>
																	<option value="PW">Palau</option>
																	<option value="PS">Palestinian Territory, Occupied</option>
																	<option value="PA">Panama</option>
																	<option value="PG">Papua New Guinea</option>
																	<option value="PY">Paraguay</option>
																	<option value="PE">Peru</option>
																	<option value="PH">Philippines</option>
																	<option value="PN">Pitcairn</option>
																	<option value="PL">Poland</option>
																	<option value="PT">Portugal</option>
																	<option value="PR">Puerto Rico</option>
																	<option value="QA">Qatar</option>
																	<option value="RE">R??union</option>
																	<option value="RO">Romania</option>
																	<option value="RU">Russian Federation</option>
																	<option value="RW">Rwanda</option>
																	<option value="BL">Saint Barth??lemy</option>
																	<option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
																	<option value="KN">Saint Kitts and Nevis</option>
																	<option value="LC">Saint Lucia</option>
																	<option value="MF">Saint Martin (French part)</option>
																	<option value="PM">Saint Pierre and Miquelon</option>
																	<option value="VC">Saint Vincent and the Grenadines</option>
																	<option value="WS">Samoa</option>
																	<option value="SM">San Marino</option>
																	<option value="ST">Sao Tome and Principe</option>
																	<option value="SA">Saudi Arabia</option>
																	<option value="SN">Senegal</option>
																	<option value="RS">Serbia</option>
																	<option value="SC">Seychelles</option>
																	<option value="SL">Sierra Leone</option>
																	<option value="SG">Singapore</option>
																	<option value="SX">Sint Maarten (Dutch part)</option>
																	<option value="SK">Slovakia</option>
																	<option value="SI">Slovenia</option>
																	<option value="SB">Solomon Islands</option>
																	<option value="SO">Somalia</option>
																	<option value="ZA">South Africa</option>
																	<option value="GS">South Georgia and the South Sandwich Islands</option>
																	<option value="KR">South Korea</option>
																	<option value="SS">South Sudan</option>
																	<option value="ES">Spain</option>
																	<option value="LK">Sri Lanka</option>
																	<option value="SD">Sudan</option>
																	<option value="SR">Suriname</option>
																	<option value="SJ">Svalbard and Jan Mayen</option>
																	<option value="SZ">Swaziland</option>
																	<option value="SE">Sweden</option>
																	<option value="CH">Switzerland</option>
																	<option value="SY">Syrian Arab Republic</option>
																	<option value="TW">Taiwan, Province of China</option>
																	<option value="TJ">Tajikistan</option>
																	<option value="TZ">Tanzania, United Republic of</option>
																	<option value="TH">Thailand</option>
																	<option value="TL">Timor-Leste</option>
																	<option value="TG">Togo</option>
																	<option value="TK">Tokelau</option>
																	<option value="TO">Tonga</option>
																	<option value="TT">Trinidad and Tobago</option>
																	<option value="TN">Tunisia</option>
																	<option value="TR">Turkey</option>
																	<option value="TM">Turkmenistan</option>
																	<option value="TC">Turks and Caicos Islands</option>
																	<option value="TV">Tuvalu</option>
																	<option value="UG">Uganda</option>
																	<option value="UA">Ukraine</option>
																	<option value="AE">United Arab Emirates</option>
																	<option value="GB">United Kingdom</option>
																	<option value="US">United States</option>
																	<option value="UY">Uruguay</option>
																	<option value="UZ">Uzbekistan</option>
																	<option value="VU">Vanuatu</option>
																	<option value="VE">Venezuela, Bolivarian Republic of</option>
																	<option value="VN">Vietnam</option>
																	<option value="VI">Virgin Islands</option>
																	<option value="WF">Wallis and Futuna</option>
																	<option value="EH">Western Sahara</option>
																	<option value="YE">Yemen</option>
																	<option value="ZM">Zambia</option>
																	<option value="ZW">Zimbabwe</option>
																</select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-29-zymy" style={{width: "100%"}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-country-nc-container" aria-controls="select2-country-nc-container"><span className="select2-selection__rendered" id="select2-country-nc-container" role="textbox" aria-readonly="true" title="Select a Country..."><span className="select2-selection__placeholder">Select a Country...</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
															</div>
														</div>
													</div>
												</div>
												<div className="modal-footer flex-center">
													<button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
													<button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
														<span className="indicator-label">Submit</span>
														<span className="indicator-progress">Please wait... 
														<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="modal fade" id="kt_modal_add_schedule" tabIndex={-1} aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered mw-650px">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="fw-bolder">Add an Event</h2>
												<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
											<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
												<form id="kt_modal_add_schedule_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="fs-6 fw-bold form-label mb-2">
															<span className="required">Date &amp; Time</span>
															<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Select a date &amp; time." data-bs-original-title="" title=""></i>
														</label>
														<input className="form-control form-control-solid flatpickr-input" placeholder="Pick date &amp; time" name="event_datetime" id="kt_modal_add_schedule_datepicker" type="text" readOnly={true}/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="required fs-6 fw-bold form-label mb-2">Event Name</label>
														<input type="text" className="form-control form-control-solid" name="event_name" value=""/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="required fs-6 fw-bold form-label mb-2">Event Organiser</label>
														<input type="text" className="form-control form-control-solid" name="event_org" value=""/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="required fs-6 fw-bold form-label mb-2">Send Event Details To</label>
														{/* <tags className="tagify form-control form-control-solid" tabIndex={-1}>
            <tag title="e.smith@kpmg.com.au" contenteditable="false" spellcheck="false" tabIndex={-1} className="tagify__tag tagify--noAnim" value="e.smith@kpmg.com.au"><x title="" className="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span className="tagify__tag-text">e.smith@kpmg.com.au</span></div></tag><tag title="melody@altbox.com" contenteditable="false" spellheck="false" tabIndex={-1} className="tagify__tag tagify--noAnim" value="melody@altbox.com"><x title="" className="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span className="tagify__tag-text">melody@altbox.com</span></div></tag><span contenteditable="" data-placeholder="???" aria-placeholder="" className="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false"></span>
        </tags> */}
		<input id="kt_modal_add_schedule_tagify" type="text" className="form-control form-control-solid" name="event_invitees" value="e.smith@kpmg.com.au, melody@altbox.com"/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="text-center pt-15">
														<button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
														<button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
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
								<div className="modal fade" id="kt_modal_add_task" tabIndex={-1} aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered mw-650px">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="fw-bolder">Add a Task</h2>
												<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
											<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
												<form id="kt_modal_add_task_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="fs-6 fw-bold form-label mb-2">
															<span className="required">Task Due Date</span>
															<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Select a due date." data-bs-original-title="" title=""></i>
														</label>
														
														<input className="form-control form-control-solid flatpickr-input" placeholder="Pick date" name="task_duedate" id="kt_modal_add_task_datepicker" type="text" readOnly={true}/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
												
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="required fs-6 fw-bold form-label mb-2">Task Name</label>
														<input type="text" className="form-control form-control-solid" name="task_name" value=""/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="fv-row mb-7">
														<label className="fs-6 fw-bold form-label mb-2">Task Description</label>
														<textarea className="form-control form-control-solid rounded-3"></textarea>
													</div>
													<div className="text-center pt-15">
														<button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
														<button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
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
								<div className="modal fade" id="kt_modal_update_email" tabIndex={-1} aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered mw-650px">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="fw-bolder">Update Email Address</h2>
												<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
											<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
												<form id="kt_modal_update_email_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
													<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
														<span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
																<rect fill="#000000" x="11" y="7" width="2" height="8" rx="1"></rect>
																<rect fill="#000000" x="11" y="16" width="2" height="2" rx="1"></rect>
															</svg>
														</span>
														<div className="d-flex flex-stack flex-grow-1">
															<div className="fw-bold">
																<div className="fs-6 text-gray-700">Please note that a valid email address is required to complete the email verification.</div>
															</div>
														</div>
													</div>
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="fs-6 fw-bold form-label mb-2">
															<span className="required">Email Address</span>
														</label>
														<input className="form-control form-control-solid" placeholder="" name="profile_email" value="e.smith@kpmg.com.au"/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="text-center pt-15">
														<button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
														<button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
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
								<div className="modal fade" id="kt_modal_update_password" tabIndex={-1} aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered mw-650px">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="fw-bolder">Update Password</h2>
												<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
											<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
												<form id="kt_modal_update_password_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
													<div className="fv-row mb-10 fv-plugins-icon-container">
														<label className="required form-label fs-6 mb-2">Current Password</label>
														<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="current_password" autoComplete="off"/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="mb-10 fv-row fv-plugins-icon-container" data-kt-password-meter="true">
														<div className="mb-1">
															<label className="form-label fw-bold fs-6 mb-2">New Password</label>
															<div className="position-relative mb-3">
																<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="new_password" autoComplete="off"/>
																<span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
																	<i className="bi bi-eye-slash fs-2"></i>
																	<i className="bi bi-eye fs-2 d-none"></i>
																</span>
															</div>
															
															<div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
																<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
																<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
																<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
																<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
															</div>
													
														</div>
													
														<div className="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="fv-row mb-10 fv-plugins-icon-container">
														<label className="form-label fw-bold fs-6 mb-2">Confirm New Password</label>
														<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirm_password" autoComplete="off"/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													
													<div className="text-center pt-15">
														<button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
														<button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
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
								<div className="modal fade" id="kt_modal_update_role" tabIndex={-1} aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered mw-650px">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="fw-bolder">Update User Role</h2>
												<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
											<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
												<form id="kt_modal_update_role_form" className="form" action="#">
													<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
														<span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
																<rect fill="#000000" x="11" y="7" width="2" height="8" rx="1"></rect>
																<rect fill="#000000" x="11" y="16" width="2" height="2" rx="1"></rect>
															</svg>
														</span>
														<div className="d-flex flex-stack flex-grow-1">
															<div className="fw-bold">
																<div className="fs-6 text-gray-700">Please note that reducing a user role rank, that user will lose all priviledges that was assigned to the previous role.</div>
															</div>
														</div>
													</div>
													<div className="fv-row mb-7">
														<label className="fs-6 fw-bold form-label mb-5">
															<span className="required">Select a user role</span>
														</label>
														<div className="d-flex">
															<div className="form-check form-check-custom form-check-solid">
																<input className="form-check-input me-3" name="user_role" type="radio" value="0" id="kt_modal_update_role_option_0" checked={true}/>
																<label className="form-check-label" >
																	<div className="fw-bolder text-gray-800">Administrator</div>
																	<div className="text-gray-600">Best for business owners and company administrators</div>
																</label>
															</div>
														</div>
														<div className="separator separator-dashed my-5"></div>
														<div className="d-flex">
															<div className="form-check form-check-custom form-check-solid">
																<input className="form-check-input me-3" name="user_role" type="radio" value="1" id="kt_modal_update_role_option_1"/>
																<label className="form-check-label" >
																	<div className="fw-bolder text-gray-800">Developer</div>
																	<div className="text-gray-600">Best for developers or people primarily using the API</div>
																</label>
															</div>
														</div>
														<div className="separator separator-dashed my-5"></div>
														<div className="d-flex">
															<div className="form-check form-check-custom form-check-solid">
																<input className="form-check-input me-3" name="user_role" type="radio" value="2" id="kt_modal_update_role_option_2"/>
																<label className="form-check-label" >
																	<div className="fw-bolder text-gray-800">Analyst</div>
																	<div className="text-gray-600">Best for people who need full access to analytics data, but don't need to update business settings</div>
																</label>
															</div>
														</div>
														<div className="separator separator-dashed my-5"></div>
														<div className="d-flex">
															<div className="form-check form-check-custom form-check-solid">
																<input className="form-check-input me-3" name="user_role" type="radio" value="3" id="kt_modal_update_role_option_3"/>
																<label className="form-check-label" >
																	<div className="fw-bolder text-gray-800">Support</div>
																	<div className="text-gray-600">Best for employees who regularly refund payments and respond to disputes</div>
																</label>
															</div>
														</div>
														<div className="separator separator-dashed my-5"></div>
														<div className="d-flex">
															<div className="form-check form-check-custom form-check-solid">
																<input className="form-check-input me-3" name="user_role" type="radio" value="4" id="kt_modal_update_role_option_4"/>
																<label className="form-check-label" >
																	<div className="fw-bolder text-gray-800">Trial</div>
																	<div className="text-gray-600">Best for people who need to preview content data, but don't need to make any updates</div>
																</label>
															</div>
														</div>
													</div>
													<div className="text-center pt-15">
														<button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
														<button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
															<span className="indicator-label">Submit</span>
															<span className="indicator-progress">Please wait... 
															<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="modal fade" id="kt_modal_add_auth_app" tabIndex={-1} aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered mw-650px">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="fw-bolder">Add Authenticator App</h2>
												<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
											<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
												<div className="fw-bolder d-flex flex-column justify-content-center mb-5">
													<div className="text-center mb-5" data-kt-add-auth-action="qr-code-label">Download the 
													<a href="#">Authenticator app</a>, add a new account, then scan this barcode to set up your account.</div>
													<div className="text-center mb-5 d-none" data-kt-add-auth-action="text-code-label">Download the 
													<a href="#">Authenticator app</a>, add a new account, then enter this code to set up your account.</div>
													<div className="d-flex flex-center" data-kt-add-auth-action="qr-code">
														<img src="/metronic8/demo1/assets/media/misc/qr-code.png" alt="Scan this QR code"/>
													</div>
													<div className="border rounded p-5 d-flex flex-center d-none" data-kt-add-auth-action="text-code">
														<div className="fs-1">gi2kdnb54is709j</div>
													</div>
												</div>
												<div className="d-flex flex-center">
													<div className="btn btn-light-primary" data-kt-add-auth-action="text-code-button">Enter code manually</div>
													<div className="btn btn-light-primary d-none" data-kt-add-auth-action="qr-code-button">Scan barcode instead</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="modal fade" id="kt_modal_add_one_time_password" tabIndex={-1} aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered mw-650px">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="fw-bolder">Enable One Time Password</h2>
												<div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">													<span className="svg-icon svg-icon-1">
														<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
															<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
																<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1"></rect>
																<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1"></rect>
															</g>
														</svg>
													</span>
												</div>
											</div>
											<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
												<form className="form fv-plugins-bootstrap5 fv-plugins-framework" id="kt_modal_add_one_time_password_form">
													<div className="fw-bolder mb-9">Enter the new phone number to receive an SMS to when you log in.</div>
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="fs-6 fw-bold form-label mb-2">
															<span className="required">Mobile number</span>
															<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="A valid mobile number is required to receive the one-time password to validate your account login." aria-label="A valid mobile number is required to receive the one-time password to validate your account login."></i>
														</label>
														<input type="text" className="form-control form-control-solid" name="otp_mobile_number" placeholder="+6123 456 789" value=""/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													
													<div className="separator saperator-dashed my-5"></div>
													<div className="fv-row mb-7">
														<label className="fs-6 fw-bold form-label mb-2">
															<span className="required">Email</span>
														</label>
														<input type="email" className="form-control form-control-solid" name="otp_email" value="e.smith@kpmg.com.au" readOnly={true}/>
													</div>
													<div className="fv-row mb-7 fv-plugins-icon-container">
														<label className="fs-6 fw-bold form-label mb-2">
															<span className="required">Confirm password</span>
														</label>
														<input type="password" className="form-control form-control-solid" name="otp_confirm_password" value=""/>
													<div className="fv-plugins-message-container invalid-feedback"></div></div>
													<div className="text-center pt-15">
														<button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Cancel</button>
														<button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
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
    

  )
}

export default Permissions
