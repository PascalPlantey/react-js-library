export default SpinWithTip;
/**
 * Displays an antd Spin form with an optional tip text. The Spin and tip are encapsulated in a container div to be displayed vertically
 * aligned
 * @function SpinWithTip
 * @param {object} props
 * @param {string} [props.containerClassName] Container class name
 * @param {object} [props.containerStyle] Extra style information for the container
 * @param {boolean} [props.hidden=false] Hide the spin?
 * @param {string} [props.tip] Tip text
 * @param {string} [props.size='default'] Spin image size ('default'|'large'|'small')
 * @param {React.MutableRefObject} [props.ref] Ref set in the container div
 * @param {any} [props.rest] All other {...props} are injected in the antd Spin component
 * @returns {React.Component}
 * @memberof AntdComponents
 */
declare const SpinWithTip: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
import React from "react";
//# sourceMappingURL=SpinWithTip.d.ts.map