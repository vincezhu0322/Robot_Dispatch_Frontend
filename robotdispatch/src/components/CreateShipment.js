import React from "react";
import {
    Form,
    DatePicker,
    Button,
    Select,
    Input
  } from "antd";

const { TextArea } = Input;

class CreateShipment extends React.Component {
    state = {
        data: [],
        loading: false,
    };

    render() {
        return (
            <>
                <Form layout="Horizontal">
                    <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                        
                    </Form.Item>
                    <Form.Item label="From" name="from_address" rules={[{ required: true }]}>
                        
                    </Form.Item>
                    <Form.Item label="To" name="to_address" rules={[{ required: true }]}>
                        
                    </Form.Item>
                    <Form.Item label="Shipping Vehicle" name="shipping_vehicle">
                        <Select>
                            <Select.Option value="autobot_1">Autobot 1</Select.Option>
                            <Select.Option value="autobot_2">Autobot 2</Select.Option>
                            <Select.Option value="drone_1">Drone 1</Select.Option>
                            <Select.Option value="drone_2">Drone 2</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Weight" name="shipping_weight" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Pick Up Date" name="pick_up_date" rules={[{ required: true }]}>
                        <DatePicker />
   
                    </Form.Item>
                    <Form.Item label="Package Description" name="package_description">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Create Shipment">
                        <Button loading={this.state.loading} type="primary" htmlType="submit">Ship</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export { CreateShipment };