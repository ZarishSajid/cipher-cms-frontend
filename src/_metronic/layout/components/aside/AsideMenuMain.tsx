/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Dashboard</span>
        </div>
      </div>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotone/Design/PenAndRuller.svg'
        title='Sales'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotone/Interface/Settings-02.svg'
        title='Report'
        fontIcon='bi-layers'
      />
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotone/Code/Compiling.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotone/General/User.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotone/Code/Error-circle.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotone/Layout/Layout-4-blocks.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>User Management</span>
        </div>
      </div>
   
       <AsideMenuItemWithSub
        to='/apps/user-management'
        title='Roles'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotone/Communication/Group-chat.svg'
      > 
      <AsideMenuItem
      hasBullet={true}
        to='/crafted/pages/profile/projects'
        title='Role List'
      />
      <AsideMenuItem
      hasBullet={true}
      to='/crafted/widgets/tables'
        title='View Role'
      />
     
      </AsideMenuItemWithSub>
      <AsideMenuItem
      hasBullet={true}
        to='/apps/Permissions'
        title='Permissions'
      />
      {/* <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} /> */}
      {/* <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          /> */}
      {/* </AsideMenuItemWithSub> */}

      <div className='menu-item'>
        {/* Start Market */}

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Market</span>
          </div>
          <AsideMenuItem
            icon='/media/icons/duotone/Interface/Settings-02.svg'
            to='/crafted/account/settings'
            title='Settings'
          />
          <AsideMenuItem
            icon='/media/icons/duotone/Interface/Settings-02.svg'
            to='/crafted/account/settings'
            title='Theme & Style'
          />
          <AsideMenuItemWithSub
            to='/apps/chat'
            title='Chat Messenger'
            fontIcon='bi-chat-left'
            icon='/media/icons/duotone/Communication/Group-chat.svg'
          >
            <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
            <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
            <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
          </AsideMenuItemWithSub>
        </div>
        {/* End Market*/}
        {/* start Saller */}

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Seller</span>
          </div>
          <AsideMenuItem
            icon='/media/icons/duotone/Interface/Settings-02.svg'
            to='/crafted/account/settings'
            title='Seller Management'
          />
        </div>

        {/* end Seller*/}

        {/* Start: Buyer */}
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Buyer</span>
          </div>
          <AsideMenuItem
            icon='/media/icons/duotone/Code/Compiling.svg'
            to='/crafted/account/settings'
            title='Buyer Management'
          />
        </div>
        {/* End Buyer */}

        {/* Start: order */}
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Oders</span>
          </div>
          <AsideMenuItem
            icon='/media/icons/duotone/Code/Compiling.svg'
            to='/crafted/account/settings'
            title='View Orders'
          />
          <AsideMenuItem
            icon='/media/icons/duotone/Code/Compiling.svg'
            to='/crafted/account/settings'
            title='Order Setting'
          />
          <AsideMenuItem
            icon='/media/icons/duotone/Code/Compiling.svg'
            to='/crafted/widgets/mixed'
            title='Shipping'
          />
        </div>
        {/* End order */}

        {/* Start: Categories*/}
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Category</span>
          </div>
          <AsideMenuItem
            icon='/media/icons/duotone/Layout/Layout-4-blocks.svg'
            to='/crafted/pages/profile/projects'
            title='Category Management'
          />
        </div>
        {/* End Categories*/}

        {/* Start: Product*/}
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Product</span>
          </div>
          <AsideMenuItem
            icon='/media/icons/duotone/Layout/Layout-4-blocks.svg'
            to='/crafted/account/settings'
            title='Product Management'
          />
        </div>
        {/* End Product*/}

        {/* Start: Promo*/}
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Promos & Ads</span>
          </div>
          <AsideMenuItem
            icon='/media/icons/duotone/Layout/Layout-4-blocks.svg'
            to='/crafted/account/settings'
            title='Logs'
          />
        </div>
        {/* End Promo*/}

        <div className='menu-item'>
          <div className='menu-content'>
            <div className='separator mx-1 my-4'></div>
          </div>
        </div>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotone/Files/File.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div>
    </>
  )
}
