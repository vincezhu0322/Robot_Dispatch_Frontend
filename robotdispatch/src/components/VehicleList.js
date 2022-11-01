import React from "react";
import Text from "antd/lib/typography/Text";
import { List, Card, Divider, message, Button, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import VehicleDetailInfoButton from "./VehicleDetailInfoButton";
import { deleteVehicle } from "../utils";

class VehicleList extends React.Component {
  state = {
    loading: false,
  };

  onChange = () => {};

  addOrRemove = () => {};

  render() {
    const { VehicleList, onRemoveSuccess } = this.props;
    return (
      <List
        style={{ marginTop: 0 }}
        loading={this.state.loading}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={VehicleList}
        renderItem={(item) => (
          <List.Item>
            <Card
              key={item.id}
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Text ellipsis={true} style={{ maxWidth: 150 }}>
                    No. {item.id}
                  </Text>
                </div>
              }
              extra={[
                <VehicleDetailInfoButton vehicle={item} />,
                <RemoveVehicleButton
                  vehicle={item}
                  onRemoveSuccess={onRemoveSuccess}
                />,
              ]}
            >
              <Text strong={true}>Name: </Text>
              <Text type="secondary">{item.name}</Text>
              <Divider />
              <Text strong={true}>Status: </Text>
              <Text type="secondary">{item.status}</Text>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default VehicleList;

class RemoveVehicleButton extends React.Component {
  state = {
    loading: false,
  };

  handleRemoveVehicle = async () => {
    const { vehicle, onRemoveSuccess } = this.props;
    this.setState({
      loading: true,
    });

    try {
      await deleteVehicle(vehicle.id);
      message.success("Vehicle successfully deleted!");
      onRemoveSuccess(vehicle.id);
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
      <Button
        loading={this.state.loading}
        onClick={this.handleRemoveVehicle}
        danger={true}
        shape="round"
        type="primary"
        style={{
          background: "#53078a",
          borderColor: "purple",
          fontFamily: "Verdana",
        }}
        icon={<DeleteOutlined />}
      />
    );
  }
}
