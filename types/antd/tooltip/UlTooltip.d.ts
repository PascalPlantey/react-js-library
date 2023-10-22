export default UlTooltip;
/**
 * Shows a tooltip only if values are provided
 * @param {object} props
 * @param {array|string} [props.liValues] Values to be displayed in a <li> style
 * @param {JSX} [props.children] The elements to be displayed
 * @param {array<object>} [props.rest] All other props are forwarded to the tooltip (ie. placement=)
 * @returns {JSX}
 */
declare function UlTooltip({ liValues, children, ...rest }: {
    liValues?: array | string;
    children?: any;
    rest?: any;
}): JSX;
declare namespace UlTooltip {
    namespace defaultProps {
        let liValues: string;
    }
}
//# sourceMappingURL=UlTooltip.d.ts.map