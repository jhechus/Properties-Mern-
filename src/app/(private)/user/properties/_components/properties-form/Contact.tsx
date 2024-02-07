import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, InputNumber, Select, message } from "antd";
import { UploadFilestoFirebaseAndReturnUrls } from "@/helpers/upload-media";
import { AddProperty } from "@/actions/properties";
import { useRouter } from "next/navigation";

function Contact({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
  loading,
  setLoading,
}: PropertiesFormStepProps) {
  const router = useRouter();
  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const tempFinalValues = { ...finalValues, contact: values };
      const tempMedia = tempFinalValues.media;
      tempMedia.images = await UploadFilestoFirebaseAndReturnUrls(
        tempMedia.newlyUploadedFiles
      );
      tempFinalValues.media = tempMedia;
      const valuesAsPerDb = {
        ...tempFinalValues.basic,
        ...tempFinalValues.location,
        ...tempFinalValues.amenities,
        ...tempFinalValues.contact,
        images: tempFinalValues.media.images,
      };
      const response = await AddProperty(valuesAsPerDb);
      if (response.error) throw new Error(response.error);
      message.success("Property added Successfully");
      router.push("/user/properties");
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Save property
        </Button>
      </div>
    </Form>
  );
}

export default Contact;
