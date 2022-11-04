import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  message,
  Card,
  List,
  Button,
  Divider,
  Layout,
  TimePicker
} from 'antd';
import Text from "antd/lib/typography/Text";
import VehicleDetailInfoButton from './VehicleDetailInfoButton';
import { searchVehicleByFilter } from './CreateShipment';
import { searchVehicle } from '../utils';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;
const { Content } = Layout;

const style = {
    padding: '8px 0',
    background: '#fafafa',
}


class AddressPage extends React.Component {
    state = {
        data: this.props.data,
    };

    handleOnFinish = async(values) => {
      const dataForm = new FormData();
      dataForm.append("test",1);
      dataForm.append("pickup_address", values.pickup_address);
      dataForm.append("delivery_address", values.delivery_address);
      dataForm.append("pickup_time", values.pickup_time.format("hh:mm:ss"));
      dataForm.append("delivery_time", values.delivery_time.format("hh:mm:ss"));
      dataForm.append("delivery_length", 5);
      dataForm.append("delivery_width", 5);
      dataForm.append("delivery_height", 5);
      dataForm.append("delivery_weight", 5);
      this.props.setData(dataForm);
      try {
        const resp = await searchVehicle(dataForm);
        this.props.setVehicleList(resp);
        message.success("Found Available Vehicle");
      } catch (error) {
        message.error(error.message);
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
    render() {
        return (
            <>
                <Form 
                    onFinish={ this.handleOnFinish }
                    style={style}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 16 }}
                    // layout='horizontal'
                >
                    <Divider>From</Divider>
                    <Form.Item label="Name (From)" name="pickup_name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Pick Up Address" name="pickup_address">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Pick Up Date" name="pickup_date" >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Pick Up Time" name="pickup_time" >
                        <TimePicker />
                    </Form.Item>

                    <Divider>To</Divider>
                    <Form.Item label="Name (To)" name="delivery_name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Delivery Address" name="delivery_address">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Delivery Date" name="delivery_date" >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Delivery Time" name="delivery_time" >
                        <TimePicker />
                    </Form.Item>

                    <Divider >Package Information</Divider>
                    <Form.Item label="Length" name="delivery_length" rules={[{ type: "number" }]}>
                        <InputNumber min={1}/> inch
                    </Form.Item>
                    <Form.Item label="Width" name="delivery_width"  rules={[{ type: "number" }]}>
                        <InputNumber min={1}/> inch
                    </Form.Item>
                    <Form.Item label="Height" name="delivery_height"  rules={[{ type: "number" }]}>
                        <InputNumber min={1}/> inch
                    </Form.Item> 
                    <Form.Item label="Weight" name="delivery_weight" rules={[{ type: "number" }]}>
                        <InputNumber min={1} /> lbs
                    </Form.Item>
                    <Form.Item>
                    <Button loading={this.state.loading} type="primary" htmlType="submit">
                        Search
                    </Button>
                  </Form.Item>
                </Form>
             

                {/* <List 
                    style={{ marginTop: 20 }} 
                    loading={this.state.loading}
                    grid={{
                        gutter:16,
                        xs: 1,
                        sm: 3,
                        md: 3,
                        lg: 3,
                        xl: 4,
                        xxl: 4,
                    }}
                    dataSource={this.state.data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card
                                key={item.id}
                                title={
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                    <Text ellipsis={true} style={{ maxWidth: 150 }}>
                                        Vehicle: {item.name}
                                    </Text>
                                    <VehicleDetailInfoButton vehicle={item} />
                                    </div>
                                }
                                >
                                <Text>ID: {item.id}</Text>
                                <Divider />
                                <Text>Status: {item.status}</Text>
                            </Card>
                        </List.Item>
                    )}
                /> */}
            </>
          );
    }
}


export default AddressPage;
