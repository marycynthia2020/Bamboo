"use client"
import React, { useState } from 'react'
import { createContext } from 'react';

interface navigationProps {
  isMenuOpen : boolean,
  [key: string]: any;
}
export const NavigationContext = createContext<navigationProps | undefined>(undefined)

const Provider = (
  {
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const value:navigationProps = {
    isMenuOpen,
    setIsMenuOpen
  }
  return (
   <NavigationContext.Provider value={value} >
    {children}
   </NavigationContext.Provider>
  )
}

export default Provider