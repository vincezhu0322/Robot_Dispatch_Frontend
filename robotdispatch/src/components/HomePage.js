import React from "react";
import { Button, Space } from "antd";



class HomePage extends React.Component {
    state = {
        loading: false,
      };
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }
    
    handleClick=()=> {
        this.setState({
            loading: true,
          });
        this.props.handleToLogIn(); 
        this.setState({
            loading: false
         });
    }
  render() {
    return (
        <div style={{ width: 340, margin: "130px auto" }}> 
          <p style={{fontSize:"200%",fontFamily:"Tahoma"}}>
              Welcome to Dispatcher!</p>
        <ul>
        <li>Schedule pickups easily</li>
        <li>Quickly find and track previous shipments</li>
        <li>Create shipments online</li>
        </ul>

              
          <Space style={{
                position: 'relative',
                left: '-13%'}}> 
            <Button style={{background: "#53078a", borderColor: "#purple",fontFamily:"Verdana"}}
              onClick={this.handleClick}
              disabled={this.state.loading}
              //shape="round"
              type="primary"
            >
              OPEN A FREE ACCOUNT/SIGN IN YOUR ACCOUNT
            </Button>
          </Space>
        </div>
      );
     };
}
export{ HomePage };
