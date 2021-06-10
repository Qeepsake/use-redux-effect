"use strict";
/**
 * @author Luke Brandon Farrell
 * @description Application reducer.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionReducer = void 0;
/**
 * Initial data.
 */
const initialState = {
    type: null,
    payload: null,
    meta: null,
    error: false,
    count: 0,
};
/**
 * Calculates the application state.
 *
 * @param state
 * @param action
 * @return {*}
 */
exports.actionReducer = (state = initialState, action) => {
    return {
        ...state,
        ...action,
        count: state.count + 1,
    };
};
