import React from "react";
import { Form, InputNumber, Button, Radio } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

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
            <InputNumber />
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
            <Radio.Group>
              <Radio.Button value="1">Center 1</Radio.Button>
              <Radio.Button value="2">Center 2</Radio.Button>
              <Radio.Button value="3">Center 3</Radio.Button>
            </Radio.Group>
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
      </>
    );
  }
}

export default SearchVehicles;
