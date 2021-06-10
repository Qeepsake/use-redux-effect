/**
 * @author Aspect Apps Limited
 * @description
 */
import { useRef, useEffect } from 'react';
import { useStore } from 'react-redux';
import _ from 'lodash';
/**
 * Subscribes to redux store events
 *
 * @param effect
 * @param type
 * @param deps
 */
export function useReduxEffect(effect, type, deps = []) {
    const currentValue = useRef(null);
    const store = useStore();
    const handleChange = () => {
        const state = store.getState();
        const action = state.action;
        const previousValue = currentValue.current;
        currentValue.current = action.count;
        if (previousValue !== action.count &&
            _.castArray(type).includes(action.type)) {
            effect(action);
        }
    };
    useEffect(() => {
        const unsubscribe = store.subscribe(handleChange);
        return () => unsubscribe();
    }, deps);
}
