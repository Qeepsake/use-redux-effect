/**
 * @author Luke Brandon Farrell
 * @description Application reducer.
 */

/**
 * Initial data.
 */
const initialState = {
  type: null,
  payload: null,
  meta: null,
  error: false,
  count: 0
};

/**
 * Calculates the application state.
 *
 * @param state
 * @param action
 * @return {*}
 */
export const actionReducer = (state = initialState, action) => {
  return {
    ...state,
    ...action,
    count: state.count + 1,
  };
};

