import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../api/authHooks";
import { UserLoginI } from "../../types/auth.types";
import { useAuth } from "../../providers/auth-context";

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
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { mutate: login, isLoading, isError } = useLoginUser();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const onFinish = (values: unknown) => {
    const userValues = values as UserLoginI;
    login(userValues, {
      onSuccess: (data) => {
        // Assuming 'data.token' contains the token
        setToken(data.access_token);
        message.success("Login successful!");
        navigate("/dashboard");
      },
      onError: (error: any) => {
        message.error(error?.response?.data?.message || "Login failed.");
      },
    });
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
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <StyledInput
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
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
            <StyledForgot href="/forgot-password">
              Forgot password?
            </StyledForgot>
          </Form.Item>

          <Form.Item>
            <StyledButton
              type="primary"
              htmlType="submit"
              block
              loading={isLoading} // Disable button while loading
            >
              Log in
            </StyledButton>
            Or <StyledLink href="/register">register now!</StyledLink>
          </Form.Item>
        </StyledForm>
        {isError && (
          <Typography.Text type="danger">Login failed.</Typography.Text>
        )}
      </StyledCard>
    </Container>
  );
};

export default Login;
