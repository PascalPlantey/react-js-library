export default ClearTableFilters;
/**
 * Show a "clear filter" button on top of an antd Table
 * @param {object} props
 * @param {JSX} props.icon Icon to be displayed (compilation error if I import an antd Icon here)
 * @param {function} props.isFilterActive Indicates if a filter is active
 * @param {function} props.onClearFilters Called when the user clicks the button
 * @returns {JSX}
 */
declare function ClearTableFilters({ isFilterActive, onClearFilters, ...rest }: {
    icon: JSX;
    isFilterActive: Function;
    onClearFilters: Function;
}): JSX;
//# sourceMappingURL=ClearTableFilters.d.ts.map