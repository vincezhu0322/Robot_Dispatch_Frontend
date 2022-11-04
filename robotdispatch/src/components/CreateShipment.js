import { render } from '@testing-library/react';
import { 
  Button, 
  message, 
  Steps,
  Input,
} from 'antd';
import React, { useState, useEffect } from 'react';
import AddressPage from './AddressPage';
import AvailableVehicleList from './AvailableVehicleList';
import { searchVehicle } from '../utils';

const { Step } = Steps;



const CreateShipment = (a) => {   
  const [data, setData] = useState(new FormData);
  const [vehicleList, setVehicleList] = useState(new FormData);
  const steps = [
    {
      title: 'Delivery Information',
      //content: <AddressPage/>
      content: <AddressPage data = {data} setData = {setData} setVehicleList = {setVehicleList}/>
    },
    {
      title: 'Vehicle Selection',
      //content: <AvailableVehicleList/>
      content: <AvailableVehicleList AvailableVehicleList = {vehicleList}/>
    },
    {
      title: 'Estimation',
      content: 'Left is image and info (vehicle type, weight, dimension, pickup time, address), Right is Map from backend',
    },
    {
      title: 'Confirmation',
      content: 'Similar to Estimation, (plus tracking number and id). Need more discussion with backend',
    }
  ];

  const [current, setCurrent] = useState(0);
 
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const testState = () => {
    for (const pair of data.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log(data.get("test"));
  });

  // const searchVehicleByFilter = async (values) => {
  //   const formData = new FormData;
  //   formData.append("pickup_address", "386 Higate Dr, Daly City");
  //   formData.append("delivery_address", "1500 Sullivan Ave, Daly City");
  //   formData.append("pickup_time", "00:00:00");
  //   formData.append("delivery_time", "05:00:00");
  //   // formData.append("pickup_address", values.pickup_address);
  //   // formData.append("delivery_address", values.delivery_address);
  //   // formData.append("pickup_time", values.pickup_time.format("hh:mm:ss"));
  //   // formData.append("delivery_time", values.delivery_time.format("hh:mm:ss"));
  //   formData.append("delivery_length", 5);
  //   formData.append("delivery_width", 5);
  //   formData.append("delivery_height", 5);
  //   formData.append("delivery_weight", 5);
  
  //   try {
  //     const resp = await searchVehicle(formData);
  //     this.setState({
  //       availableVehicleList: resp,
  //     });
  //     message.success("Found Available Vehicle");
  //   } catch (error) {
  //     message.error(error.message);
  //   } finally {
  //     this.setState({
  //       loading: false,
  //     });
  //   }
  // }  

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Ship
          </Button>
        )}
        
      </div>
    </>
  );
};


export { CreateShipment };
