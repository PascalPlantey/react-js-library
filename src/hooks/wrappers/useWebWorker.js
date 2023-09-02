import { useState, useRef } from 'react';

import { WebWorker } from '../../js';

/**
 * _Worker Specialized Worker to enable the definition of the useWorker
 */
class _Worker extends WebWorker {
  /**
   * Define the worker code using the parents code
   * @param {function} onMessage Function receiving the parent message
   * @description if your code is "value => value + 1" the code set in the worker will be:
   *  onmessage = msg => {
   *    const action = value => value + 1;
   *    const { data } = msg;                                   // Extracts the data received from message
   *    const result = action(data);                            // Perform parent defined action
   *    postMessage(result);                                    // Send back result to useWorker
   *  }
   */
  constructor(onMessage) {
    const code = `msg => {
      const action = ${onMessage.toString()};
      const { data } = msg;
      const result = action(data);
      postMessage(result);
    }`;
    super(code);
  }

  /**
   * Changed the default object type name visible through Object.prototype.toString.call
   * @returns {string}
   */
  get [Symbol.toStringTag]() {
    return '_Worker';
  }
};

/**
 * Simple hook built around the WebWorker. To avoid losing state updates in case of multiple runs,
 * results are queued is an array (`state.data`)
 * @param {WebWorkerFunction} code Function to be executed when a message is received
 * @returns {useWebWorkerResult} Execution status
 * @memberof Hooks#
 */
const useWebWorker = code => {
  /**
   * We need to build a Worker at startup on if user wants to run after a kill (after a 'kill' the worker cannot run anymore)
   * @returns {Worker} new Worker prepared
   * @description We use worker.onmessage and onerror functions to manage the state of execution
   */
  const initWorker = () => {
    const worker = new _Worker(code);

    worker.onmessage = msg => {                          // Receives the message containing the result returned by the provided code
      const { data : result } = msg;                     // Get the result for use in the state update
      setState(prevState => {
        const { queueCount, data } = prevState;
        data.push(result);
        return({ ...prevState, execStatus: queueCount > 1 ? 'RUNNING' : 'IDLE', success: true, queueCount: queueCount - 1, comment: 'execution succeeded', evt: undefined });
      });
    };
  
    worker.onerror = evt => {                             // Receives the event fired in case of an error when excuting the worker code
      setState(prevState => {
        const { queueCount } = prevState;
        return({ ...prevState, execStatus: queueCount > 1 ? 'RUNNING' : 'IDLE', success: false, queueCount: queueCount - 1, comment: 'last execution failed', evt });
      });
    };

    return worker;
  };
  const workerRef = useRef(initWorker());

  const run = param => {                                  // Parent needs the worker code to run, using the 'param' parameter value
    setState(prevState => {
      const { execStatus, queueCount } = prevState;

      switch(execStatus) {
        case 'IDLE':
          workerRef.current.postMessage(param);           // Request execution of worker code, with an empty data array
          return ({ ...prevState, execStatus: 'RUNNING', success: undefined, queueCount: 1, comment: 'message sent for execution', data: [], evt: undefined });
        case 'RUNNING':                                   // Worker has a queue of incoming messages, enabling to request a run while it is running,
          workerRef.current.postMessage(param);           // the new run will be queued
          return ({ ...prevState, queueCount: queueCount + 1, comment: 'warning, multiple executions queued', evt: undefined });
        case 'DEAD':
          workerRef.current = initWorker();               // Trying to run but the worker is 'DEAD' (has been 'killed'), we need to create
          workerRef.current.postMessage(param);           // a new worker and request execution
          return ({ ...prevState, execStatus: 'RUNNING', success: undefined, queueCount: 1, comment: 'revived a dead worker', data: [], evt: undefined });
        default:
          return ({ ...prevState, execStatus: 'undefined state', data: [], evt: undefined });
      }
    });
  };

  const kill = () => {                                    // Stop worker activity and definitively make it unusable
    workerRef.current.terminate();
    setState({ ...state, execStatus: 'DEAD', success: undefined, queueCount: 0, comment: 'worker terminated', data: [], evt: undefined });
  };

  const [state, setState] = useState({
    execStatus: 'IDLE',
    success: undefined,
    queueCount: 0,
    comment: '',
    evt: undefined,
    data: [],
    run,
    kill
  });

  return state;
};

export default useWebWorker;