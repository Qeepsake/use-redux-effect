/**
 * @author Luke Brandon Farrell
 * @description Application reducer.
 */
import { AnyAction } from 'redux';
interface InitialState {
    type: string | null;
    payload: any;
    meta: any;
    error: boolean;
    count: number;
}
/**
 * Calculates the application state.
 *
 * @param state
 * @param action
 * @return {*}
 */
export declare const actionReducer: (state: InitialState | undefined, action: AnyAction) => InitialState;
export {};
