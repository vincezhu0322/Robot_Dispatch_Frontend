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
import { EstimateTimePage } from './EstimateTimePage';
import { ConfirmationPage } from './ConfirmationPage';
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
      content: <AvailableVehicleList AvailableVehicleList = {vehicleList} data = {data} setData = {setData}/>
    },
    {
      title: 'Estimation',
      content: <EstimateTimePage orderData = {data} setData = {setData}/>
    },
    {
      title: 'Confirmation',
      content: <ConfirmationPage orderData = {data} setData = {setData}/>
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
