import React from 'react'
import {  Menu, Icon } from 'antd'
import MenuItem from './MenuItem'

const { SubMenu } = Menu

export default function MenuList(props) {
    const {menuItems, name, icon, submenukey} = props
    return(
        // <Menu>

            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key='31'><MenuItem route="/user" name="Wiezman"/></Menu.Item>
              <Menu.Item key='32'><MenuItem route="/user" name="Iris"/></Menu.Item>
              <Menu.Item key='33'><MenuItem route="/user" name="Tom"/></Menu.Item>
              <Menu.Item key='34'><MenuItem route="/user" name="Bar"/></Menu.Item>
              <Menu.Item key='35'><MenuItem route="/user" name="Neal"/></Menu.Item>

            </SubMenu>
        // </Menu>
    )
}
