import React from "react";
import { Form, Input, Button, Select } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const { Option } = Select;

class SearchVehicles extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const { searchByCenter, searchById } = this.props;
    return (
      <>
        <Form
          {...layout}
          onFinish={searchById}
          style={{ maxWidth: 1000, margin: "auto" }}
        >
          <Form.Item label="Vehicle ID" name="id" rules={[{ required: true }]}>
            <Input placeholder="Eneter Vehicle ID" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              style={{
                background: "#53078a",
                borderColor: "purple",
                fontFamily: "Verdana",
                width: 180,
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
        <Form
          {...layout}
          onFinish={searchByCenter}
          style={{ maxWidth: 1000, margin: "auto" }}
        >
          <Form.Item
            label="Dispatch Center"
            name="center_id"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Select Center"
              style={{ width: 180 }}
            >
              <Option value="1">Center 1</Option>
              <Option value="2">Center 2</Option>
              <Option value="3">Center 3</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              style={{
                background: "#53078a",
                borderColor: "purple",
                fontFamily: "Verdana",
                width: 180,
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
      </>
    );
  }
}

export default SearchVehicles;
