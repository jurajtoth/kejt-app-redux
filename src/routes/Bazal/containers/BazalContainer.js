import { connect } from 'react-redux'
import { calculateBazal, closeResultModal, triggerConfigModal, handleInputChange, setDefaultConfig } from '../modules/bazal'

import { bazalConfiguration} from './../../../config/Configuration'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Bazal from '../components/Bazal'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  calculateBazal: () => calculateBazal(),
  closeResultModal: () => closeResultModal(),
  triggerConfigModal: () => triggerConfigModal(),
  setDefaultConfig: () => setDefaultConfig(),
  handleInputChange: (event) => handleInputChange(event)
}

const mapStateToProps = (state) => ({
  weight : state.bazal.weight,
  showResultModal : state.bazal.showResultModal,
  showConfigModal : state.bazal.showConfigModal,
  bazalResult : state.bazal.bazalResult,

  until10 : state.bazal.until10,
  until20 : state.bazal.until20,
  above20 : state.bazal.above20,

  configSetToDefault: state.bazal.until10 === bazalConfiguration.until10 
    && state.bazal.until20 === bazalConfiguration.until20
    && state.bazal.above20 === bazalConfiguration.above20
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Bazal)
