import React from "react";
import Text from "antd/lib/typography/Text";
import { List, Card, Divider, message, Button } from "antd";
import { DeleteOutlined} from '@ant-design/icons';
import VehicleDetailInfoButton from "./VehicleDetailInfoButton";
import { deleteVehicle } from "../utils";

class VehicleList extends React.Component {
  state = {
    loading: false,
  };

  onChange = () => {};

  addOrRemove = () => {};

  render() {
    const { VehicleList, searchFunc } = this.props;
    return (
      <List
        style={{ marginTop: 20 }}
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
                    Vehicle: {item.name}
                  </Text>
                  <VehicleDetailInfoButton vehicle={item} />
                </div>
              }
              extra={[<RemoveVehicleButton vehicle={item} onRemoveSuccess = {searchFunc}/>]}
            >
              <Text>ID: {item.id}</Text>
              <Divider />
              <Text>Status: {item.status}</Text>
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
    const { vehicle , onRemoveSuccess } = this.props;
    this.setState({
      loading: true,
    });

    try {
      await deleteVehicle(vehicle.id);
      message.success("Vehicle successfully deleted!");
      onRemoveSuccess();
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
