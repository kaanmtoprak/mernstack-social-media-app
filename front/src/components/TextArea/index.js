import React from 'react';
import { Input } from 'antd';
import {Button} from '../index';
import './textarea.scss';


const CostumTextArea = () => {
    const { TextArea } = Input;

    const onChange = (e) => {
        console.log('Change:', e.target.value);
      };

  return (
    <div className='textarea'>
        <TextArea
      showCount
      onChange={onChange}
      placeholder="Text Here..."
      maxLength={150}
      allowClear
      style={{
        resize: 'none',
      }}
    />
    <div className="action-group">
    <Button iconLeft="plane" color="white">
        Send
    </Button>
    </div>

    </div>
  )
}

export default CostumTextArea