import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import variables from '../utils/variables'

import navbarConfig from '../utils/NavbarConfig'

const useStyles = makeStyles((theme) => ({
    appbar: {
        maxHeight: `${variables.appBarHeight} !important`
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navItems: {
        marginLeft: '2em',
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end',
        '&>*+*': {
            marginLeft: '1em',
        },
    },
    navItem: {
        textDecoration: 'none',
        color: 'white',
    },
    activeNavItem: {
        background: theme.palette.secondary.main,
        borderRadius: '4px',
        padding: '0.25em 0.5em',
    },

}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appbar}>
            <Toolbar variant="dense" className={classes.toolbar}>
                <Typography variant="h6">DEMO</Typography>
                <div className={classes.navItems}>
                    {navbarConfig.map(link => <NavLink
                        key={link.id}
                        exact
                        to={link.to}
                        className={classes.navItem}
                        activeClassName={classes.activeNavItem}
                    >
                        <Typography variant="button">{link.pathName}</Typography>
                    </NavLink>)}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
