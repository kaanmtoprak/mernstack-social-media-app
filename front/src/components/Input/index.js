import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Input as AntdInput} from 'antd';
import './input.scss';

const Input = ({label,type,iconLeft,...props}) => {
  return (
    <div className={classNames('input')} >
        {label && <div className='input__label'>{label}</div>}
        <div className="input__content">
            {iconLeft && <i className={`icon-${iconLeft}`}></i>}
            <AntdInput type={type} {...props}/>
        </div>

    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    iconLeft: PropTypes.string

}

export default Input