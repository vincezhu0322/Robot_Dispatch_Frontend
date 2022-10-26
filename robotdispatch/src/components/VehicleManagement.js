import React from "react";
import { Row, Col, Divider } from "antd";
import AddAndSearchVehicle from "./AddAndSearchVehicle";
import VehicleList from "./VehicleList";

class VehicleManagement extends React.Component {
  render() {
    return (
      
      <Row>
        <Divider orientation="right" plain></Divider>
        <Col span={8}>
          <AddAndSearchVehicle />
        </Col>
        <Col span={16}>
          <VehicleList />
        </Col>
      </Row>
    );
  }
}

export default VehicleManagement;
