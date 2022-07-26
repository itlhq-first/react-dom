import React, { useState } from 'react'
import { Layout, Dropdown, Menu, Avatar, Divider } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Header } = Layout

export default function TopHeader() {
  const menu = (
    <Menu>
      <Menu.Item>超级管理员</Menu.Item>
      <Menu.Item danger>退出</Menu.Item>
    </Menu>
  )

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: '0 16px',
        height: 60,
        backgroundColor: '#001529',
        borderLeft: '1 solid #ccc',
      }}
    >
      <div style={{ float: 'right' }}>
        <span style={{ color: '#fff' }}>欢迎admin回来</span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}
