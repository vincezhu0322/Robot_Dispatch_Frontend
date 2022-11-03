import { Form, Input, Button, message, Select } from "antd";
import React from "react";
import { addNewVehicle } from "../utils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Option } = Select;

class AddVehicle extends React.Component {
  state = {
    loading: false,
  };

  handleAddVehicle = async (values) => {
    const {onAddSuccess} = this.props;
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
      const newVehicle = await addNewVehicle(formData);
      message.success("Vehicle successfully added");
      onAddSuccess(newVehicle);

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
          <Input placeholder="Eneter Vehicle Name" style={{ width: 180 }} />
        </Form.Item>
        <Form.Item
          label="Vehicle Status"
          name="status"
          rules={[{ required: true }]}
        >
          <Select defaultValue="Select Status" style={{ width: 180 }}>
            <Option value="available">Available</Option>
            <Option value="unavailable">Unavailable</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Vehicle Location"
          name="center_id"
          rules={[
            { required: true, message: "Please select a dispatch center" },
          ]}
        >
          <Select defaultValue="Select Center" style={{ width: 180 }}>
            <Option value="1">Center 1</Option>
            <Option value="2">Center 2</Option>
            <Option value="3">Center 3</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Vehicle Type"
          name="vehicle_type"
          rules={[{ required: true }]}
        >
          <Select defaultValue="Select Type" style={{ width: 180 }}>
            <Option value="ROBOT_HEAVY">Robot_Heavy</Option>
            <Option value="ROBOT_LIGHT">Robot_Light</Option>
            <Option value="DRONE_HEAVY">Drone_Heavy</Option>
            <Option value="DRONE_LIGHT">Drone_Light</Option>
          </Select>

        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            style={{
              background: "#fa5914",
              borderColor: "#fa5914",
              fontFamily: "Verdana",
              width: 180,
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
