import { Suspense } from 'react'
import { Router } from 'react-router-dom'
import history from '../routes/history'
import Routes from '../routes/Routes'
import Loader from '../components/Loader'

import Navbar from '../components/Navbar'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import variables from '../utils/variables'

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    position: 'relative',
    maxHeight: `calc(100vh - ${variables.appBarHeight})`,
    top: variables.appBarHeight,
    display: 'flex',
    flexDirection: 'column'
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Router history={history}>
        <Navbar />
        <Container className={classes.main} maxWidth="md">
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </Container>
      </Router>
    </div>
  )
}

export default App
