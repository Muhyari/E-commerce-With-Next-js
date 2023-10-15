import React from 'react'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { OPTIONS } from '../api/auth/[...nextauth]/route'
import Main from "./components/main"
import prisma from '../lib/prisma'
import { items, userItems } from './components/menu'


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page E-Commerce  Website"
}


export default async function RootLayout({ children }: {children : React.ReactNode}) {

    const session = await getServerSession(OPTIONS)
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email ?? "",
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
      }
    })
    const menu = user?.role === "user" ? userItems : items
  return (
    <Main user={user} menu={menu} >{children}</Main>
  )
}
