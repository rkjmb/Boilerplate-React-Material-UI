import React from 'react'
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    fillBox: {
        flex: 1 //fills the entore height if parent has display flex and flex direction column
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const FillBox = ({ children, center = false }) => {
    const classes = useStyles()
    return (
        <Box className={`${classes.fillBox} ${center ? classes.center : null}`}>
            {children}
        </Box>
    )
}

export default FillBox
