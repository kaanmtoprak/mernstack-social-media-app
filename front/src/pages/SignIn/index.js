import React from "react";
import {Checkbox, Form } from "antd";
import './sign-in.scss';
import { Link } from "react-router-dom";
import { Button, Input, toastFunction } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useAuth } from "../../context/AuthContext";


const SignIn = () => {
    const {login} = useAuth();
    const navigate = useNavigate()

    const onFinish = async (values) => {
      const user = {
        email:values.email,
        password:values.password
      }
      try {
       const response =  await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`,user);
       console.log('response',response)
        if (response.data.success) {
          toastFunction('success','You sign in successfully!')
          setTimeout(async()=>{
            await login({
              user:response.data.user,
              accessToken:response.data.accessToken
            });
           navigate('/')
          },3000)
        }else {
          toastFunction('danger',response.data.message)
        }
      } catch (error) {
        console.log(error)
      }
      
      
    };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

    return (
        <div className="sign-in">

          <Form
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1>Sign In</h1>
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
      
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input iconLeft="lock" type="password" label="Password" />
            </Form.Item>
      
            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
      
            <Form.Item>
              <Button iconLeft="lock" color="black" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
            <span>Do not you have an account ? <Link to="/sign-up"><strong>Sign Up</strong></Link></span>
          </Form>
        </div>
      )
}
;
export default SignIn;
