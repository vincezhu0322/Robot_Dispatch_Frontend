import { Form, Input, Button, message, Checkbox, Space, Radio } from "antd";
import React from "react";
import { searchVehicles, addNewVehicle } from "../utils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class AddAndSearchVehicle extends React.Component {
  state = {
    loading: false,
    isSearch: false,
  };

  formRef = React.createRef();

  handleCheckboxOnChange = (e) => {
    this.setState({
      isSearch: e.target.checked,
    });
  };

  handleAdd = async (values) => {
    const formData = new FormData();
    // add other data to dataForm
    formData.append("name", values.name);
    formData.append("status", values.status);
    formData.append("center_id", values.center_id);
    formData.append("vehicle_type", values.vehicle_type);

    this.setState({
      loading: true,
    });

    try {
      await addNewVehicle(formData);
      message.success("Vehicle successfully added");
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleSearch = async (values) => {
    this.setState({
      loading: true,
    });

    try {
      const resp = await searchVehicles(values);
      this.setState({
        data: resp,
      });
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleSubmit = (values) => {
    this.state.isSearch
      ? this.searchVehicles(values)
      : this.addNewVehicle(values);
    this.setState({
      isSearch: false,
    });
  };

  render() {
    return (
      <Form
        {...layout}
        name="nest-message"
        onFinish={this.handleAdd}
        style={{ maxWidth: 1000, margin: "auto" }}
      >
        <Form.Item
          label="Vehicle Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Vehicle Status"
          name="status"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio.Button value="available">available</Radio.Button>
            <Radio.Button value="unavailable">unavailable</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Vehicle Location"
          name="center_id"
          rules={[
            { required: true, message: "Please select a dispatch center" },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="1">Center 1</Radio.Button>
            <Radio.Button value="2">Center 2</Radio.Button>
            <Radio.Button value="3">Center 3</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Vehicle Type"
          name="vehicle_type"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio.Button value="Robot_Heavy">Robot_Heavy</Radio.Button>
            <Radio.Button value="Robot_Light">Robot_Light</Radio.Button>
            <Radio.Button value="Drone_Heavy">Drone_Heavy</Radio.Button>
            <Radio.Button value="Drone_Light">Drone_Light</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            style={{
              background: "#fa5914",
              borderColor: "#fa5914",
              fontFamily: "Verdana",
            }}
            htmlType="submit"
            loading={this.state.loading}
            disabled={this.state.loading}
            type="primary"
          >
            Add Vehicle
          </Button>
          <Space>
            <Checkbox
              disabled={this.state.loading}
              checked={this.state.isSearch}
              onChange={this.handleCheckboxOnChange}
            >
              isSearch
            </Checkbox>
          </Space>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            style={{
              background: "#53078a",
              borderColor: "purple",
              fontFamily: "Verdana",
            }}
            htmlType="submit"
            loading={this.state.loading}
            disabled={this.state.loading}
            type="primary"
          >
            Search Vehicles
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default AddAndSearchVehicle;
