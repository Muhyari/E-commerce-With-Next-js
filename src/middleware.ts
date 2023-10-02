import {getToken} from "next-auth/jwt"

import { NextRequest, NextResponse } from "next/server"

import React from 'react'

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname;

    if (path === "/"){
        return NextResponse.next()
    }

    const session = await getToken({
        req, secret: process.env.NEXTAUTH_SECRETE,
    })

    const isProtected = path.includes("/dashboard")

    if (!session && isProtected) {
        return NextResponse.redirect(new URL("/api/auth/login", req.url))
    } else if (session && (path === "/login" || path === "/register")) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next()
}
