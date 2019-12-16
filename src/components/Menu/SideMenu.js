import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'

import { Menu, Icon } from 'antd'
import './sidemenu.css'

import items from './menu'
import sideMenu from './menu'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

export default function SideMenu() {
    const [openKeys, setOpenKeys] = useState([])

    Icon.setTwoToneColor('#eb2f96');
    
    // Build single Menu Entry
    function transformMenuItem(obj, isLevel1){
        return (
            <MenuItem key={obj.key} style={{ margin: '0px'}}>
                {obj.icon && <Icon type={obj.icon}/>}
                {/* For level 1 menu items, if there is no icon, take the first word to display when folding */}
                {isLevel1 && !obj.icon && <span className="invisible-nav-text">{obj.name[0]}</span>}
                <Link to={obj.linkTo ? obj.linkTo : '#'} style={{ display: 'inline'}}><span className='nav-text'>{obj.name}</span></Link>
            </MenuItem>

        )
    }

    function buildMenu(menuObj){
        const menu = menuObj.map((level1)=>{
            if (level1.child){
                const level2menu = level1.child.map((level2)=>{
                    if (level2.child) {
                        const level3menu = level2.child.map((level3)=>{
                            return transformMenuItem(level3, false)
                        })
                        return (
                            <SubMenu key={level2.key} title={level2.name}>
                                {level3menu}
                            </SubMenu>
                        )
                    } else {
                            return transformMenuItem(level2, false)
                        }
                    }
                )
                return (
                    <SubMenu
                        key={level1.key}
                        title={level1.icon ? 
                            <span><Icon type={level1.icon}/>{level1.name}</span> : level1.name
                        }
                    >
                        {level2menu}
                    </SubMenu>
                )
            } else {
                return transformMenuItem(level1, true)
            }
        })
        return menu
    }
    
    return (
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            {buildMenu(sideMenu)}
        </Menu>
    )
}