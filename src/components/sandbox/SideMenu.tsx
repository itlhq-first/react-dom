import React, { FC, useState } from 'react'
import { Layout, Menu } from 'antd'
import './index.css'
import { ListProps } from '../../pages/sand-layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const { Sider } = Layout
const { SubMenu } = Menu

// 模拟数组结构

interface Porops {
  menuList: ListProps[]
}

const SideMenu: FC<Porops> = ({ menuList }) => {
  const [collapsed, setCollapsed] = useState(false)

  const renderMenu = (list: ListProps[]) => {
    return list.map((item: ListProps) => {
      if (item?.children.length > 0) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }

      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      defaultCollapsed={false}
    >
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div className="logo">react</div>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu theme="dark" mode="inline">
            {renderMenu(menuList as ListProps[])}
          </Menu>
        </div>
      </div>
    </Sider>
  )
}
export default SideMenu
