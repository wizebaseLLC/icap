import React from "react";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
import { IFormState } from "@/types";

type FieldType = "text" | "number" | "phone";

interface FormTextFieldProps {
  name: keyof IFormState;
  label?: string;
  defaultValue?: string;
  fieldType?: FieldType; // The union type
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  defaultValue = "",
  fieldType = "text",
}) => {
  const { control } = useFormContext<IFormState>();

  const validationRules = {
    ...(fieldType === "phone" && {
      pattern: {
        value: /^\+?[1-9]\d{1,14}$/,
        message: "Invalid phone number format.",
      },
    }),
    required: "This field is required",
  };

  const inputType = fieldType === "number" ? "number" : "text";
  const inputMode =
    fieldType === "phone" || fieldType === "number" ? "numeric" : undefined;

  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules}
      render={({ field, fieldState }) => (
        <TextField
          label={label}
          defaultValue={defaultValue}
          {...field}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error ? fieldState.error.message : null}
          variant="outlined"
          fullWidth
          type={inputType}
          slotProps={{
            input: {
              inputMode: inputMode,
            },
          }}
        />
      )}
    />
  );
};

export default FormTextField;
