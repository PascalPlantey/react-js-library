import React, { useEffect, useState } from 'react';

import './SVGIcon.css';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const SVGIconPropTypes = {
  name: PropTypes.oneOf([
    'profile', 'menufold', 'menuunfold', 'partner', 'customer', 'project', 'administration', 'map', 'link', 'mail', 'phone', 'list', 
    'cards', 'edit', 'plus', 'delete', 'graph', 'tabledata', 'maximize', 'minimize', 'medal', 'shoppingcart', 'home', 'buildings',
    'configuration', 'down', 'up'
  ]).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  cursor: PropTypes.string,
  style: PropTypes.object
};

/**
 * @function SVGIcon  
 * @param {object} props React props  
 * @param {string} props.name Icon name  
 * @param {number} [props.size=24] Icon size in pixels  
 * @param {string} [props.color] Icon color  
 * @param {(string|Array<string>)} [props.className] One or many CSS class names  
 * @param {string} [props.cursor='pointer'] Cursor name  
 * @param {object} props.style Additional style for the wrapper div  
 * @param {object} props.... Other props forwarded to the wrapper div  
 * @returns {React.Component}  
 * @memberof Components
 */
const SVGIcon = ({ name, size, color, className, cursor, style, ...props }) => {
  const [Icon, setIcon] = useState(null);
  const wSize = size * 1.6;
  const wrapperStyle = {
    width: `${wSize}px`,
    height: `${wSize}px`,
    borderRadius: `${wSize}px`,
    color,
    cursor: cursor,
    ...style
  };
  const iconStyle = {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${size}px`,
    lineHeight: `${size}px`,
    stroke: 'currentColor',
    fill: 'currentColor'
  };

  useEffect(() => {                                                               // Dynamic loading of the icon
    let mounted = true;
    const upperName = `${name[0].toUpperCase()}${name.substring(1)}`;
    import(`./svg/${upperName}.jsx`)
    .then(module => {
      if (mounted) {
        const Elt = module[upperName];
        setIcon(<Elt />);
      }
    })
    .catch(err => console.error(err));
    return(() => { 
      mounted = false;
      setIcon(null);
    });                                                                           // Deletes the icon on unmount
  }, [name]);

  return(
    <span className={classNames('svg-icon-wrapper', className)} style={wrapperStyle} {...props}>
      <span style={iconStyle}>
        {Icon}
      </span>
    </span>
  );
}

SVGIcon.defaultProps = {
  className: '',
  size: 24,
  cursor: 'pointer',
  color: '#569ac4',
  style: {},
};

SVGIcon.propTypes = SVGIconPropTypes;

export default SVGIcon;