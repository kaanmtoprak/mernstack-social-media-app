import React from 'react';
import './icon-button.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const IconButton = ({icon,color,size,...props}) => {
  return (
    <span className={classNames('icons-button', {
        'icons-button--green' : color === 'green',
        'icons-button--red' : color === 'red',
        'icons-button--yellow' : color === 'yellow',
        'icons-button--black' : color === 'black',
        'icons-button--small' : size === 'small',

    })} {...props}>
        <i className={`icon-${icon}`}></i> {props.children && <span className='icons-button__text'>{props.children}</span>}
    </span>
  )
}

IconButton.propTypes = {
    color : PropTypes.string,
    size : PropTypes.string,
    icon : PropTypes.string,
    
}

export default IconButton