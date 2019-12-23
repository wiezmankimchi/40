import React, { useState,  } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";

import SideMenu from "../Menu/SideMenu";

import { useGlobal } from "../store/mainStore";

const { Header, Content, Footer, Sider } = Layout;

export default function SiteLayout(props) {
  const [store, actions] = useGlobal(["breadcrumb"]);
  console.table(store.breadcrumb);

  const breadcrumItem = store.breadcrumb.map((item, key) => (
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
