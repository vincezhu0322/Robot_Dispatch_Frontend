import React from "react";
import Text from "antd/lib/typography/Text";
import { List, Card, Divider, message, Button } from "antd";
import { DeleteOutlined} from '@ant-design/icons';
import DeliveryDetailInfoButton from "./DeliveryDetailInfoButton";
import { deleteDelivery } from "../utils";

class DeliveryList extends React.Component {
  state = {
    loading: false,
  };

  onChange = () => {};

  addOrRemove = () => {};

  render() {
    const { deliveryList } = this.props;
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
        dataSource={deliveryList}
        renderItem={(item) => (
          <List.Item>
            <Card
              key={item.id}
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Text ellipsis={true} style={{ maxWidth: 150 }}>
                    Delivery: {item.name}
                  </Text>
                  <DeliveryDetailInfoButton delivery={item} />
                </div>
              }
              extra={[<RemoveDeliveryButton delivery={item} />]}
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

export default DeliveryList;

class RemoveDeliveryButton extends React.Component {
  state = {
    loading: false,
  };

  handleRemoveDelivery = async () => {
    const { delivery } = this.props;
    this.setState({
      loading: true,
    });

    try {
      await deleteDelivery(delivery.id);
      message.success("Delivery successfully deleted!");
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
        onClick={this.handleRemoveDelivery}
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
