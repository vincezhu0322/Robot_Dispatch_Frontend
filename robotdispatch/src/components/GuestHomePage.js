import React from "react";
import {
  Image,
  message,
  Tabs,
  List,
  Typography,
  Form,
  InputNumber,
  DatePicker,
  Button,
  Card,
  Carousel,
  Modal,
  Select,
  Input
} from "antd";
import { getShipments, searchStays, bookStay, cancelReservation } from "../utils";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { StayDetailInfoButton } from "./HostHomePage";
 
const { TabPane } = Tabs;
const { Text } = Typography;
const { TextArea } = Input;

class SearchStays extends React.Component {
   state = {
      data: [],
      loading: false,
   }

   search = async (query) => {
      this.setState({
         loading: true,
      })

      try {
         const resp = await searchStays(query);
         this.setState({
            data: resp,
         })
      } catch (error) {
         message.error(error.message);
      } finally {
         this.setState({
            loading: false,
         })
      }
   }

   render() {
      return (
         <>
          <Form onFinish={this.search} layout="inline">
            <Form.Item
            label="Guest Number"
            name="guest_number"
            rules={[{ required: true }]}
            >
               <InputNumber min={1} />
            </Form.Item>
            <Form.Item 
            label="Checkin Date" 
            name="checkin_date" 
            rules={[{ required: true }]}
            >
               <DatePicker/>
            </Form.Item>
            <Form.Item
            label="Checkout Date" 
            name="checkout_date" 
            rules={[{ required: true }]}
            >
               <DatePicker/>
            </Form.Item>
            <Form.Item>
               <Button loading={this.state.loading} type="primary" htmlType="submit">
                  Search
               </Button>
            </Form.Item>
          </Form>
          <List
          style={{ marginTop: 20 }}
          loading={this.state.loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={this.state.data}
          renderItem={(item) => (
            <List.Item>
              <Card
                key={item.id}
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Text ellipsis={true} style={{ maxWidth: 150 }}>
                      {item.name}
                    </Text>
                    <StayDetailInfoButton stay={item} />
                  </div>
                }
                extra={<BookStayButton stay={item} />}
              >
                {
                  <Carousel
                    dots={false}
                    arrows={true}
                    prevArrow={<LeftCircleFilled />}
                    nextArrow={<RightCircleFilled />}
                  >
                    {item.images.map((image, index) => (
                      <div key={index}>
                        <Image src={image.url} width="100%" />
                      </div>
                    ))}
                  </Carousel>
                }
              </Card>
            </List.Item>
          )}
        />
         </>
      )
   }
}

class MyReservations extends React.Component {
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

class BookStayButton extends React.Component {
   state = {
     loading: false,
     modalVisible: false,
   };
  
   handleCancel = () => {
     this.setState({
       modalVisible: false,
     });
   };
  
   handleBookStay = () => {
     this.setState({
       modalVisible: true,
     });
   };
  
   handleSubmit = async (values) => {
     const { stay } = this.props;
     this.setState({
       loading: true,
     });
  
     try {
       await bookStay({
         checkin_date: values.checkin_date.format("YYYY-MM-DD"),
         checkout_date: values.checkout_date.format("YYYY-MM-DD"),
         stay: {
           id: stay.id,
         },
       });
       message.success("Successfully book stay");
     } catch (error) {
       message.error(error.message);
     } finally {
       this.setState({
         loading: false,
       });
     }
   };

   render() {
      const { stay } = this.props;
      return (
         <>
            <Button onClick={this.handleBookStay} shape="round" type="primary">
            Book
            </Button>
            <Modal
            destroyOnClose={true}
            title={stay.name}
            visible={this.state.modalVisible}
            footer={null}
            onCancel={this.handleCancel}
            >
            <Form
               preserve={false}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               onFinish={this.handleSubmit}
            >
               <Form.Item
               label="Checkin Date"
               name="checkin_date"
               rules={[{ required: true }]}
               >
               <DatePicker />
               </Form.Item>
               <Form.Item
               label="Checkout Date"
               name="checkout_date"
               rules={[{ required: true }]}
               >
               <DatePicker />
               </Form.Item>
               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button
                  loading={this.state.loading}
                  type="primary"
                  htmlType="submit"
               >
                  Book
               </Button>
               </Form.Item>
            </Form>
            </Modal>
         </>
      )
   }
} 

class CancelReservationButton extends React.Component {
   state = {
     loading: false,
   };
  
   handleCancelReservation = async () => {
     const { reservationId, onCancelSuccess } = this.props;
     this.setState({
       loading: true,
     });
  
     try {
       await cancelReservation(reservationId);
     } catch (error) {
       message.error(error.message);
     } finally {
       this.setState({
         loading: false,
       });
     }
  
     onCancelSuccess();
   };
  
   render() {
     return (
       <Button
         loading={this.state.loading}
         onClick={this.handleCancelReservation}
         danger={true}
         shape="round"
         type="primary"
       >
         Cancel
       </Button>
     );
   }
}
 

class GuestHomePage extends React.Component {
  render() {
        return (
         <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
         <TabPane tab="CreateShipment" key="1">
           <CreateShipment />
         </TabPane>
         <TabPane tab="My Reservations" key="2">
           <MyReservations />
         </TabPane>
       </Tabs>
        );
    }
}

class CreateShipment extends React.Component {
    state = {
        data: [],
        loading: false,
    };

    render() {
        return (
            <>
                <Form layout="Horizontal">
                    <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                        
                    </Form.Item>
                    <Form.Item label="From" name="from_address" rules={[{ required: true }]}>
                        
                    </Form.Item>
                    <Form.Item label="To" name="to_address" rules={[{ required: true }]}>
                        
                    </Form.Item>
                    <Form.Item label="Shipping Vehicle" name="shipping_vehicle">
                        <Select>
                            <Select.Option value="autobot_1">Autobot 1</Select.Option>
                            <Select.Option value="autobot_2">Autobot 2</Select.Option>
                            <Select.Option value="drone_1">Drone 1</Select.Option>
                            <Select.Option value="drone_2">Drone 2</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Weight" name="shipping_weight" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Pick Up Date" name="pick_up_date" rules={[{ required: true }]}>
                        <DatePicker />
   
                    </Form.Item>
                    <Form.Item label="Package Description" name="package_description">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Create Shipment">
                        <Button loading={this.state.loading} type="primary" htmlType="submit">Ship</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}
 
export default GuestHomePage;
