import React from "react";
import { Row, Col, Divider, message } from "antd";
import SearchDelivery from "./SearchDelivery";
import DeliveryList from "./DeliveryList";
import { getDelivery } from "../utils";

/**
 * @todo 与后端API和数据库统一, 需要后端暴露相应接口. 
 * 涉及：SearchDelivery(getDelivery), RemoveDeliveryButton(deleteDelivery), DeliveryDetailInfoButton
 */

class DeliveryManagement extends React.Component {
  state = {
    deliveryList:[],
    isLoadingList: false,
  };

  search = async (values) => {
    this.setState({
      loading: true,
      searchFunc: this.search,
    });
    const {fo, start_date, end_date} = values;
    try {
      const resp = await getDelivery(fo, start_date, end_date);
      this.setState({
        deliveryList: resp,
      });
      message.success("search success");
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
            <SearchDelivery search={this.search}/>
        </Col>
        <Col span={18}>
            <DeliveryList deliveryList={this.state.deliveryList}/>
        </Col>
      </Row>
    );
  }
}

export default DeliveryManagement;