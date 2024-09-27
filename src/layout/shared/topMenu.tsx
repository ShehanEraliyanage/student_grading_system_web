import { Layout, Button, Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

interface TopMenuProps {
  title?: string;
}

const TopMenu: React.FC<TopMenuProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <StyledHeader>
      <Title>
        <Avatar
          icon={<UserOutlined />}
          style={{ marginRight: 8, backgroundColor: "#1890ff" }}
        />
        {title || "Welcome!"}
      </Title>

      <RightSection>
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Button>
      </RightSection>
    </StyledHeader>
  );
};

export default TopMenu;
