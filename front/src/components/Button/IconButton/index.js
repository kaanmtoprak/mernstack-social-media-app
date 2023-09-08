import React from 'react';
import './icon-button.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const IconButton = ({icon,color,size,...props}) => {
  return (
    <span className={classNames('icon-button', {
        'icon-button--green' : color === 'green',
        'icon-button--red' : color === 'red',
        'icon-button--yellow' : color === 'yellow',
        'icon-button--black' : color === 'black',
        'icon-button--small' : size === 'small',

    })} {...props}>
        <i className={`icon-${icon}`}></i>
    </span>
  )
}

IconButton.propTypes = {
    color : PropTypes.string,
    size : PropTypes.string,
    icon : PropTypes.string,
    
}

export default IconButton