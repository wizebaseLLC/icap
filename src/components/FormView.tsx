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
  const onSubmit: SubmitHandler<IFormState> = (data) => console.log(data);

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};

export default FormView;
