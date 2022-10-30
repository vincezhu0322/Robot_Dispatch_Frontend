import React from "react";
import { InfoOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { Button, Tooltip, Modal, Divider } from "antd";

class VehicleDetailInfoButton extends React.Component {
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
    const { vehicle } = this.props;
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
            title={vehicle.name}
            centered={true}
            visible={true}
            closable={null}
            footer={null}
            onCancel={this.handleCancel}
          >
              <Text strong={true}>Vehicle Id: </Text>
              <Text type="secondary">{vehicle.id}</Text>
              <Divider/>
              <Text strong={true}>Vehicle Status: </Text>
              <Text type="secondary">{vehicle.status}</Text>
              <Divider/>
              <Text strong={true}>Vehicle Location: </Text>
              <Text type="secondary">{vehicle.location.address}</Text> 
              <Divider/>
              <Text strong={true}>Vehicle Type: </Text>
              <Text type="secondary">{vehicle.type.machine_type}</Text> 
              <Divider/>
              <Text strong={true}>Length Capacity: </Text>
              <Text type="secondary">{vehicle.type.length_capacity}</Text>
              <Divider/>
              <Text strong={true}>Width Capacity: </Text>
              <Text type="secondary">{vehicle.type.width_capacity}</Text>
              <Divider/>
              <Text strong={true}>Height Capacitye: </Text>
              <Text type="secondary">{vehicle.type.height_capacity}</Text>
              <Divider/>
              <Text strong={true}>Weight Capacity: </Text>
              <Text type="secondary">{vehicle.type.weight_capacity}</Text>
              <Divider/>
              <Text strong={true}>Max Range: </Text>
              <Text type="secondary">{vehicle.type.range}</Text>
              <Divider/>
              <Text strong={true}>Max Speed: </Text>
              <Text type="secondary">{vehicle.type.speed}</Text> 
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
export default VehicleDetailInfoButton;