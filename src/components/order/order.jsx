import React from "react";
import AppLayout from "../layout/appLayout";
import styles from "./order.module.css";

import { Tabs, Button, Form, Input, Divider } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Order = ({ authService }) => {
  const pageTitle = "Work Order";

  return (
    <AppLayout authService={authService} pageTitle={pageTitle}>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Button
            className={styles.form_button}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          <Tabs
            centered
            className={styles.tabs}
            defaultActiveKey="1"
            onChange={callback}
            size="small"
            tabBarGutter={100}
          >
            <TabPane className={styles.tab_content} tab="Customer" key="1">
              <Form.Item
                label="Address"
                name="customerAddress"
                rules={[{ required: true, message: "Please input address!" }]}
              >
                <Input placeholder="Customer address" />
              </Form.Item>
              <Form.Item
                name="customerPhone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} placeholder="000-0000-0000" />
              </Form.Item>
              <Divider>Service Contact(Optional)</Divider>
              <Form.Item
                label="Name"
                name="contactName"
                rules={[{ required: true, message: "Please input name!" }]}
              >
                <Input placeholder="Service contact name" />
              </Form.Item>
              <Form.Item
                name="contactPhone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input contact number!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} placeholder="000-0000-0000" />
              </Form.Item>
              <Form.Item
                label="Location"
                name="contactLocation"
                rules={[
                  { required: true, message: "Please input contact location!" },
                ]}
              >
                <Input placeholder="Service contact address" />
              </Form.Item>
            </TabPane>
            <TabPane tab="Detail" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Form>
      </div>
    </AppLayout>
  );
};

export default Order;
