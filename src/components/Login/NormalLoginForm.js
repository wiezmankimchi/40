import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";

function NormalLoginForm(props) {
  return (
    <div>
      <h3>Normal Login Form</h3>
      <Form className="login-form">
        <Form.Item>
          <Input prefix={<Icon type="user" />} placeholder={"User Name"} />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember Me</Checkbox>
          <a className="login-form-forgot" href="#">
            Forgot Password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}