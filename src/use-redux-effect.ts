/**
 * @author Aspect Apps Limited
 * @description
 */

import { useRef, useEffect, DependencyList } from 'react'
import { useStore } from 'react-redux'
import _ from 'lodash'
import { ReduxEffect } from './redux-effect'

/**
 * Subscribes to redux store events
 *
 * @param effect
 * @param type
 * @param deps
 */
export function useReduxEffect(
  effect: ReduxEffect,
  type: string | string[],
  deps: DependencyList = [],
): void {
  const currentValue = useRef(null)
  const store = useStore()

  const handleChange = (): void => {
    const state = store.getState()
    const action = state.action
    const previousValue = currentValue.current
    currentValue.current = action.count

    if (
      previousValue !== action.count &&
      _.castArray(type).includes(action.type)
    ) {
      effect(action)
    }
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(handleChange)
    return (): void => unsubscribe()
  }, deps)
}
