import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const CommonProviders: React.FC = ({ children }) => {
  return <Router>{children}</Router>
}

export default CommonProviders
