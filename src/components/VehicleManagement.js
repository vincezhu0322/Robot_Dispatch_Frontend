import React from "react";
import { Row, Col, Divider, message } from "antd";
import AddVehicle from "./AddVehicle";
import SearchVehicles from "./SearchVehicles";
import VehicleList from "./VehicleList";
import { getVehicleById, listVehicleByCenter } from "../utils";

class VehicleManagement extends React.Component {
  state = {
    vehicleList: [],
    isLoadingList: false,
  };

  searchById = async (values) => {
    this.setState({
      loading: true,
      searchFunc: this.searchById,
    });
    const id = values.id;
    try {
      const resp = await getVehicleById(id);
      this.setState({
        vehicleList: resp,
      });
      message.success("search success");
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  searchByCenter = async (values) => {
    this.setState({
      loading: true,
      searchFunc: this.searchById,
    });

    const center_id = values.center_id;
    try {
      const resp = await listVehicleByCenter(center_id);
      this.setState({
        vehicleList: resp,
      });
      message.success("search success");
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
      <Row>
        <Divider orientation="right" plain></Divider>
        <Col span={8}>
          <AddVehicle />
          <Divider />
          <SearchVehicles
            searchByCenter={this.searchByCenter}
            searchById={this.searchById}
          />
        </Col>
        <Col span={16}>
          <VehicleList VehicleList={this.state.vehicleList} />
        </Col>
      </Row>
    );
  }
}

export default VehicleManagement;
