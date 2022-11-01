import { render } from '@testing-library/react';
import { 
  Button, 
  message, 
  Steps,
  Input,
} from 'antd';
import React, { useState } from 'react';
import AddressPage from './AddressPage';
const { Step } = Steps;
const { TextArea } = Input;
const steps = [
  {
    title: 'Address',
    content: <AddressPage />,
  },
  {
    title: 'Vehicle',
    content: 'Vehicle Selection',
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

const CreateShipment = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
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

export default CreateShipment;
