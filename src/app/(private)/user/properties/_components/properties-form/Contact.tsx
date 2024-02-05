import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, InputNumber, Select, message } from "antd";
import { UploadFilestoFirebaseAndReturnUrls } from "@/helpers/upload-media";

function Contact({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) {
  const onFinish = async (values: any) => {
    try {
      const tempFinalValues = { ...finalValues, contact: values };
      const tempMedia = tempFinalValues.media;
      tempMedia.images = await UploadFilestoFirebaseAndReturnUrls(
        tempMedia.newlyUploadedFiles
      );
      tempFinalValues.media = tempMedia;
      console.log(tempFinalValues);
    } catch (error: any) {
      message.error(error.message);
    }
  };

  //overname, owneremail, ownernumber, showownercontact
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={finalValues.contact}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="ownerName"
          label="Owner Name"
          rules={[
            {
              required: true,
              message: "Please input Owner name",
            },
          ]}
        >
          <Input placeholder="Owner Name" />
        </Form.Item>

        <Form.Item
          name="ownerEmail"
          label="Owner Email"
          rules={[
            {
              required: true,
              message: "Please input Owner Email",
            },
          ]}
        >
          <Input placeholder="Owner Email" />
        </Form.Item>

        <Form.Item
          name="ownerPhone"
          label="Owner Phone"
          rules={[
            {
              required: true,
              message: "Please input Owner Phone",
            },
          ]}
        >
          <InputNumber className=" w-full" placeholder="Owner Phone" />
        </Form.Item>

        <Form.Item
          name="ShowOwnerContact"
          label="show owner contact"
          rules={[
            {
              required: true,
              message: "Please input Owner Phone",
            },
          ]}
        >
          <Select
            options={[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ]}
          />
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

export default Contact;
