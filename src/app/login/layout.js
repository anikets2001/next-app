import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1>Welcome to the login section, choose student/teacher login</h1>
        {children}
    </div>
  )
}

export default Layout