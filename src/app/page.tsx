"use client";
import {
  FileUploadView,
  FormGridItem,
  FormView,
  StatePickerView,
  TextFieldView,
} from "@/components";
import { IFormState } from "@/types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormDatePicker from "@/components/DatePickerView";

const Home: React.FC = () => {
  const methods = useForm<IFormState>({
    defaultValues,
  });

  return (
    <Box>
      <Header />
      <FormLayout>
        <FormProvider {...methods}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormView form={methods} defaultValues={defaultValues}>
              <Grid container justifyContent="center" spacing={2}>
                <FormGridItem>
                  <TextFieldView name="firstName" label="First Name" />
                </FormGridItem>
                <FormGridItem>
                  <TextFieldView name="lastName" label="Last Name" />
                </FormGridItem>
                <FormGridItem>
                  <TextFieldView
                    name="phoneNumber"
                    label="Phone Number"
                    fieldType="phone"
                  />
                </FormGridItem>
                <FormGridItem>
                  <FormDatePicker name="dateOfBirth" label="Date of Birth" />
                </FormGridItem>
                <FormGridItem>
                  <TextFieldView name="streetAddress" label="Street Address" />
                </FormGridItem>
                <FormGridItem>
                  <StatePickerView name="state" label="State" />
                </FormGridItem>
                <FormGridItem>
                  <TextFieldView
                    name="zipCode"
                    label="Zip Code"
                    fieldType="number"
                  />
                </FormGridItem>
                <FormGridItem>
                  <FileUploadView
                    name="file"
                    label="Upload your CSV, Text, or PDF"
                  />
                </FormGridItem>
                <FormGridItem size={{ sm: 12, md: 12, lg: 5, xs: 12 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    disabled={methods.formState.isSubmitting}
                  >
                    Submit Form
                  </Button>
                </FormGridItem>
              </Grid>
            </FormView>
          </LocalizationProvider>
        </FormProvider>
      </FormLayout>
    </Box>
  );
};

const Header = () => (
  <Box mt={4}>
    <Typography variant="h4">Welcome, fill out the form</Typography>
  </Box>
);

const FormLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Box component={Paper} elevation={2} p={2} mt={2}>
      {children}
    </Box>
  );
};

const defaultValues: IFormState = {
  firstName: undefined,
  lastName: undefined,
  dateOfBirth: undefined,
  phoneNumber: undefined,
  streetAddress: undefined,
  state: undefined,
  zipCode: undefined,
};

export default Home;
