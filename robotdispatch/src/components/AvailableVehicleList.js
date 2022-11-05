import React from "react";
import Text from "antd/lib/typography/Text";
import { Divider, List, Card, Button } from "antd";
import VehicleDetailInfoButton from "./VehicleDetailInfoButton";
import VehicleSelectButton from "./VehicleSelectButton";

class AvailableVehicleList extends React.Component {
    state = {
        loading: false,
    };

    onChange = () => {};

    addOrRemove = () => {};

    render() {
        const { AvailableVehicleList } = this.props;
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
                dataSource={ AvailableVehicleList }
                renderItem={(item) => (
                <List.Item>
                    <Card
                        key={item.id}
                        title={
                            <div style={{ display: "flex", alignItems: "center" }}>
                            <Text ellipsis={true} style={{ maxWidth: 200 }}>
                                {item.name}
                            </Text>
                            <VehicleDetailInfoButton vehicle={item} />
                            </div>
                        }
                        extra={[<VehicleSelectButton vehicle={item} data = {this.props.data} setData = {this.props.setData}/>]}
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

export default AvailableVehicleList;
