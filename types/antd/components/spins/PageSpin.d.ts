export default PageSpin;
/**
 * Displays an antd Spin with an optional tip text. The Spin and tip are encapsulated in a container div to be displayed vertically
 * aligned. The container div is centered horizontally and vertically on the window
 * @function PageSpin
 * @param {object} props
 * @param {string} [props.containerClassName] Container class name
 * @param {object} [props.containerStyle] Extra style information for the container
 * @param {boolean} [props.hidden=false] Hide the spin?
 * @param {string} [props.tip] Tip text
 * @param {string} [props.size='default'] Spin image size ('default'|'large'|'small')
 * @param {any} [props.rest] All other {...props} are injected in the antd Spin component *
 * @returns {React.Component}
 * @memberof AntdComponents
 */
declare function PageSpin({ containerClassName, containerStyle, ...props }: {
    containerClassName?: string | undefined;
    containerStyle?: object | undefined;
    hidden?: boolean | undefined;
    tip?: string | undefined;
    size?: string | undefined;
    rest?: any;
}): React.Component;
import React from "react";
//# sourceMappingURL=PageSpin.d.ts.map