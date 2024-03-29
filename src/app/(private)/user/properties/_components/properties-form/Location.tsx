import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { cities } from "@/constants";

function Location({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) {
  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, location: values });
    setCurrentStep(currentStep + 1);
  };

  //city, pincode, landmark, address

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={finalValues.location}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="city"
          label="city"
          rules={[
            {
              required: true,
              message: "Please input city",
            },
          ]}
        >
          <Select options={cities} />
        </Form.Item>

        <Form.Item
          name="pincode"
          label="pincode"
          rules={[
            {
              required: true,
              message: "Please input Pincode",
            },
          ]}
        >
          <InputNumber className="w-full" placeholder="Pincode" />
        </Form.Item>

        <Form.Item
          name="landmark"
          label="landmark"
          rules={[
            {
              required: true,
              message: "Please input landmark",
            },
          ]}
        >
          <Input placeholder="Landmark" />
        </Form.Item>

        <Form.Item
          name="address"
          label="address"
          rules={[
            {
              required: true,
              message: "Please input address",
            },
          ]}
          className=" col-span-1 lg:col-span-3"
        >
          <Input.TextArea rows={6} placeholder="Address" />
        </Form.Item>
      </div>
      <div className="flex  justify-end gap-5 mt-7">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button htmlType="submit" type="primary">
          Next
        </Button>
      </div>
    </Form>
  );
}

export default Location;
