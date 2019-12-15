import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export default function SiteLayout (props) {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1'>
            <Icon type='pie-chart' />
            <span>Option A</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='desktop' />
            <span>Option B</span>
          </Menu.Item>
          <SubMenu
            key='sub1'
            title={
              <span>
                <Icon type='user' />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key='3'>Wiezman</Menu.Item>
            <Menu.Item key='4'>Iris</Menu.Item>
            <Menu.Item key='5'>Tom</Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={
              <span>
                <Icon type='team' />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key='6'>A Team</Menu.Item>
            <Menu.Item key='7'>B Team</Menu.Item>
            <Menu.Item key='8'>C Team</Menu.Item>
          </SubMenu>
          <Menu.Item key='9'>
            <Icon type='file' />
            <span>File</span>
          </Menu.Item>
        </Menu>
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
    </Layout>
  )
}
