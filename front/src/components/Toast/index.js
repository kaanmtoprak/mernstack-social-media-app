import React from 'react'
import {notification } from 'antd';
import PropTypes from 'prop-types';
import './toast.scss';


    const toastFunction = (status,message) => {
        notification.open({
            message: <span className='text--toast'>{message}</span>,
            icon:(<i className={`icon-${status}`}></i>),
            closeIcon:(<i className='icon-close'></i>),
            className:(`toast toast--${status}`)

        });
    }

      toastFunction.propTypes = {
        status: PropTypes.string,
        message: PropTypes.string
      }

      export default toastFunction

