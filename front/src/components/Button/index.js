import React from 'react';
import './button.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({iconLeft,color,size,htmlType,...props}) => {
  return (
    <button className={classNames('button', {
        'button--green' : color === 'green',
        'button--red' : color === 'red',
        'button--black' : color === 'black',
        'button--white' : color === 'white',
        'button--small' : size === 'small',

    })} type={htmlType} {...props}>
        {iconLeft && <i className={`icon-${iconLeft}`}></i>}
        <span className='button__content'>{props.children}</span>
    </button>
  )
}

Button.propTypes = {
    iconLeft : PropTypes.string,
    color : PropTypes.string,
    size : PropTypes.string,
    htmlType : PropTypes.string,
    
}

export default Button