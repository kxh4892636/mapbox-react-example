import React from 'react'

interface SidebarInterface{
    children?:React.ReactNode
}

export const SideBar = ({ children }:SidebarInterface) => {
  return <div className="w-80 bg-slate-300">{children}</div>
}
