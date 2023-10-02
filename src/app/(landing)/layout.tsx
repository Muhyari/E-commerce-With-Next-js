import React from 'react'
import NonAuthLayout from "@/components/nonAuthLayout"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
  description: "Main page E-Commerce  Website"
}



export default async function Layout({
    children,
}: {
    children: React.ReactNode,
}) {
    return <NonAuthLayout withNavbar>{children}</NonAuthLayout>;
}