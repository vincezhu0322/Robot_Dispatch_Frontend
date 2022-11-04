import React from "react";
import {
  Tabs,
  Typography,
  Input
} from "antd";
import { CreateShipmentClass } from "./CreatShipmentClass";
import { MyShipments } from "./MyShipments";
 
const { TabPane } = Tabs;
const { Text } = Typography;
const { TextArea } = Input;




class GuestHomePage extends React.Component {
  render() {
        return (
         <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
         <TabPane tab="CreateShipment" key="1">
           <CreateShipmentClass/>
         </TabPane>
         <TabPane tab="My Reservations" key="2">
           <MyShipments />
         </TabPane>
       </Tabs>
        );
    }
}
 
export default GuestHomePage;
