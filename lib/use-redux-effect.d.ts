/**
 * @author Aspect Apps Limited
 * @description
 */
import { DependencyList } from 'react';
import { ReduxEffect } from './redux-effect';
/**
 * Subscribes to redux store events
 *
 * @param effect
 * @param type
 * @param deps
 */
export declare function useReduxEffect(effect: ReduxEffect, type: string | string[], deps?: DependencyList): void;
