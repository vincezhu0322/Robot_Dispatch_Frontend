import React from "react";
import Text from "antd/lib/typography/Text";
import { Divider, List, Card, Button, Layout, Space, Typography} from "antd";
import { GoogleMap } from "./Map";
import CreateShipmentButton from "./CreateShipmentButton";
import estimateDeliveryTime from "../utils";

const { Header, Footer, Sider, Content } = Layout;
class EstimateTimePage extends React.Component {
    state = {
        loading: false,
    }
    render() {
        const { orderData } = this.props;
        return (
            <Space direction="vertical" size="middle" style={{ display: 'flex',}}>
    <Typography.Title
        level={1}
        style={{
          margin: 0,
        }}
      >
        Information Review
      </Typography.Title>

    <Space direction="horizental" size="middle" style={{ display: 'flex',}}>
        <Space direction="vertical" size="middle" style={{ display: 'flex',}}>
            <Card title={"Pick up Info"} size="mid" >
            <p align = "left"><Text strong={true}>Name: </Text>
            <Text type="secondary">{orderData.get("pickup_name")}</Text></p>
            <p align = "left"><Text strong={true}>Address: </Text>
            <Text type="secondary">{orderData.get("pickup_address")}</Text></p>
            <p align = "left"><Text strong={true}>Zipcode: </Text>
            <Text type="secondary">{orderData.get("pickup_zipcode")}</Text></p>
            </Card>
            <Card title={"Delivery Info"} size="mid">
            <p align = "left"><Text strong={true}>Name: </Text>
            <Text type="secondary">{orderData.get("delivery_name")}</Text></p>
            <p align = "left"><Text strong={true}>Address: </Text>
            <Text type="secondary">{orderData.get("delivery_address")}</Text></p>
            <p align = "left"><Text strong={true}>Zipcode: </Text>
            <Text type="secondary">{orderData.get("deliver_zipcode")}</Text></p>
            </Card>
        </Space>
        <Space direction="vertical" size="middle" style={{ display: 'flex',}}>
        <Card title={"Time Info"} size="mid">
            <p align = "left"><Text strong={true}>Pick Up Date: </Text>
            <Text type="secondary">{orderData.get("expect_pickup_date")}</Text></p>
            <p align = "left"><Text strong={true}> Pick Up Time: </Text>
            <Text type="secondary">{orderData.get("pickup_time")}</Text></p>
            <p align = "left"><Text strong={true}> Delivery Date (expected): </Text>
            <Text type="secondary">{orderData.get("expect_delivery_date")}</Text></p>
            <p align = "left"><Text strong={true}> Delivery Time (expected): </Text>
            <Text type="secondary">{orderData.get("delivery_time")}</Text></p>
            </Card>
        </Space>

        <Space direction="vertical" size="middle" style={{ display: 'flex',}}>
        <Card title={"Package Info"} size="mid">
            <p align = "left"><Text strong={true}>Length: </Text>
            <Text type="secondary">{orderData.get("delivery_length")}</Text></p>
            <p align = "left"><Text strong={true}> Width: </Text>
            <Text type="secondary">{orderData.get("delivery_width")}</Text></p>
            <p align = "left"><Text strong={true}> Height: </Text>
            <Text type="secondary">{orderData.get("delivery_height")}</Text></p>
            <p align = "left"><Text strong={true}> Weight: </Text>
            <Text type="secondary">{orderData.get("delivery_weight")}</Text></p>
            <p align = "left"><Text strong={true}> Description: </Text>
            <Text type="secondary">{orderData.get("description")}</Text></p>
            </Card>
        <Card title={"Vehicle Info"} size="mid">
            <p align = "left"><Text strong={true}>Vehicle Id: </Text>
            <Text type="secondary">{orderData.get("vehicle_id")}</Text></p>
            <p align = "left"><Text strong={true}> Location: </Text>
            <Text type="secondary">{"Center " +orderData.get("center_id")}</Text></p>
            </Card>
        </Space>

        <GoogleMap/>


    </Space>
    

    <CreateShipmentButton orderData={orderData} data = {this.props.orderData} setData = {this.props.setData}/>


    
    </Space>
        );
    };
}
export {EstimateTimePage};