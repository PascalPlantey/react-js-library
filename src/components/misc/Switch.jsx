import { isFunction, isReactElement } from '../../js/is';

/**
 * Enables a basic switch within the render of a component. The provided 'cases' is an array in which each element is an array of type
 * [condition, action], where 'condition' is a boolean and 'action' a function (returning JSX) or a JSX value. The cases are evaluated
 * in order and the value returned is the first one which condition is true. The last case can be [undefined, action], which is considered
 * as the default return value. If no default is provided Switch returns null.
 * @param {Array} cases Component props [[condition, action], [condition, action], ...]
 * @returns JSX
 */
const Switch = ({ cases }) => {
  const handleAction = action => {
    const result = isFunction(action) ? action() : action;
    return result;
  };

  for(const [condition, action] of cases)
    if (condition === true)           return handleAction(action);
    else if (condition === undefined) return handleAction(action);

  return null;
};

export default Switch;