import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const StyledCard = styled.div`
  width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 24px;
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }
`;

const StyledInput = styled(Input)`
  height: 40px;
  border-radius: 5px;
`;

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #1890ff;
  }
`;

const StyledForgot = styled.a`
  float: right;
  color: #1890ff;
`;

const StyledButton = styled(Button)`
  background-color: #1890ff;
  border-color: #1890ff;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledLink = styled.a`
  color: #1890ff;
`;

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <StyledCard>
        <StyledTitle level={3}>Login</StyledTitle>
        <StyledForm
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <StyledInput
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <StyledInput
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <StyledCheckbox name="remember">Remember me</StyledCheckbox>
            <StyledForgot href="">Forgot password?</StyledForgot>
          </Form.Item>

          <Form.Item>
            <StyledButton type="primary" htmlType="submit" block>
              Log in
            </StyledButton>
            Or <StyledLink href="">register now!</StyledLink>
          </Form.Item>
        </StyledForm>
      </StyledCard>
    </Container>
  );
};

export default Login;
