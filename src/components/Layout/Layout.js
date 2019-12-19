import React, { useState, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";

import SideMenu from "../Menu/SideMenu";
import { SiteContext } from "../Context/siteContext";

const { Header, Content, Footer, Sider } = Layout;

export default function SiteLayout(props) {
  const { breadcrumb } = useContext(SiteContext);
  console.log(breadcrumb);

  const breadcrumItem = breadcrumb.map((item, key) => (
    <Breadcrumb.Item key={key}>{item}</Breadcrumb.Item>
  ));

  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Router>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div className="logo" />
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {breadcrumItem}
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Wiezman</Breadcrumb.Item> */}
            </Breadcrumb>
            <div
              style={{ padding: 24, background: "#EFEEEE", minHeight: "85vh" }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>©Wiezman Kimchi 2019</Footer>
        </Layout>
      </Router>
    </Layout>
  );
}
