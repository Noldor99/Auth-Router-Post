import { TextField } from "@mui/material";
import React, { forwardRef } from "react";

interface InputProps{
  id: string,
  type: string,
  label: string,
  error?: boolean,
  helperText?: string
}

export const Input: React.FC<InputProps> = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});
