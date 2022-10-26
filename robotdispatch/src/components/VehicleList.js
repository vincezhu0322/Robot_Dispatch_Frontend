import React from "react";
import {List, Card} from "antd";

class VehicleList extends React.Component {
    state = {
        data: [],
        loading: false,
      };

  render() {
    return(   
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
        dataSource={this.state.data}
        renderItem={(item) => (
          <List.Item>
            <Card key={item.name}></Card>
          </List.Item>
        )}
      />);
  }
}
export default VehicleList;
