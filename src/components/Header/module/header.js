import LOCATION_CHANGE from '../../../store/location'

export const CHANGE_HEADER = 'CHANGE_HEADER';

export function changeHeader(text) {
  return {
    type: CHANGE_HEADER,
    payload: text
  }
}

const ACTION_HANDLERS = {
  CHANGE_HEADER : (state, action) => action.payload
}

const initialState = 'Kejt App';
export default function headerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
