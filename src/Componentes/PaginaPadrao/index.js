import React from 'react'
import Banner from 'Componentes/Banner'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao({children}) {
  return (
    <main>
        <Banner/>
        <Outlet></Outlet>
        {children}
    </main>
  )
}
