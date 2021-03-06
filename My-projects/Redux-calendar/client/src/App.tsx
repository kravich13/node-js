import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import Calendar from './pages/Calendar'
import Login from './pages/Login'
import ClickMonth from './pages/ClickMonth'
import Events from './pages/Events'
import SignUp from './pages/Sign-up'
import Alert from './components/Alert'
import { Kravich } from './pages/Kravich'
import { IMapStateToProps } from './interfaces'
import './App.css'
import './styles/footer-header.css'

const mapStateToProps = (state: IMapStateToProps) => {
  return { navbar: state.auth.navbar }
}

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

const App: React.FC<PropsFromRedux> = ({ navbar }) => {
  return (
    <div className="App">
      <BrowserRouter>
        {!navbar && (
          <React.Fragment>
            <Navbar />
          </React.Fragment>
        )}

        <Alert />

        <section>
          <Switch>
            <Route component={Calendar} path="/" exact />
            <Route component={SignUp} path="/sign-up" exact />
            <Route component={Login} path="/login" exact />
            <Route component={ClickMonth} path="/month" exact />
            <Route component={Events} path="/month/events" exact />
            <Route component={Kravich} path="/about" exact />
          </Switch>
        </section>

        {!navbar && (
          <React.Fragment>
            <Footer />
          </React.Fragment>
        )}
      </BrowserRouter>
    </div>
  )
}

export default connect(mapStateToProps)(App)
