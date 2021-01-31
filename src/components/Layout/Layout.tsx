import { Box } from '@material-ui/core'
import React from 'react'
import Header from './components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}

export default Layout
