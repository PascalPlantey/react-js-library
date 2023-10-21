export default HSplitter;
/**
 * Display two panels horizontally separated by a vertical divider. The divider can be moved using the mouse. The initial/final
 * panels widths are saved to the local storage if 'name' is provided
 * @param {object} props
 * @param {string} [props.name] Name of the storage item if we need to save/restore panels width
 * @param {number} [props.widthToColumn] Number under which the children are displayed in column
 * @param {boolean} [props.columnReverse] If true will reverse the column direction
 * @param {Array<JSX>} props.children Only two panels allowed
 * @returns {JSX}
 */
declare function HSplitter({ name, widthToColumn, columnReverse, children }: {
    name?: string | undefined;
    widthToColumn?: number | undefined;
    columnReverse?: boolean | undefined;
    children: Array<JSX>;
}): JSX;
//# sourceMappingURL=HSplitter.d.ts.map