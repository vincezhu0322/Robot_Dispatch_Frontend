import React from "react";

class VehicleDetailInfoButton extends React.Component {
  state = {
    modalVisible: true,
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
    // TODO: need to update confirm props from pareant
    const { vechicle, loadData } = this.props;
    // TODO order may need to be further deconstruct
    const { id, name, status, location, type, order } = vechicle;
    return (
      <React.Fragment>
        {modalVisible && (
          <Modal
            title={name}
            centered={true}
            visible={true}
            closable={null}
            footer={null}
            onCancel={this.handleCancel}
          >
            <Space>
              <Text strong={true}>Vehicle ID</Text>
              <Text type="secondary">{id}</Text>
              <Text strong={true}>Vehicle Status</Text>
              <Text type="secondary">{status}</Text>
              <Text strong={true}>Vehicle Location</Text>
              <Text type="secondary">{location}</Text>
              <Text strong={true}>Vehicle Type</Text>
              <Text type="secondary">{type}</Text>
              <Text strong={true}>Vehicle Order</Text>
              <Text type="secondary">{order}</Text>
            </Space>
          </Modal>
        )}

        <UpdateVehicleButton/>

      </React.Fragment>
    );
  }
}
export default VehicleDetailInfoButton;


class UpdateVehicleButton extends React.Component {

}
