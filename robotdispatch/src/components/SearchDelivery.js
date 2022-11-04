import React from "react";
import { Form, InputNumber, Button, DatePicker } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

class SearchDelivery extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const { searchById, searchByDate } = this.props;
    return (
      <>
        <Form {...layout} onFinish={searchById} style={{ maxWidth: 1000, margin: "auto" }}>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                <div style={{ fontSize: 22, fontWeight: 600, color: "purple"}}>
                    Delivery Search
                </div>
            </Form.Item>
            <Form.Item
            label="Order Id"
            name="order_id"
            rules={[{ required: true }]}
            >
               <InputNumber min={0} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
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
        <Form {...layout} onFinish={searchByDate} style={{ maxWidth: 1000, margin: "auto" }}>
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
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
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
