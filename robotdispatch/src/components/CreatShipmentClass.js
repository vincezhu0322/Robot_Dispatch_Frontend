import React from "react";
import { CreateShipment } from "./CreateShipment";
class CreateShipmentClass extends React.Component {
    state = {
        data:[]
    };
    setStateOfHomepage = (value) => {
        this.setState({data: value});
      }
    render() {
          return (
             <CreateShipment setParentState = {this.setStateOfHomepage}/>
          )
      }
  }
   
  export {CreateShipmentClass};
  