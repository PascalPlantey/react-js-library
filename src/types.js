/**
 * @typedef {Function} toggle Toggles from on to off or vice versa
 * @returns {void}
 */

/**
 * @typedef {object} RefObject
 * @property {any} current Property holding the 'cached' value
 */

/**
 * @typedef {Object} useEventListenerResult
 * @property {boolean} working Is the event capture running?
 * @property {toggle} toggle To toggle working on or off: () => void
 */

/**
 * @typedef {Object} useWindowHeightResult
 * @property {number} height Window height
 * @property {...useEventListenerResult} ...useEventListenerResult Is the event listener active and toggle function 
 */

/**
 * @typedef {Object} useWindowWidthResult
 * @property {number} width Window width
 * @property {...useEventListenerResult} ...useEventListenerResult Is the event listener active and toggle function 
 */

/**
 * @typedef {Object} useWindowSizeResult
 * @property {number} width Window width
 * @property {number} height Window height
 * @property {...useEventListenerResult} ...useEventListenerResult Is the event listener active and toggle function 
 */

/**
 * @typedef {Object} useComponentSizeResult
 * @property {number} width Component's width
 * @property {number} height Component's height
 * @property {boolean} working Is the event capture running?
 * @property {RefObject} ref ref to attach to the component
 * @property {toggle} toggle To toggle working on or off: () => void
 */

/**
 * @typedef {Object} useFetchResult
 * @property {undefined|number} status Fetch status (200, 201, 400, ...)
 * @property {undefined|boolean} ok Undefined before the fetch is done
 * @property {undefined|string} statusText Contains the error.message in case of problem
 * @property {boolean} loading True until fetch is over
 * @property {object} result `response.json()` result
 */

/**
 * @typedef {Object} useTimerResult
 * @property {boolean} working Is the timer running or paused?
 * @property {number} remainingTime Number of seconds remaining until stop
 * @property {function} toggle Switch `working` on or off: () => void
 * @property {function} restart Reset `remainingTime` to the initial value: () => void
 */

/**
 * @typedef {Object} useWebWorkerResult
 * @property {string} execStatus Is the Worker execution 'IDLE', 'RUNNING' or 'DEAD'
 * @property {boolean|undefined} success After the worker did run, contains the run status
 * @property {number} queueCount Number of messages waiting to be run
 * @property {string} comment Explanation of success and/or execStatus
 * @property {Array<any>} data Value(s) returned by the provided code for each queued message handled
 * @property {Event|undefined} evt Event received in case of execution error for last message
 * @property {function} run Function to start worker code (takes on parameter received by the code) (any) => void
 * @property {function} kill Function that immediately stops all worker activity (`execStatus` becomes 'DEAD')
 */

/**
 * @typedef {Object} WebWorkerMessage
 * @property {any} data Data (sent by main process) enclosed in the message
 */

/**
 * @typedef {function} WebWorkerFunction
 * @param {WebWorkerMessage} message Message sent by main process
 * @returns {void} The returned value is not used
 */

/**
 * @namespace Hooks
 */

/**
 * @namespace Components
 */

/**
 * @namespace Types
 */

/**
 * @namespace JS_BrowserHelpers
 */

/**
 * @namespace JS_IsFunctions
 */

/**
 * @namespace JS_Extensions
 */

/**
 * @namespace JS_Misc
 */

/**
 * Library types
 * @type {Object}
 * @memberof Types
 */
export const Types = {};