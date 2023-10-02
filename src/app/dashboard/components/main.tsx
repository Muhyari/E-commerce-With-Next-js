'use client'
import React from 'react'
import { Layout, theme } from 'antd'
import { usePathname } from 'next/navigation'
import { Session } from 'next-auth'
import Sidebar from "./sidebar"
import { items } from './menu'


const { Header, Content, Footer } = Layout

type Props = {
    children: React.ReactNode,
    session: Session | null
}

const Main: React.FC<Props> = ({ children, session }) => {

    const { token: { colorBgContainer } } = theme.useToken()
    const pathName = usePathname()

    return (
        <Layout style={{ minHeight: "100vh" }} hasSider >
            <Sidebar defaultSelectedKeys={[pathName]} items={items} />
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "0 16px" }} >
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }} >{children}</div>
                </Content>
                <Footer style={{ textAlign: "center" }} >
                    E-Commerce Cart ©2023 Created by ZENN.ID
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Main