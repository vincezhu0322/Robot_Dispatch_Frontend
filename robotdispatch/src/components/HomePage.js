import React from "react";
import { Button, Space } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons"; 
import "./style.css";
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
      <div className="HomePage" >
        <img
          src="https://i.postimg.cc/pdJpWRnV/1641667682965-pic.jpg"
          width="600"
          height="490.863"
        />

        <h1> Easy | Quick | Convenient | Automatic</h1>
        <Space
          style={{
            position: "relative",
            
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
