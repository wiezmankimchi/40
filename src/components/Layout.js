import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import MenuItem from './Menu/MenuItem'

import SideMenu from './Menu/SideMenu'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export default function SiteLayout (props) {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false)
  const userMenu = [
    {route: 'user', name:'Wiezman'},
    {route: 'user', name:'Iris'},
    {route: 'user', name:'Tom'},
    {route: 'user', name:'Bar'},
    {route: 'user', name:'Neal'},
  ]
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div className='logo' />
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Wiezman</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: '85vh' }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©Wiezman Kimchi 2019</Footer>
        </Layout>
      </Router>
    </Layout>
  )
}
