import { Route, Redirect } from 'react-router-dom'
import ErrorBoundary from '../utils/ErrorBoundary'
import NotFound from '../pages/notFound/NotFound'

// import { AuthContext } from '../context/auth';

export const AuthRoute = ({ component: Component, ...rest }) => {
    // const { user } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(props) =>
                true ? (
                    <Redirect to="/" />
                ) : (
                    <ErrorBoundary>
                        <Component {...props} />
                    </ErrorBoundary>
                )
            }
        />
    )
}

export const PrivateRoute = ({
    component: Component,
    permission: name,
    ...rest
}) => {
    // const { user } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(props) =>
                true ? (
                    <ErrorBoundary>
                        <Component {...props} />
                    </ErrorBoundary>
                ) : (
                    <NotFound />
                )
            }
        />
    )
}
