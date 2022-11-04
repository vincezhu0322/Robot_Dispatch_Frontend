import React from "react";
import { InfoOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { Button, Tooltip, Modal, Divider } from "antd";

class DeliveryDetailInfoButton extends React.Component {
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
    const { delivery } = this.props;
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
            title={delivery.name}
            centered={true}
            visible={true}
            closable={null}
            footer={null}
            onCancel={this.handleCancel}
          >
              <Text strong={true}>Delivery ID: </Text>
              <Text type="secondary">{delivery.order_id}</Text>
              <Divider/>
              <Text strong={true}>Sent By: </Text>
              <Text type="secondary">{delivery.pickup_address}</Text> 
              <Divider/>
              <Text strong={true}>Sent To: </Text>
              <Text type="secondary">{delivery.deliver_address}</Text>
              <Divider/>
              <Text strong={true}>Order Create By: </Text>
              <Text type="secondary">{delivery.guest.username}</Text>
              <Divider/>
              <Text strong={true}>Order Create Date: </Text>
              <Text type="secondary">{delivery.order_date}</Text>
              <Divider/>
              <Text strong={true}>Pickup Time (Expected): </Text>
              <Text type="secondary">{delivery.expect_pickup_time}</Text>
              <Divider/>
              <Text strong={true}>Delivery Date (Expected): </Text>
              <Text type="secondary">{delivery.expect_delivery_date}</Text>
              <Divider/>
              <Text strong={true}>Arrive Date: </Text>
              <Text type="secondary">{delivery.delivered_date}</Text>
              <Divider/>
              <Text strong={true}>Item Detail: </Text>
              <Text type="secondary">
                Type: {delivery.description} /
                Size: {delivery.length} x {delivery.width} x {delivery.height} /
                Weight: {delivery.weight}
              </Text>
              <Divider/>
              <Text strong={true}>Center ID: </Text>
              <Text type="secondary">{delivery.centerId.id}</Text>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
export default DeliveryDetailInfoButton;
