import React from "react";
import { Tabs } from "antd";

import VehicleManagement from "./VehicleManagement";
import CompanyNews from "./CompanyNews"
const { TabPane } = Tabs;

class AdminHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
        <TabPane tab="Company News" key="1">
        <CompanyNews />
        </TabPane>
        <TabPane tab="Delivery Management" key="2"> 
        Delivery Management
        </TabPane>
        <TabPane tab="Vehicle Management" key="3">
          <VehicleManagement />
        </TabPane>
      </Tabs>
    );
  }
}
export default AdminHomePage;
