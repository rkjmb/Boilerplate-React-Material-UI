import React from 'react'
import Typography from '@material-ui/core/Typography'
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Typography variant="h3">Something went wrong</Typography>
        }
        return this.props.children
    }
}

export default ErrorBoundary
