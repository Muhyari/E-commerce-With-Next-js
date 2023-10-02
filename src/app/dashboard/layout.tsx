import React from 'react'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { OPTIONS } from '../api/auth/[...nextauth]/route'
import Main from "./components/main"


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page E-Commerce  Website"
}


export default async function RootLayout({ children }: {children : React.ReactNode}) {

    const session = await getServerSession(OPTIONS)

  return (
    <Main session={session} >{children}</Main>
  )
}
