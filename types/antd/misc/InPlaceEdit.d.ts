export default InPlaceEdit;
/**
 * Allow in place editing using a Typography.Text component. If needed an alternate component can
 * be used (editComponent) when the user starts editing the value
 * @param {Object} props
 * @param {String|Number} props.value
 * @param {ReactElement|undefined} props.editComponent
 * @param {Function} props.onChange Called when value changes
 * @param {Object} props.rest All other props forwarded to the Typography component
 * @returns {JSX}
 */
declare function InPlaceEdit({ value, editComponent, onChange, ...rest }: {
    value: string | number;
    editComponent: ReactElement | undefined;
    onChange: Function;
    rest: Object;
}): JSX;
//# sourceMappingURL=InPlaceEdit.d.ts.map