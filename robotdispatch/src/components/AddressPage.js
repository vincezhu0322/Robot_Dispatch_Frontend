import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Row,
  message,
  Col,
  Card,
  List,
} from 'antd';
import Text from "antd/lib/typography/Text";
import Item from 'antd/lib/list/Item';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

const style = {
    padding: '8px 0',
    background: '#fafafa',
}


class AddressPage extends React.Component {
    state = {
        loading: false,
    };

    render() {
        return (
            <>
                <Row>
                  <Col id='from-address' xs={24} xl={12}>
                    <Card 
                      align="top"
                      style={style}
                      title="From"
                      bordered={false}
                    >
                      <Form  
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 18 }} 
                        layout='horizontal'
                      >
                        <Form.Item label="Name" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Address 1" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Address 2">
                          <Input />
                        </Form.Item>
                        <Form.Item label="ZIP" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="City" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                      </Form>
                    </Card>
                  </Col>
        
                  <Col id='to-address' xs={24} xl={12}>
                    <Card
                      style={style}
                      title="To"
                      bordered={false}
                    >
                      <Form  
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 18 }} 
                        layout='horizontal'
                      >
                        <Form.Item label="Name" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Address 1" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Address 2">
                          <Input />
                        </Form.Item>
                        <Form.Item label="ZIP" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="City" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                      </Form>
                    </Card>
                  </Col>
                </Row>
        
                <Form 
                  style={style}
                  
                  layout='inline'
                >
                  <Form.Item label="Length">
                    <InputNumber min={0}/> inch
                  </Form.Item>
                  <Form.Item label="Width">
                    <InputNumber min={0}/> inch
                  </Form.Item>
                  <Form.Item label="Height">
                    <InputNumber min={0}/> inch
                  </Form.Item>
                  <Form.Item label="Weight">
                    <InputNumber min={0}/> lbs
                  </Form.Item>
                  <Form.Item label="Vehicle Type" name="vehicle_type">
                    <Select
                      style={{
                        width: 120,
                      }}
                    >
                      <Option value="ROBOT_HEAVY"> Robot_Heavy </Option>
                      <Option value="ROBOT_LIGHT"> Robot_Light </Option>
                      <Option value="DRONE_HEAVY"> Drone_Heavy </Option>
                      <Option value="DRONE_LIGHT"> Drone_Light </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Pick Up Date" name="pick_up_date">
                    <DatePicker />
                  </Form.Item>
                </Form>
              
            </>
          );
    }
}

class getVehicleList extends React.Component {
  state = {
    data: [],
    loading: false,
  }

  componentDidMount() {
    this.loadData();
  }

  search = async (query) => {
    this.setState({
      loading: true,
    });

    try {
      const resp = await getVehicleList(query);
      this.setState({
        data: resp,
      });
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      })
    }
  };

  render() {
    const { loading, data } = this.state;

    return (
      <List>
        <List.Item>
          <List.Item.Meta 
            title={<Text>Vehicle ID: {Item.vehicle.id}</Text>}
            description={
              <>
                <Text>Vehicle Type: {Item.vehicle.type}</Text>
                <br />
                <Text>Vehicle Capacity: {Item.vehicle.weight}</Text>
              </>
            }
          />
        </List.Item>
      </List>
    )
  }
}

export default AddressPage;