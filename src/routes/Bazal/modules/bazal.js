import calculateBazalFunction from './bazalCalculation'
import { bazalConfiguration} from './../../../config/Configuration'

// ------------------------------------
// Constants
// ------------------------------------
export const BAZAL_CALCULATE = 'BAZAL_CALCULATE'
export const BAZAL_CLOSE_RESULT_MODAL = 'BAZAL_CLOSE_RESULT_MODAL'

export const BAZAL_TRIGGER_CONFIG_MODAL = 'BAZAL_TRIGGER_CONFIG_MODAL'
export const BAZAL_DEFAULT_CONFIG = 'BAZAL_DEFAULT_CONFIG'

export const BAZAL_INPUT_HANDLE = 'BAZAL_INPUT_HANDLE'

// ------------------------------------
// Actions
// ------------------------------------
//bazal calculation actions
export function calculateBazal() {
  return {
    type: BAZAL_CALCULATE
  }
}

export function closeResultModal() {
  return {
    type: BAZAL_CLOSE_RESULT_MODAL
  }
}

//config actions
export function triggerConfigModal() {
  return {
    type: BAZAL_TRIGGER_CONFIG_MODAL
  }
}

export function setDefaultConfig() {
  return {
    type: BAZAL_DEFAULT_CONFIG
  }
}

//common actions
export function handleInputChange(event) {
  return {
    type: BAZAL_INPUT_HANDLE,
    payload: {
      value: event.target.value,
      name: event.target.id
    }
  }
}


export const actions = {
  calculateBazal,
  closeResultModal,
  triggerConfigModal,
  setDefaultConfig,
  handleInputChange
}



// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // action to open bazal configuration in modal window
  [BAZAL_TRIGGER_CONFIG_MODAL] : (state, action) => {
    state.showConfigModal = !state.showConfigModal;
    return Object.assign({}, state);
  },
  [BAZAL_DEFAULT_CONFIG] : (state, action) => {
    return Object.assign({}, state, bazalConfiguration);
  },

  [BAZAL_CLOSE_RESULT_MODAL] : (state, action) => {
    state.showResultModal = false;
    return Object.assign({}, state);
  },
  [BAZAL_CALCULATE] : (state, action) => {
    let weight = state.weight;
    if(weight === undefined) {
      return state;
    }

    let result = calculateBazalFunction(weight, state.until10, state.until20, state.above20);
    state.showResultModal = true;
    state.bazalResult = result.calculationText;
    return Object.assign({}, state);
  },

  [BAZAL_INPUT_HANDLE] : (state, action) => {
    let num = Number(action.payload.value);
    console.log(num);
    if(isNaN(num)) {
      return Object.assign({}, state);
    }
    state[action.payload.name] = num;
    return Object.assign({}, state);
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { bazalResult : [], ...bazalConfiguration}
export default function bazalReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
