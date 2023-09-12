import React from 'react';
import { Form, Input } from 'antd';
import {Button} from '../index';
import './textarea.scss';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';


const CostumTextArea = () => {
    const { TextArea } = Input;
    const {user} = useAuth()

const onFinish = async (values) =>{
  const data = {
    owner:user.user._id,
    ...values
  }
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/post/add`,data);
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  
}

  return (
    <div className='textarea'>
        <Form
        className='textarea__form'
        onFinish={onFinish}
        >
          <Form.Item
          name="post"
          >
          <TextArea
          showCount
          placeholder="Text Here..."
          maxLength={150}
          allowClear
          style={{
            resize: 'none',
          }}
        />
          </Form.Item>
        <div className="action-group">
        <Button iconLeft="plane" color="white">
            Send
        </Button>
        </div>
        </Form>

    </div>
  )
}

export default CostumTextArea