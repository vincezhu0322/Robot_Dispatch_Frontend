import React from "react";
import { Form, Button, Input, Space, Checkbox, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { login, register } from "../utils";
 
class LoginPage extends React.Component {
  formRef = React.createRef();

  state = {
    asAdmin: false,
    loading: false,
  };
 
  onFinish = () => {
    console.log("finish form");
  };
 
  handleLogin = async () => {
    const formInstance = this.formRef.current;
 
    try {
      await formInstance.validateFields(); 
    } catch (error) {
      return;
    }
 
    this.setState({
      loading: true,
    });
 
    try { // call api
      const { asAdmin } = this.state;
      const resp = await login(formInstance.getFieldsValue(true), asAdmin); 
      this.props.handleLoginSuccess(resp.token, asAdmin); 
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };
 
  handleRegister = async () => {
    const formInstance = this.formRef.current;
 
    try {
      await formInstance.validateFields();
    } catch (error) {
      return;
    }
 
    this.setState({
      loading: true,
    });
 
    try {
      await register(formInstance.getFieldsValue(true), this.state.asAdmin);
      message.success("Register Successfully");
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };
 
  handleCheckboxOnChange = (e) => {
    this.setState({
      asAdmin: e.target.checked,
    });
  };
 
  render() {
    return (
      <div style={{ width: 540, margin: "130px auto" }}> 
        <p style={{fontSize:"200%",fontFamily:"Tahoma"}}>
            Enter your user ID and password to log in</p>

        <Form  style={{
              position: 'relative',
              left: '10%',
              width: '400px',
              height:"130px"
            }}
        ref={this.formRef} onFinish={this.onFinish}>
          <Form.Item 
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input style={{height:"40px"}}
              disabled={this.state.loading}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password style={{height:"40px"}}
              disabled={this.state.loading}
              placeholder="Password"
            />
          </Form.Item>
        </Form>
        <Space style={{
              position: 'relative',
              left: '17%'}}> 
          <Checkbox
            disabled={this.state.loading}
            checked={this.state.asAdmin}
            onChange={this.handleCheckboxOnChange} // 被勾选或者取消勾选后执行
          >
            As Admin
          </Checkbox>
          <Button style={{background: "#fa5914", borderColor: "#fa5914",fontFamily:"Verdana"}}
            onClick={this.handleLogin}
            disabled={this.state.loading}
            //shape="round"
            type="primary"
          >
            Log in
          </Button>
          <Button style={{background: "#53078a", borderColor: "purple",fontFamily:"Verdana" }}
            onClick={this.handleRegister}
            disabled={this.state.loading}
            //shape="round"
            type="primary"
          >
            Register
          </Button>
        </Space>
      </div>
    );
   };
}
 
export default LoginPage;