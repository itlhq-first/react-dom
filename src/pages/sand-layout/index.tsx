import React, { useState } from 'react'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import { Layout, Button, Input } from 'antd'
//css
import './index.css'

//antd

const { Content } = Layout

export interface ListProps {
  key: string
  title: string
  children: ListProps[]
}

export default function SandLayout() {
  const [value, setValue] = useState('')
  const [menuList, setMenuList] = useState<ListProps[]>([
    {
      key: '1',
      title: '菜单一',
      children: [
        {
          key: '2',
          title: '子菜单1-1',
          children: [],
        },
        {
          key: '3',
          title: '子菜单1-2',
          children: [],
        },
      ],
    },
    {
      key: '4',
      title: '菜单二',
      children: [
        {
          key: '5',
          title: '子菜单2-1',
          children: [],
        },
        {
          key: '6',
          title: '子菜单2-2',
          children: [],
        },
      ],
    },
  ])

  const handelClick = () => {
    const valueObject: ListProps[] = []
    menuList.forEach(item => {
      item.children.length > 0 &&
        item.children.forEach(k => {
          if (k.key === '2') {
            k.title = value
          }
        })
      console.log(item)
      valueObject.push(item)
    })
    setMenuList(valueObject)
  }

  return (
    <Layout>
      <SideMenu menuList={menuList}></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow: 'auto',
          }}
        >
          <Input
            style={{ width: 300, marginRight: 20 }}
            onChange={e => setValue(e.target.value)}
          ></Input>
          <Button type="primary" onClick={() => handelClick()}>
            保存
          </Button>
        </Content>
      </Layout>
    </Layout>
  )
}
