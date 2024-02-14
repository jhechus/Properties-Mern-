"use client";
import { Button, Form, Input, InputNumber, Modal } from "antd";
import React from "react";

function QueryModal({ propertyId }: { propertyId: string }) {
  const [showQueryModal, setShowQueryModal] = React.useState(false);

  const onFinish = async (values: any) => {};

  return (
    <div className="mt-7">
      <Button block onClick={() => setShowQueryModal(true)}>
        Query For More Info
      </Button>

      {showQueryModal && (
        <Modal
          open={showQueryModal}
          onCancel={() => setShowQueryModal(false)}
          title="Send a query to the owner"
          centered
          width={600}
          footer={null}
        >
          <Form
            layout="vertical"
            name="query-form"
            onFinish={onFinish}
            className=" flex flex-col gap-7"
          >
            <Form.Item
              name="name"
              label="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="quoteAmount"
              label="Quote Amount"
              rules={[
                { required: true, message: "Please enter your quote amount" },
              ]}
            >
              <InputNumber className=" w-full" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item
              name="phonenumber"
              label="Phone number"
              rules={[{ required: true, message: "Please enter your phone" }]}
            >
              <Input />
            </Form.Item>

            <div className="flex justify-end gap-5">
              <Button
                htmlType="button"
                onClick={() => setShowQueryModal(false)}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default QueryModal;
