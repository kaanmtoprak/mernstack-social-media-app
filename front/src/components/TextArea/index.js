import React from 'react';
import { Form, Input } from 'antd';
import {Button, toastFunction} from '../index';
import './textarea.scss';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';


const CostumTextArea = () => {
    const { TextArea } = Input;
    const {user} = useAuth()
    const [form] = Form.useForm(); 

const onFinish = async (values) =>{
  const data = {
    owner:user.user._id,
    ...values
  }
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/post/add`,data);
    console.log(response)
    form.resetFields();
    toastFunction("success","Your Post is created successfuly!",)
  } catch (error) {
    console.log(error)
  }
  
}

  return (
    <div className='textarea'>
        <Form
        className='textarea__form'
        onFinish={onFinish}
        form={form}
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