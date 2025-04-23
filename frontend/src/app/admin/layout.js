import Header from '@/components/Header'
import React from 'react'

const admin = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default admin