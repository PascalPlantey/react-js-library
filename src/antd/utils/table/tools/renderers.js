/**
 * Transforms a date for a render in a Table component
 * @param {Date} v Dat
 * @returns {string} 
 */
export const dateRender = v => v.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });