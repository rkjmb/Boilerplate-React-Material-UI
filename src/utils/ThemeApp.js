import { useState, useEffect } from 'react'
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import generteThemeObject from './generateThemeObject'

const ThemeApp = (props) => {
    const [theme, settheme] = useState()

    useEffect(() => {
        settheme(generteThemeObject())
    }, [])

    let themeWithResponsiveFontSize = responsiveFontSizes(createTheme(theme))

    return (
        <ThemeProvider theme={themeWithResponsiveFontSize}>
            {props.children}
        </ThemeProvider>
    )
}

export default ThemeApp
