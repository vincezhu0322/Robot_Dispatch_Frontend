import React from "react";
import {
  message,
  List,
  Typography,
} from "antd";
import { getShipments } from "../utils";
import { CancelReservationButton } from "./CancelReservationButton";
import DelieveryMoreinfoButton from "./DelieveryMoreInfoButton";


const { Text } = Typography;



class MyShipments extends React.Component {

    state = {
       moredata: false,
       loading: false,
       data: [],
    }
 
    componentDidMount() {
       this.loadData();
    }
    


    handleClickReturn = ()=> {
      this.setState({
         loading: true,
       });
       this.setState({
         loading: false,
         moredata: false
      });
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
      return(
         <List
               style={{ width: 1000, margin: "auto" }}
               loading={this.state.loading}
               dataSource={this.state.data}
               renderItem={(item) => (
               <List.Item actions={[<CancelReservationButton 
               onCancelSuccess={this.loadData} shipmentId={item.orderId} />, <DelieveryMoreinfoButton order={item} />]}>
                  <List.Item.Meta 
                     title={<text>{item.id}</text>}
                     description={
                        <>
                           <Text>OrderId: {item.orderId}</Text>
                           
                        </>
                     }
                  />
               </List.Item>)}
            />
         );
      
    }
   }
 export {MyShipments};