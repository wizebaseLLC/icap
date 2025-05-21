import { IFormState } from "@/types";
import React from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

interface FormViewProps {
  defaultValues: IFormState;
  form: UseFormReturn<IFormState, unknown, IFormState>;
}

const FormView: React.FC<FormViewProps & React.PropsWithChildren> = ({
  form,
  children,
}) => {
  const { handleSubmit } = form;
  const onSubmit: SubmitHandler<IFormState> = async (data) => {
    const formData = new FormData();
    const file = data.file;
    if (!file) {
      throw new Error("File is required");
    }

    formData.append("firstName", data.firstName!);
    formData.append("lastName", data.lastName!);
    formData.append("dateOfBirth", data.dateOfBirth as unknown as string);
    formData.append("phoneNumber", data.phoneNumber!);
    formData.append("streetAddress", data.streetAddress!);
    formData.append("state", data.state!);
    formData.append("zipCode", data.zipCode!.toString());
    formData.append("file", file); // File object

    await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};

export default FormView;
