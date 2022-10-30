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
              <Text strong={true}>Delivery Id: </Text>
              <Text type="secondary">{delivery.id}</Text>
              <Divider/>
              <Text strong={true}>Delivery Status: </Text>
              <Text type="secondary">{delivery.status}</Text>
              <Divider/>
              <Text strong={true}>Delivery Location: </Text>
              <Text type="secondary">{delivery.location.address}</Text> 
              <Divider/>
              <Text strong={true}>Start Date: </Text>
              <Text type="secondary">{delivery.start_date}</Text>
              <Divider/>
              <Text strong={true}>End Date: </Text>
              <Text type="secondary">{delivery.end_date}</Text>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
export default DeliveryDetailInfoButton;