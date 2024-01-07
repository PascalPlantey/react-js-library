import useToggle from '../misc/useToggle';

/**
 * Returns a function which forces a render
 * @returns {Function} function(): void
 * @memberof Hooks#
 */
const useForceRender = () => {
  const [, toggle] = useToggle();

  return toggle;
};

export default useForceRender;