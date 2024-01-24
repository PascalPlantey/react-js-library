export default HSplitter;
/**
 * Display two panels horizontally separated by a vertical divider. The divider can be moved using the mouse. The initial/final
 * panels widths are saved to the local storage if 'name' is provided
 * @param {object} props
 * @param {string} [props.name] Name of the storage item if we need to save/restore panels width
 * @param {number} [props.widthToColumn] Number under which the children are displayed in column
 * @param {boolean} [props.columnReverse] If true will reverse the column direction
 * @param {function} [props.onChangeMode] Sends 'row' or 'column' to the parent
 * @param {object} [props.panelsStyle] Additional styling for the left & right panels
 * @param {Array<JSX>} props.children Only two panels allowed
 * @returns {JSX}
 * @maintenance
 * + 14/01/2024: added a callback to inform of view mode ('row'|'column') and force the leftPanel height in column mode
 *               so that the graphics do not shrink (strage behavior). To make the component more generic another height
 *               parameter { left, right } could be added in a future version
 * + 22/01/2024: added a min-height style in the CSS for right and left panels, and a panelsStyle additional parameter
 *               to let the parent fine tune if needed
 */
declare function HSplitter({ name, widthToColumn, panelsHeight, columnReverse, onChangeMode, panelsStyle, children }: {
    name?: string | undefined;
    widthToColumn?: number | undefined;
    columnReverse?: boolean | undefined;
    onChangeMode?: Function | undefined;
    panelsStyle?: object | undefined;
    children: Array<JSX>;
}): JSX;
//# sourceMappingURL=HSplitter.d.ts.map