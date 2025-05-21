import React from "react";
import { Grid } from "@mui/material";

interface FormGridItemProps {
  size?: { lg?: number; xs?: number; sm?: number; md?: number };
  children: React.ReactNode;
}

const FormGridItem: React.FC<FormGridItemProps> = ({
  size = { sm: 12, md: 12, lg: 8, xs: 12 },
  children,
}) => {
  return <Grid size={size}>{children}</Grid>;
};

export default FormGridItem;
