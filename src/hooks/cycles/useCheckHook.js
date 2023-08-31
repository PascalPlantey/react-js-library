import { useRef, useEffect } from "react";

import { ExtMap } from "../../js";
import useToggle from "../misc/useToggle";

// Utility class for the useCheckHook only
class HookDescription {
  hookName;                                               // Name of the hook, used for display purposes only
  resultDesc = {};                                        // Save the result description (constructor parameter)
  resultRefs = new ExtMap();                              // Tracks the hook returned value
  paramsRefs = [];                                        // Tracks the parameters used when calling the hook
  initialized = false;                                    // Have a first result/params been saved?

  /**
   * Build the HookDescription
   * @param {string} name Hook name
   * @param {object} resultDesc Description of the value returned by the hook
   */
  constructor(name, resultDesc) {
    this.hookName = name
    this.resultDesc = resultDesc;
  }

  /**
   * Number of result elements in the result description
   * @returns {number}
   */
  get nbResults() {
    return this.resultDesc?.values?.length ?? 0;
  }

  /**
   * Gives the name of a result element
   * @param {number} i Index of the result element
   * @returns {string}
   */
  resultName(i) {
    return this.resultDesc.values[i].name;
  }

  /**
   * Gives the type of a result element
   * @param {number} i Index of the result element
   * @returns {string}
   */
  resultType(i) {
    return this.resultDesc.values[i].type;
  }

  /**
   * Gives the type and name of a result element
   * @param {number} i Index of the result element
   * @returns {Array<string>} [type, name]
   */
  resultInfos(i) {
    return [this.resultType(i), this.resultName(i)];
  }

  /**
   * Gives the value of an element in the hook returned value
   * @param {number} index Index of the result element
   * @param {any} results User's hook returned value
   * @returns {any} Value of 'index' element of 'results'
   */
  getResultsValue(index, results) {
    switch(this.resultDesc.type) {
      case 'simple':
        return results;
      case 'object':
        return results[this.resultName(index)];
      case 'array':
        return results[index];
      default:
        console.warn(`HookDescription ${this.hookName}, result could not be interpreted`);
        break;
      }
  }

  /**
   * Saves the last parameters used when calling the user's hook
   * @param {Array} params 
   */
  saveParams(params) {
    params && (this.paramsRefs = [...params]);
  }

  /**
   * Saves the elements extracted from the last value returned by the hook
   * @param {any} results 
   */
  saveResults(results) {
    for(let i = 0; i < this.nbResults; ++i) {
      const newValue = this.getResultsValue(i, results);

      this.resultRefs.set(this.resultName(i), newValue);
    }
  }

  /**
   * Checks if an element of the value returned by the hook has the right 'type' and/or has changed
   * @param {Array} infos [type, name]
   * @param {any} newValue Value 'name' extracted from the last value returned by the user's hook
   * @param {ExtMap} changes List of changes between the previous value and newValue
   */
  compareResultValues(infos, newValue, changes) {
    const [type, name] = infos;
    const oldValue = this.resultRefs.get(name);

    if (type !== typeof newValue)
      changes
      .getOrSet(name, [])
      .push({ type: 'New value type mismatch', found: typeof newValue, expected: type });

    if (oldValue !== newValue)
      changes
      .getOrSet(name, [])
      .push({ type: 'Value change', from: oldValue, to: newValue });
  }

  /**
   * Check if the last parameters used to call the hook have changed
   * @param {array<any>} params Last parameters used to call the hook
   */
  checkParams(params) {
    const changes = [];

    if (params && this.paramsRefs) {
      if (this.paramsRefs.length != params.length)
        changes.push(`Alert: number of params is not consistent: old ${this.paramsRefs.length}, new ${params}`)
      else
        for(let i = 0; i < params.length; ++i)
          if (this.paramsRefs[i] !== params[i])
            changes.push(`Param ${i + 1} has changed from '${this.paramsRefs[i]}' to '${params[i]}'`);

      if (changes.length) {
        console.log(`${this.hookName} params have changed, a render is likely to happen`);
        console.log('Parameters changes', changes);
      }
    }
  }

  /**
   * Check if the last value returned by the user's hook have change from previous (saved) one
   * @param {any} hookResults Last value returned by the user's hook
   */
  checkResults(hookResults) {
    const changes = new ExtMap();

    for(let i = 0; i < this.nbResults; ++i) {
      const infos = this.resultInfos(i);
      const newValue = this.getResultsValue(i, hookResults);

      this.compareResultValues(infos, newValue, changes);
    }

    if (changes.size)
      console.log('A render has generated change(s) on ${this.hookName} result', changes.objectsArray('field', 'comments', null));
    else
      console.log(`A render has generated no change(s) on ${this.hookName} result`);
  }

  /**
   * Check parameters and returned value of the last user's hook call
   * @param {array<any>} params Parameters used for the last user's hook call
   * @param {any} hookResults Returned value by the last user's hook call
   */
  checkAll(params, hookResults) {
    if (this.initialized) {
      this.checkParams(params);
      this.checkResults(hookResults);
      console.log('+--------------------------');
    }
    else
      console.log(`Ready to track ${this.hookName} result`);

    this.saveParams(params);
    this.saveResults(hookResults);
    this.initialized = true;
  }
};

/**
 * Debugging tool to check a hook. Using the hook parameters and description of the returned value, useCheckHook will:
 * + force a first render with current parameters
 * + check, after each render, which elements of the returned value could generate re-renders or calculations. If some elements
 * of the returned value change after each render, they are could candidates for a useMemo, useCallback, ... and
 * the hook should be verified/modified
 * @param {string} name Name of the hook, used for display only
 * @param {function} useHook Hook to be tested
 * @param {object} resultDescription Structure describing the returned result of the useHook function
 * @param  {...any} params Parameters to be passed to the useHook function
 * @returns {any} The value returned by the useHook function
 * @memberof Hooks#
 * @example
 * const resultDesc = {
 *   type: 'object',                            // Can be 'object', 'array', 'simple' (for string, number, ...)
 *   values: [                                  // Describes the elements of the returned value (only one if type is 'simple')
 *     { name: 'height', type: 'number' },
 *     { name: 'width', type: 'number' },
 *     { name: 'working', type: 'boolean' },
 *     { name: 'toggle', type: 'function' }
 *   ]
 * };
 *
 * const { width, height } = useCheckHook('useWindowSize', useWindowSize, resultDesc, step);
 * console.log('size', width, height);
 */
const useCheckHook = (name, useHook, resultDescription, ...params) => {
  const [, render] = useToggle();                         // Used to run one render with no parameters changes

  const descriptionRef = useRef(new HookDescription(name, resultDescription));
  const { current : description } = descriptionRef;

  const hookResults = useHook(...params);                 // Call user's hook
  description.checkAll(params, hookResults);              // Check changes in parameters or result

  useEffect(() => {                                       // Force a render
    setTimeout(() => {
      console.log('+--------------------------');
      console.log(`-> Checking ${name} with a render that should not change result`);
      render();
    }, 1000);
  }, [render, name]);

  return hookResults;
};

export default useCheckHook;
