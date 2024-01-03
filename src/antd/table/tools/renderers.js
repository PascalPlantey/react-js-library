/**
 * Transforms a date for a render in a Table component, short format
 * @param {Date} v Date
 * @returns {string} 
 */
export const dateRender = v => v.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

export const dateRenderFull = v =>
  v.toLocaleDateString('en-US', {
    month: 'short', year: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
  });

/**
 * Format a number to be rendered
 * @param {number} v Value
 * @returns {string}
 */
export const integerRender = (v, o) => Intl.NumberFormat(undefined, o).format(v);
