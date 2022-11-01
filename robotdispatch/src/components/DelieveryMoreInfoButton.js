import React from "react";
import { InfoOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { Button, Tooltip, Modal, Divider } from "antd";

class DelieveryMoreinfoButton extends React.Component {
  state = {
    modalVisible: false,
  };

  openModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const { order } = this.props;
    const { modalVisible } = this.state;

    return (
      <React.Fragment>
        <Tooltip>
          <Button
            loading={this.state.loading}
            onClick={this.openModal}
            danger={false}
            shape="round"
            type="primary"
            style={{
              background: "#fa5914",
              borderColor: "#fa5914",
              fontFamily: "Verdana",
            }}
            icon={<InfoOutlined />}
          />
        </Tooltip>
        {modalVisible && (
          <Modal
            title={order.orderId}
            centered={true}
            visible={true}
            closable={null}
            footer={null}
            onCancel={this.handleCancel}
          >
              <Text strong={true}>Order Id: </Text>
              <Text type="secondary">{order.orderId}</Text>
              <Divider/>
              <Text strong={true}>Order Prick Up Time: </Text>
              <Text type="secondary">{order.expectPickupTime}</Text>
              <Divider/>
              <Text strong={true}>Order Delievery Time: </Text>
              <Text type="secondary">{order.expectDeliveryDate}</Text> 
              <Divider/>
              <Text strong={true}>Shipment Item </Text>
              <Divider/>
              <Text type="secondary">Weight: {order.weight}</Text> 
              <Divider/>
              <Text type="secondary">Height: {order.height}</Text>
              <Divider/>
              <Text type="secondary">Length: {order.length}</Text>
              <Divider/>
              <Text type="secondary">Width: {order.width}</Text>
              <Divider/>
              <Text strong={true}>Guest Name: </Text>
              <Text type="secondary">{order.guest.username}</Text>
              <Divider/>
              <Text strong={true}>Veichle ID: </Text>
              <Text type="secondary">{order.vehicle.id}</Text>
              <Divider/>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
export default  DelieveryMoreinfoButton;