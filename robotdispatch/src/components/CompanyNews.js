import React from "react";
import { Card, Col, Row , Button, Popover, Space} from "antd";


const { Meta } = Card;

class CompanyNews extends React.Component {

    state = {
      loading: false,
    };

  render() {
    
    return (
      <div style={{  width: 940, margin: "50px auto" }}> 
        <p style={{ display: 'flex', justifyContent: 'center',
                    fontSize:"200%",fontFamily:"Tahoma"}}>
        Prepare our business for peak season</p>

        <div className="site-card-wrapper">
    <Row gutter={6}>
        <Col span={8}>
        <Card
            hoverable
            style={{ width: 280 }}
            cover={<img alt="example" src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD-GrantWishes-727x463.jpg" />}
        >
            <Meta style={{textContent: 'center'}} 
            title="Grant wishes. Grow business." 
            description="Get tools, tips, and services to help our customers. From holiday shipping deadlines to convenient drop off locations, it’s all here." />

        <Space style={{
              position: 'relative',
              margin:'15px',
              left: '7%'}}> 
       
        <Popover content=" Busy seasons provide opportunities to build relationships with customers. With a little planning, you can navigate any customer service challenges and develop customer loyalties as a result."
                title="Get ready to ship with holiday tools, services, and resources">
          <Button style={{background: "#53078a", borderColor: "purple",fontFamily:"Verdana" }}
            onClick={this.handleRegister}
            disabled={this.state.loading}
            shape="round"
            type="primary"
          >
            Explore the Details
          </Button>
          </Popover>
          </Space>

        </Card>
        </Col>
        <Col span={8}>
        <Card 
            hoverable
            style={{ width: 280 }}
            cover={<img alt="example" src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD-GoGlobalThisYear-727x463.jpg" />}
        >
            <Meta style={{textContent: 'center'}}
            title="Go global this year" 
            description="Reach more customers with Dispatcher International Connect Plus. It offers multiple options that perfectly balance speed and cost." />
        
        <Space style={{
              position: 'relative',
              margin:'15px',
              left: '7%'}}> 
        <Popover content="Dispatcher International Connect Plus is part of a portfolio of services that balances speed and cost. So you can offer the delivery times your customers want and the affordable pricing that gives your business an edge. " 
                title="Grow global reach with faster worldwide shipping">
          <Button style={{background: "#53078a", borderColor: "purple",fontFamily:"Verdana" }}
            onClick={this.handleRegister}
            disabled={this.state.loading}
            shape="round"
            type="primary"
          >
            Explore the Details
          </Button>
          </Popover>
          </Space>

        </Card>
        </Col>
        <Col span={8}>
        <Card
            hoverable
            style={{ width: 280 }}
            cover={<img alt="example" src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD-MakeAdvancedTracking-727x463.jpg" />}
        >
            <Meta style={{justifyContent: 'center'}}
            title="Make advanced tracking easy" 
            description="Create a  personalized dashboard to manage up to 20,000 shipments and run reports. It’s an easy way to improve customer service." />
        
        <Space style={{
              position: 'relative',
              margin:'15px',
              left: '7%'}}> 
        <Popover content="Track multiple shipments, run reports, and get access to documents and images in one convenient place—an easy-to-use, personalized tracking dashboard." 
                title="Customize, manage, and track the shipments">
          <Button style={{background: "#53078a", borderColor: "purple",fontFamily:"Verdana" }}
            onClick={this.handleRegister}
            disabled={this.state.loading}
            shape="round"
            type="primary"
          >
            Explore the Details
          </Button>
          </Popover>
          </Space>
        </Card>
        </Col>
    </Row>
  </div>
</div>
    );
   };
}
 
export default CompanyNews;