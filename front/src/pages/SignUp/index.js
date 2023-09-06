import React from "react";
import {Form } from "antd";
import './sign-up.scss';
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, toastFunction } from "../../components";
import axios from 'axios'


const SignUp = () => {
  const navigate = useNavigate()
    const onFinish = async (values) => {
        const user = {
          name:values.name,
          surname:values.surname,
          username:values.username,
          email:values.email,
          password:values.password
        }
        try {
         const response =  await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`,user);
         if (response.data.success) {
          toastFunction('success','You sign up successfully!')
          setTimeout(()=>{
           navigate('/')
          },3000)
        }else {
          toastFunction('danger',response.data.message)
        }
        } catch (error) {
          console.log(error)
          toastFunction('danger',error.message)
        }
        
        
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        toastFunction('danger','There is an error!')
      };

    return (
        <div className="sign-up">

          <Form
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1>Sign Up</h1>
            <div className="sign-up__item__double">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input iconLeft="group" label="Name"/> 
            </Form.Item>
            <Form.Item
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Please input your surname!",
                },
              ]}
            >
              <Input iconLeft="group" label="Surname"/> 
            </Form.Item>
            </div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input iconLeft="group" label="Username"/> 
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
              ]}
            >
              <Input iconLeft="mail" label="Email"/> 
            </Form.Item>
      
              <div className="sign-up__item__double inputs__password">
              <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                    min:6,
                    max:16,
                    required:true,
                    message:'Must be min 6 max 16 characters!'

                }
              ]}
              hasFeedback
            >
              <Input iconLeft="lock" type="password" label="Password" />
            </Form.Item>
            <Form.Item
              name="confirm-password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Do not match!'));
                  },
                }),
              ]}
            >
              <Input iconLeft="lock" type="password" label="Confirm Password" />
            </Form.Item>
              </div>
            <Form.Item>
              <Button iconLeft="lock" color="black" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
            <span>Do you have an account ? <Link to="/sign-in"><strong>Sign In</strong></Link></span>
          </Form>
        </div>
      )
}
;
export default SignUp;
