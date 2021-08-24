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
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
