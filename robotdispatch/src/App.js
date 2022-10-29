import { Layout, Dropdown, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import LoginPage from "./components/LoginPage";
import { Footer } from "antd/lib/layout/layout";
import AdminHomePage from "./components/AdminHomePage";
import GuestHomePage from "./components/GuestHomePage";
import { MainPage } from "./components/MainPage";



 
const { Header, Content } = Layout;
 
class App extends React.Component {
  state = {
    gotoLog: false,
    authed: false,
    asHost: false,
  };
 
  componentDidMount() {
    const authToken = localStorage.getItem("authToken");
    const asHost = localStorage.getItem("asHost") === "true";
    this.setState({
      authed: authToken !== null,
      asHost,
    });
  }
 
  handleLoginSuccess = (token, asHost) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("asHost", asHost);
    this.setState({
      authed: true,
      asHost,
    });
  };
 
  handleToLogIn = (token) => {
    localStorage.setItem("gotoLog", token);
    this.setState({
      gotoLog: true
    });
  };
  handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("asHost");
    localStorage.removeItem("gotoLog");
    this.setState({
      authed: false,
    });
  };
 
  renderContent = () => {
    if (!this.state.gotoLog) {
      return <MainPage handleToLogIn={this.handleToLogIn}/>;
    }
    if (!this.state.authed) {
      return <LoginPage handleLoginSuccess={this.handleLoginSuccess} />;
    }
 
    if (this.state.asHost) {
      return <AdminHomePage/>;
    }

    return <GuestHomePage/>;
  };
 
  userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={this.handleLogOut}>
        Log Out
      </Menu.Item>
    </Menu>
  );
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header style={{ background: "#53078a",display: "flex", justifyContent: "space-between",height:"65px" }}>
          <div style={{ fontSize: 22, fontWeight: 600, color: "white" }}>
            Dispatcher
          </div>
          {this.state.authed && (
            <div>
              <Dropdown trigger="click" overlay={this.userMenu}>
                <Button icon={<UserOutlined />} shape="circle" />
              </Dropdown>
            </div>
          )}
        </Header>
        <Content
          style={{ height: "calc(100% - 64px)", margin: 20, overflow: "auto" }}
        >
          {this.renderContent()}
        </Content>

      </Layout>
    );
  }
}
 
export default App;
