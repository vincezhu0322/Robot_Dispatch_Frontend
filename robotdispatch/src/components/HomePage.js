import React from "react";
import { Button, Space } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons"; 

class HomePage extends React.Component {
  state = {
    loading: false,
  };
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  handleClick = () => {
    this.setState({
      loading: true,
    });
    this.props.handleToLogIn();
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <>
      <div display = "flex" style={{ width: 340, margin: "60px auto" , alignItems : "center",}}>
        <img
          src="https://i.postimg.cc/pdJpWRnV/1641667682965-pic.jpg"
          width="600"
          height="600"
        />

        <p align="center" > Easy | Quick | Conveninent | Automatic</p>
        <Space
          style={{
            position: "relative",
            left: "-13%",
          }}
        >
          <Button
            style={{
              background: "#53078a",
              borderColor: "#purple",
              fontFamily: "Verdana",
              width:600
            }}
            onClick={this.handleClick}
            disabled={this.state.loading}
            //shape="round"
            type="primary"
          >
            Free Registration/LogIn
          </Button>
        </Space>
      </div>
      </>
    );
  }
}
export { HomePage };
