import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import { UsersList } from '../modules/profile/components/UsersList'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
   const PermissionsWrapper=lazy(()=> import('../modules/apps/PermissionsWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UserManagement = lazy(() => import('../modules/apps/user-management/components/ChatPage'))
  const Permissions = lazy(() => import('../modules/apps/Permissions'))
  const UsersList=lazy(()=>import('../modules/apps/UsersList'))
  const ViewUser=lazy(()=>import('../modules/apps/ViewUser'))
  const UserList=lazy(()=>import('../modules/apps/UserList'))
  const viewCarriers=lazy(()=>import('../modules/apps/viewCarriers'))
  const bulkImport=lazy(()=>import('../modules/apps/bulkImport'))
  const ViewCustomers=lazy(()=>import('../modules/apps/customers/ViewCustomers'))
  const Accounting=lazy(()=>import('../modules/apps/customers/Accounting'))
  const CustomerContact=lazy(()=>import('../modules/apps/customers/CustomerContact'))
  const AddCustomers=lazy(()=>import('../modules/apps/customers/AddCustomers'))
  const UpdateAccounting=lazy(()=>import('../modules/apps/customers/UpdateAccounting'))
  const UpdateCustomerContact=lazy(()=>import('../modules/apps/customers/UpdateCustomerContact'))
  const CustomizeUnit=lazy(()=>import('../modules/apps/customers/CustomizeUnit'))
  const UpdateCustomizeUnit=lazy(()=>import('../modules/apps/customers/UpdateCustomizeUnit'))
  const UpdateCustomers=lazy(()=>import('../modules/apps/customers/UpdateCustomers'))
  const ShipperDirectory=lazy(()=>import('../modules/apps/customers/ShipperDirectory'))
  const BulkImport=lazy(()=>import('../modules/apps/customers/BulkImport'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/apps/PermissionsWrapper' component={PermissionsWrapper}/>
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/apps/user-management/components' component={UserManagement} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Route path='/apps/Permissions' component={Permissions} />
        <Route path='/apps/UsersList' component={UsersList}/>
        <Route path='/apps/ViewUser' component={ViewUser}/>
        <Route path='/apps/UserList' component={UserList}/>
        <Route path='/apps/viewCarriers' component={viewCarriers}/>
        <Route path='/apps/bulkImport' component={bulkImport}/>
        <Route path='/apps/customers/ViewCustomers' component={ViewCustomers} />
        <Route path='/apps/customers/Accounting' component={Accounting}/>
        <Route path='/apps/customers/CustomerContact' component={CustomerContact}/>
        <Route path='/apps/customers/CustomizeUnit' component={CustomizeUnit}/>
        <Route path='/apps/customers/UpdateCustomizeUnit' component={UpdateCustomizeUnit}/>
        <Route path='/apps/customers/AddCustomers' component={AddCustomers} />
        <Route path='/apps/customers/UpdateCustomers' component={UpdateCustomers} />
        <Route path='/apps/customers/UpdateAccounting' component={UpdateAccounting}/>
        <Route path='/apps/customers/UpdateCustomerContact' component={UpdateCustomerContact}/>
        <Route path='/apps/customers/ShipperDirectory' component={ShipperDirectory}/>
        <Route path='/apps/customers/BulkImport' component={BulkImport}/>
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
