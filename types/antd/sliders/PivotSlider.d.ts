export default PivotSlider;
/**
 * Shows a slider in percentage around the value (pivot) may vary.  Returns the interval
 * @param {object} props
 * @param {string} [props.className] Container class name
 * @param {Boolean} props.disabled
 * @param {Number} props.pivot Pivotal number around which the interval is calculated
 * @param {Array<Number, Number>} props.value Minimum and maximum value of interval
 * @param {object} props.rest All other props are forwarded to the Switch
 * @param {Function} props.onChange Called when the interval changes f(interval: Array<Number, Number>)
 * @returns {JSX}
 */
declare function PivotSlider({ className, pivot, disabled, value, onChange, ...rest }: {
    className?: string | undefined;
    disabled: boolean;
    pivot: number;
    value: Array<number, number>;
    rest: object;
    onChange: Function;
}): JSX;
//# sourceMappingURL=PivotSlider.d.ts.map