import { resolve } from '../../js';
import { isReactElement } from '../../js/is';

/**
 * Enables a basic switch within the render of a component. The provided 'cases' is an array in which each element is an object with
 * two properties 'condition' & 'action', where 'condition' is a boolean and 'action' a function (returning JSX) or a JSX value.
 * The cases are evaluated in order and the value returned is the first one which condition is true. The last case can be 
 * with an undefined 'condition' which is considered as the default return value. If no default is provided Switch returns null.
 * @param {Array} cases Component props [{ condition: c1, action: a1 }, { condition: c2, action: a2 }, ...]
 * @memberof Components
 * @returns JSX
 */
const Switch = ({ cases }) => {
  const handleAction = action => {
    const result = resolve(action);
    console.assert(isReactElement(action), "Switch: returned value does not seem to be a JSX element", action);
    return result;
  };

  for(const { condition, action } of cases)
    if      (condition === true)      return handleAction(action);
    else if (condition === undefined) return handleAction(action);

  return null;
};

export default Switch;