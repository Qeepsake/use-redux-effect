"use strict";
/**
 * @author Aspect Apps Limited
 * @description
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReduxEffect = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const lodash_1 = __importDefault(require("lodash"));
/**
 * Subscribes to redux store events
 *
 * @param effect
 * @param type
 * @param deps
 */
function useReduxEffect(effect, type, deps = []) {
    const currentValue = react_1.useRef(null);
    const store = react_redux_1.useStore();
    const handleChange = () => {
        const state = store.getState();
        const action = state.action;
        const previousValue = currentValue.current;
        currentValue.current = action.count;
        if (previousValue !== action.count &&
            lodash_1.default.castArray(type).includes(action.type)) {
            effect(action);
        }
    };
    react_1.useEffect(() => {
        const unsubscribe = store.subscribe(handleChange);
        return () => unsubscribe();
    }, deps);
}
exports.useReduxEffect = useReduxEffect;
