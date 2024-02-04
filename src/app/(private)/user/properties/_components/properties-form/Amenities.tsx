import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Input, Select, InputNumber, Form } from "antd";
import { facingTypes, furnishingTypes, parkingTypes } from "@/constants";

function Amenities({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) {
  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, amenities: values });
    setCurrentStep(currentStep + 1);
  };

  //bedrooms, bathrooms, balconies, parking, furnishing, area, totalfloor, facing, age
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={finalValues.amenities}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="bedrooms"
          label="BedRooms"
          rules={[
            {
              required: true,
              message: "Please input bedrooms!",
            },
          ]}
        >
          <InputNumber className="w-full" placeholder="bedrooms" />
        </Form.Item>

        <Form.Item
          name="bathrooms"
          label="BathRooms"
          rules={[
            {
              required: true,
              message: "Please enter bathrooms!",
            },
          ]}
        >
          <InputNumber className="w-full" placeholder="bathrooms" />
        </Form.Item>

        <Form.Item
          name="Balcoies"
          label="Balcoies"
          rules={[
            {
              required: true,
              message: "Please enter Balcoies!",
            },
          ]}
        >
          <InputNumber className="w-full" placeholder="Balcoies" />
        </Form.Item>

        <Form.Item
          name="Parking"
          label="Parking"
          rules={[
            {
              required: true,
              message: "Please enter Parking!",
            },
          ]}
        >
          <Select options={parkingTypes} />
        </Form.Item>

        <Form.Item
          name="Furnishing"
          label="Furnishing"
          rules={[
            {
              required: true,
              message: "Please enter Furnishing!",
            },
          ]}
        >
          <Select options={furnishingTypes} />
        </Form.Item>

        <Form.Item
          name="Floors"
          label="Floors"
          rules={[
            {
              required: true,
              message: "Please enter Floors!",
            },
          ]}
        >
          <InputNumber className=" w-full" placeholder="Floors" />
        </Form.Item>

        <Form.Item
          name="area"
          label="area"
          rules={[
            {
              required: true,
              message: "Please enter area!",
            },
          ]}
        >
          <InputNumber className="w-full" placeholder="area" />
        </Form.Item>

        <Form.Item
          name="Facing"
          label="Facing"
          rules={[
            {
              required: true,
              message: "Please enter Facing!",
            },
          ]}
        >
          <Select options={facingTypes} />
        </Form.Item>

        <Form.Item
          name="Age"
          label="Age"
          rules={[
            {
              required: true,
              message: "Please enter Age!",
            },
          ]}
        >
          <InputNumber className=" w-full" placeholder="Age" />
        </Form.Item>
      </div>

      <div className="flex  justify-end gap-5 mt-7">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
}

export default Amenities;
