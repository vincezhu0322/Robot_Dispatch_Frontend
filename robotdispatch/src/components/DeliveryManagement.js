import React from "react";
import { Row, Col, Divider, message } from "antd";
import SearchDelivery from "./SearchDelivery";
import DeliveryList from "./DeliveryList";
import { getDelivery, getDeliveryByOrderDate, getDeliveryByOrderId } from "../utils";

class DeliveryManagement extends React.Component {
  state = {
    deliveryList:[],
    isLoadingList: false,
  };

  searchById = async (values) => {
    this.setState({
      loading: true,
      searchFunc: this.searchById,
    });
    const {order_id} = values;
    try {
      const resp = await getDeliveryByOrderId(order_id);
      this.setState({
        deliveryList: resp,
      });
      message.success("search success");
      console.log(resp);
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  searchByDate = async (values) => {
    this.setState({
      loading: true,
      searchFunc: this.searchByDate,
    });
    const {start_date, end_date} = values;
    try {
      const resp = await getDeliveryByOrderDate(start_date, end_date);
      this.setState({
        deliveryList: resp,
      });
      message.success("search success");
      console.log(resp);
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
      <Row>
        <Divider orientation="right" plain></Divider>
        <Col span={6}>
            <SearchDelivery searchById={this.searchById} searchByDate={this.searchByDate}/>
        </Col>
        <Col span={18}>
            <DeliveryList deliveryList={this.state.deliveryList}/>
        </Col>
      </Row>
    );
  }
}

export default DeliveryManagement;
