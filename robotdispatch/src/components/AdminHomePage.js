import React from "react";
import { Tabs } from "antd";

import VehicleManagement from "./VehicleManagement";
const { TabPane } = Tabs;

class AdminHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
        <TabPane tab="Company News" key="1"></TabPane>
        <TabPane tab="Delivery Management" key="2"></TabPane>
        <TabPane tab="Vehicle Management" key="3">
          <VehicleManagement />
        </TabPane>
      </Tabs>
    );
  }
}
export default AdminHomePage;
