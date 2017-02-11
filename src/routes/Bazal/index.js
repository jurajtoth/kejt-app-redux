import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'bazal',
  name : 'Bazálny metabolizmus',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Bazal = require('./containers/BazalContainer').default
      const reducer = require('./modules/bazal').default

      /*  Add the reducer to the store on key 'bazal'  */
      injectReducer(store, { key: 'bazal', reducer })

      /*  Return getComponent   */
      cb(null, Bazal)

    /* Webpack named bundle   */
    }, 'bazal')
  }
})
