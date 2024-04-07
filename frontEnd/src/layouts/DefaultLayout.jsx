import React from 'react'
import { Navbar } from '@/components/website'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
      
    </>
  )
}

export default DefaultLayout
