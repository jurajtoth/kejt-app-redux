import { injectReducer } from '../store/reducers'

import headerReducer from '../components/Header/module/header'

export default (store) => {
    injectReducer(store, { key: 'header', reducer: headerReducer});
}