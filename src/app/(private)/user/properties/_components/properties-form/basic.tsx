import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { propertyStatuses, propertyTypes } from "@/constants";

// Basic component for the property form creation
function Basic({
  currentStep, // current step of the form
  setCurrentStep, // function to set the current step
  finalValues, // form values collected so far
  setFinalValues, // function to set the final values
}: PropertiesFormStepProps) {
  // onFinish function to handle form submission
  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, basic: values }); // update the finalValues with the new input
    setCurrentStep(currentStep + 1); // move to the next step
  };

  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={finalValues.basic}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="name"
          label="Property Name"
          rules={[
            {
              required: true,
              message: "Please input the property name",
            },
          ]}
          className=" col-span-1 lg:col-span-3"
        >
          <Input placeholder="Property Name" />
        </Form.Item>

        <Form.Item
          name="description"
          label="description"
          rules={[
            {
              required: true,
              message: "please enter a description",
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input.TextArea rows={6} placeholder="Description" />
        </Form.Item>

        <Form.Item
          name="type"
          label="type"
          rules={[
            {
              required: true,
              message: "please input type",
            },
          ]}
        >
          <Select options={propertyTypes} />
        </Form.Item>

        <Form.Item
          name="status"
          label="status"
          rules={[
            {
              required: true,
              message: "please input status",
            },
          ]}
        >
          <Select options={propertyStatuses} />
        </Form.Item>

        <Form.Item
          name="price"
          label="price"
          rules={[
            {
              required: true,
              message: "please input price",
            },
          ]}
        >
          <InputNumber className=" w-full" type="number" placeholder="price" />
        </Form.Item>
      </div>

      <div className="flex justify-end gap-5 mt-7">
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

export default Basic;
