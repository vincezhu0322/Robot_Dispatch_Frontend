import React from "react";
import {
  message,
  List,
  Typography,
  Button,
  Divider
} from "antd";
import { getShipments } from "../utils";
import { CancelReservationButton } from "./CancelReservationButton";
import { Content } from "antd/lib/layout/layout";


const { Text } = Typography;

var Height = null;
var Length = null;
var Width = null;
var RecipAddress = null;
var Recipent = null;
var SendAddress = null;
var Sender = null;
var StartTime = null;
var EndTime = null;
var VichleId = null;
var OrderId = null;
var Weight = null;

class MyShipments extends React.Component {

    state = {
       moredata: false,
       loading: false,
       data: [],
    }
 
    componentDidMount() {
       this.loadData();
    }
    
    handleClick=(item)=> {
      this.setState({
          loading: true,
        });
         Height = item.Height;
         Length = item.Length;
         Width = item.Width;
         RecipAddress = item.RecipAddress;
         Recipent = item.Recipent; 
         SendAddress = item.SendAddress;
         Sender = item.Sender;
         StartTime = item.StartTime;
         EndTime = item.EndTime;
         VichleId = item.VichleId;
         OrderId = item.OrderId;
         Weight = item.OrderId;
      this.setState({
          loading: false,
          moredata: true
       });
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



    renderContent = () => {
      if (!this.state.moredata) {
         return (
            <List
               style={{ width: 1000, margin: "auto" }}
               loading={this.state.loading}
               dataSource={this.state.data}
               renderItem={(item) => (
               <List.Item actions={[<CancelReservationButton 
               onCancelSuccess={this.loadData} shipmentId={item.id} />, <Button
               loading={this.state.loading}
               onClick={this.handleClick(item)}
               danger={true}
               shape="round"
               type="primary"
             >
               More
             </Button>]}>
                  <List.Item.Meta 
                     title={<text>{item.id}</text>}
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


      return (
         <>
         <Divider orientation="left">OrderId</Divider> 
         {OrderId}
         <Divider orientation="left">Time</Divider> 
         <ul>
            <li>OrderedOn: {StartTime} </li>
            <li>PickupTime: {EndTime}</li>
         </ul>
         <Divider orientation="left">Shipment Item</Divider> 
         <ul>
            <li>Length: {Length} </li>
            <li>Height: {Height} </li>
            <li>Width: {Width} </li>
            <li>Weight: {Weight}</li>
         </ul>
         <Divider orientation="left">Address Information</Divider> 
         <ul>
            <li>Sender Name: {Sender} </li>
            <li>Send From: {SendAddress} </li>
            <li>Recipent Name: {Recipent} </li>
            <li>Drop Address: {RecipAddress}</li>
         </ul>
         <Divider orientation="left">Dispatched Robot</Divider> 
         {VichleId}
         <Button
             loading={this.state.loading}
             onClick={this.handleClickReturn}
             danger={true}
             shape="round"
             type="primary"
           >
             Return
           </Button>
         </>
      )
    };

 
    render() {
      return(
         <Content>
            {this.renderContent()}     
         </Content>
         );
      
    }
 }
 export {MyShipments};