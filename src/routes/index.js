// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Menu from './Menu'
import CounterRoute from './Counter'
import BazalRoute from './Bazal'

import {changeHeader} from '../components/Header/module/header';

export const createRoutes = (store) => {

  function setHeaderTitle(nextState) {
    let componentName = nextState.routes[1].name;
    store.dispatch(changeHeader(componentName));
  }

  function onChange(prevState, nextState, replace) {
    setHeaderTitle(nextState);
  }

  function onEnter(nextState, replace) {
    setHeaderTitle(nextState);
  }
  
  return {
    path: '/',
    component: CoreLayout,
    indexRoute: Menu,
    onChange: onChange,
    onEnter: onEnter,
    childRoutes : [
      CounterRoute(store),
      BazalRoute(store)
    ]
  }
}

export default createRoutes
