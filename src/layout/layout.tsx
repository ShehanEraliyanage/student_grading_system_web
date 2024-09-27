import { ReactNode, useState } from "react";
import { Layout as AntLayout } from "antd";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import theme from "../theme";
import SideMenu from "./shared/sideMenu";
import TopMenu from "./shared/topMenu";

const { Content } = AntLayout;

const ContentLayout = styled(Content)`
  margin-top: 80px;
  background-color: ${theme.gray100};
  padding: 16px 16px 16px 16px;
  height: 99%;
`;

interface LayoutProps {
  children?: ReactNode; // Make sure Layout accepts children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [title, setTitle] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntLayout
      style={{
        minHeight: "calc(100vh - 74px)",
      }}
    >
      <SideMenu collapsed={collapsed} />
      <AntLayout>
        <TopMenu title={title} />
        <ContentLayout>
          {/* If children are passed, render them; otherwise, use the Outlet for routing */}
          {children || <Outlet context={[title, setTitle]} />}
        </ContentLayout>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
