import React from 'react'

// UI Components
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <NavLink to="/">Home</NavLink>
      </Grid>
      <Grid item>
        <NavLink to="/etc">Etc</NavLink>
      </Grid>
    </Grid>
  )
}

export default Header
