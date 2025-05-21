import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormContext, Controller } from "react-hook-form";
import { IFormState } from "@/types";
import dayjs from "dayjs";

interface FormDatePickerProps {
  name: keyof IFormState;
  label?: string;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({ name, label }) => {
  const { control } = useFormContext<IFormState>();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "Date of Birth is required" }}
      render={({ field: { onChange, value }, fieldState }) => (
        <DatePicker
          disableFuture
          label={label}
          value={value ? dayjs(value as Date) : null}
          onChange={(newValue) => {
            onChange(newValue ? newValue.toISOString() : null);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
            },
          }}
        />
      )}
    />
  );
};

export default FormDatePicker;
