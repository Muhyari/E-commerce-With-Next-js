'use client'
import { Button } from 'antd'
import { signOut } from 'next-auth/react'
import React from 'react'

type Props = {}

const LogoutButton = (props: Props) => {

    const handleLogout = () => {
        signOut()
    }

  return (
    <Button type='primary' onClick={handleLogout}>Logout</Button>
  )
}

export default LogoutButton