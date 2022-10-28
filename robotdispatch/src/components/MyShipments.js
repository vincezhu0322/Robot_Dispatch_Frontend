import React from "react";
import {
  message,
  List,
  Typography
} from "antd";
import { getShipments } from "../utils";
import { CancelReservationButton } from "./CancelReservationButton";


const { Text } = Typography;


class MyShipments extends React.Component {
    state = {
       loading: false,
       data: [],
    }
 
    componentDidMount() {
       this.loadData();
    }
 
    loadData = async () => {
       this.setState({
          loading: true
       })
 
       try {
          const resp = await getShipments();
          this.setState({
             data: resp
          })
       } catch (error) {
          message.error(error.message);
       } finally {
          this.setState({
             loading: false
          })
       }
    }
 
    render() {
       return (
          <List
             style={{ width: 1000, margin: "auto" }}
             loading={this.state.loading}
             dataSource={this.state.data}
             renderItem={(item) => (<List.Item actions={[<CancelReservationButton 
             onCancelSuccess={this.loadData} shipmentId={item.id} />]}>
                <List.Item.Meta 
                   title={<text>{item.stay.name}</text>}
                   description={
                      <>
                         <Text>START: {item.checkin_date}</Text>
                         <br />
                         <Text>STATUS: {item.state}</Text>
                         <br />
                         <Text>RECIPENT NAME: {item.recipent}</Text>
                         <br />
                         <Text>RECIPENT ADDRESS: {item.address}</Text>
                      </>
                   }
                />
             </List.Item>)}
          />)
    }
 }
 export {MyShipments};