import { IFormState } from "@/types";
import { useTheme } from "@mui/material";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";

interface FileUploadProps {
  name: keyof IFormState; // replace with your form key type if available
  label?: string;
  acceptedTypes?: string[];
}

const FileUploadView: React.FC<FileUploadProps> = ({
  name,
  label = "Upload File",
  acceptedTypes = ["application/pdf", "text/plain", "text/csv"],
}) => {
  const { setValue, trigger } = useFormContext();

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setValue(name, acceptedFiles[0]);
        trigger(name);
      }
    },
    [setValue, trigger, name]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: acceptedTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    multiple: false,
  });

  const theme = useTheme();

  return (
    <Controller
      name={name}
      rules={{ required: "File is required" }}
      render={({ field, fieldState }) => (
        <div
          {...getRootProps()}
          style={{
            border: `2px dashed ${
              fieldState.error ? theme.palette.error.dark : "#ccc"
            }`,
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} />
          {field.value ? (
            <div>
              <strong>Selected File:</strong> {field.value.name}
            </div>
          ) : (
            <p>{label} (CSV, Text, PDF)</p>
          )}
          {fieldState.error && (
            <p style={{ color: theme.palette.error.main }}>
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default FileUploadView;
