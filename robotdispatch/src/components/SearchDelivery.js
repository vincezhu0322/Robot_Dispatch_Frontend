import React from "react";
import { Form, InputNumber, Button, DatePicker } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class SearchDelivery extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const { search } = this.props;
    return (
      <>
        <Form {...layout} onFinish={search} style={{ maxWidth: 1000, margin: "auto" }}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <div style={{ fontSize: 22, fontWeight: 600, color: "purple"}}>
                    Delivery Search
                </div>
            </Form.Item>
            <Form.Item
            label="Fo"
            name="fo"
            rules={[{ required: true }]}
            >
               <InputNumber min={1} />
            </Form.Item>
            <Form.Item 
            label="Start Date" 
            name="start_date" 
            rules={[{ required: true }]}
            >
               <DatePicker/>
            </Form.Item>
            <Form.Item
            label="End Date" 
            name="end_date" 
            rules={[{ required: true }]}
            >
               <DatePicker/>
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
              Search Deliveries
            </Button>
            </Form.Item>
          </Form>
      </>
    );
  }
}

export default SearchDelivery;