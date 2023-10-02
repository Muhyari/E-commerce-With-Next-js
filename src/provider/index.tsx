'use client'
import React, { ReactNode } from 'react'
import { StyleProvider } from "@ant-design/cssinjs"
import { store } from '@/store'
import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
SessionProvider

type Props = {
    children: ReactNode
}

function index({ children }: Props) {
    return (
        <SessionProvider>
            <ReduxProvider store={store} >
                <StyleProvider hashPriority='high' ssrInline >
                    {children}
                </StyleProvider>
            </ReduxProvider>
        </SessionProvider>
    )
}

export default index