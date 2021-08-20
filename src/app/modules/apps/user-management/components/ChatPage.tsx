import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'

import {Private} from '../../user-management/components/roles/Private'
import {Group} from '../../user-management/components/roles/Group'
import {Drawer} from '../../user-management/components/roles/Drawer'

const chatBreadCrumbs: Array<PageLink> = [
  {
    title: 'Chat',
    path: '/apps/chat/private-chat',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ChatPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/apps/chat/private-chat'>
        <PageTitle breadcrumbs={chatBreadCrumbs}>Private chat</PageTitle>
        <Private />
      </Route>
      <Route path='/apps/chat/group-chat'>
        <PageTitle breadcrumbs={chatBreadCrumbs}>Group chat</PageTitle>
        <Group />
      </Route>
      <Route path='/apps/chat/drawer-chat'>
        <PageTitle breadcrumbs={chatBreadCrumbs}>Drawer chat</PageTitle>
        <Drawer />
      </Route>
      <Redirect from='/apps/chat' exact={true} to='/apps/chat/private-chat' />
      <Redirect to='/apps/chat/private-chat' />
    </Switch>
  )
}

export default ChatPage
