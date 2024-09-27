import { Menu } from "antd";
import {
  PieChartOutlined,
  TeamOutlined,
  BookOutlined,
  FileTextOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Style for fixing the side menu to the left
// Notice the use of a function in `width` to handle the `collapsed` prop
const StyledMenuWrapper = styled.div<{ isCollapsed: boolean }>`
  height: 100vh; /* Full viewport height */
  position: fixed; /* Fix the menu on the left side */
  left: 0;
  top: 65px;
  width: ${(props) =>
    props.isCollapsed
      ? "80px"
      : "200px"}; /* Adjust width based on collapsed state */
  transition: width 0.2s; /* Smooth transition when collapsing */
  background-color: #001529; /* Dark background to match Ant Design's dark theme */
`;

const StyledMenu = styled(Menu)`
  height: 100%;
  .ant-menu-item {
    font-size: 16px;
  }
`;

interface SideMenuProps {
  collapsed: boolean;
}

const SideMenu = ({ collapsed }: SideMenuProps) => {
  const navigate = useNavigate();

  return (
    // Pass the `collapsed` prop as `isCollapsed` to StyledMenuWrapper
    <StyledMenuWrapper isCollapsed={collapsed}>
      <StyledMenu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        inlineCollapsed={collapsed}
        onClick={({ key }) => {
          navigate(`/${key}`);
        }}
        items={[
          { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
          { key: "class", icon: <PieChartOutlined />, label: "Class" },
          { key: "student", icon: <TeamOutlined />, label: "Student" },
          { key: "subjects", icon: <BookOutlined />, label: "Subjects" },
          { key: "reports", icon: <FileTextOutlined />, label: "Reports" },
        ]}
      />
    </StyledMenuWrapper>
  );
};

export default SideMenu;
