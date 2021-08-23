import { Route, Switch, Redirect } from 'react-router-dom'

import { Home, NotFound } from '../utils/lazyLoaded'
// import { AuthRoute, PrivateRoute } from './CustomRoutes';
// import { PrivateRoute } from './CustomRoutes'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
        </Switch>
    )
}

export default Routes
