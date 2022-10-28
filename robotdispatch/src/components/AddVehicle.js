import { Form, Input, Button, message, Radio } from "antd";
import React from "react";
import { addNewVehicle } from "../utils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class AddVehicle extends React.Component {
  state = {
    loading: false,
  };

  handleAddVehicle = async (values) => {
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

  render() {
    return (
      <Form
        {...layout}
        name="nest-message"
        onFinish={this.handleAddVehicle}
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
            <Radio.Button value="ROBOT_HEAVY">Robot_Heavy</Radio.Button>
            <Radio.Button value="ROBOT_LIGHT">Robot_Light</Radio.Button>
            <Radio.Button value="DRONE_HEAVY">Drone_Heavy</Radio.Button>
            <Radio.Button value="DRONE_LIGHT">Drone_Light</Radio.Button>
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
        </Form.Item>
      </Form>
    );
  }
}

export default AddVehicle;
