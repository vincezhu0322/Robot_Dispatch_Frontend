import { Button, message, Select } from "antd";
import React from "react";
import {addDeliveryOrder } from "../utils";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Option } = Select;

class CreateShipmentButton extends React.Component {
  state = {
    loading: false,
  };

  handleAddOrder = async() => {
    const data = this.props.data;      
    this.setState({
      loading: true,
    });
    try {  
      const response = await addDeliveryOrder(data);
      message.success("Order successfully added");
      const newdataForm = data;
      console.log(response.TrackNo)
      newdataForm.append("orderId", response.TrackNo);
      this.props.setData(newdataForm);
      
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return (<>
        <Button 
            onClick={this.handleAddOrder} 
            shape="round" 
            type="primary"
        >
            CreateOrder
        </Button>
    </>);
  }
}

export default CreateShipmentButton;
