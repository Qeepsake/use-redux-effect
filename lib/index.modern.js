import { useRef, useEffect } from 'react';
import { useStore } from 'react-redux';
import _ from 'lodash';

function useReduxEffect(effect, type, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var currentValue = useRef(null);
  var store = useStore();

  var handleChange = function handleChange() {
    var state = store.getState();
    var action = state.action;
    var previousValue = currentValue.current;
    currentValue.current = action.count;

    if (previousValue !== action.count && _.castArray(type).includes(action.type)) {
      effect(action);
    }
  };

  useEffect(function () {
    var unsubscribe = store.subscribe(handleChange);
    return function () {
      return unsubscribe();
    };
  }, deps);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var initialState = {
  type: null,
  payload: null,
  meta: null,
  error: false,
  count: 0
};
var actionReducer = function actionReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  return _extends({}, state, action, {
    count: state.count + 1
  });
};

export { actionReducer, useReduxEffect };
//# sourceMappingURL=index.modern.js.map
