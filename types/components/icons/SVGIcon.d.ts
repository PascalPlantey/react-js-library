export default SVGIcon;
/**
 * @function SVGIcon
 * @param {object} props React props
 * @param {string} props.name Icon name
 * @param {number} [props.size=24] Icon size in pixels
 * @param {string} [props.color] Icon color
 * @param {(string|Array<string>)} [props.className] One or many CSS class names
 * @param {string} [props.cursor='pointer'] Cursor name
 * @param {object} [props.style] Additional style for the wrapper div
 * @param {object} [props.rest] {...props} forwarded to the wrapper div
 * @returns {React.Component}
 * @memberof Components
 */
declare function SVGIcon({ name, size, color, className, cursor, style, ...props }: {
    name: string;
    size?: number | undefined;
    color?: string | undefined;
    className?: string | string[] | undefined;
    cursor?: string | undefined;
    style?: object | undefined;
    rest?: object | undefined;
}): React.Component;
declare namespace SVGIcon {
    export namespace defaultProps {
        let className: string;
        let size: number;
        let cursor: string;
        let color: string;
        let style: {};
    }
    export { SVGIconPropTypes as propTypes };
}
import React from 'react';
declare namespace SVGIconPropTypes {
    export let name: PropTypes.Validator<string>;
    let size_1: PropTypes.Requireable<number>;
    export { size_1 as size };
    let color_1: PropTypes.Requireable<string>;
    export { color_1 as color };
    let className_1: PropTypes.Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
    export { className_1 as className };
    let cursor_1: PropTypes.Requireable<string>;
    export { cursor_1 as cursor };
    let style_1: PropTypes.Requireable<object>;
    export { style_1 as style };
}
import PropTypes from 'prop-types';
//# sourceMappingURL=SVGIcon.d.ts.map