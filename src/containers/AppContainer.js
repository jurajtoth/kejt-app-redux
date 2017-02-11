import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

import injectComponentReducers from "../components/componentReducers"

// font-awesome global import
import '../../node_modules/font-awesome/css/font-awesome.css'
//bootstrap global import
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    injectComponentReducers(store);

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
