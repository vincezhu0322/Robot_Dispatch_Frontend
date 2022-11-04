import React from "react";
import Text from "antd/lib/typography/Text";
import { Divider, List, Card } from "antd";
import VehicleDetailInfoButton from "./VehicleDetailInfoButton";

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
                            <Text ellipsis={true} style={{ maxWidth: 150 }}>
                                Vehicle: {item.name}
                            </Text>
                            <VehicleDetailInfoButton vehicle={item} />
                            </div>
                        }
                        // extra={[<RemoveVehicleButton vehicle={item} />]}
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