import { Button } from "@mui/material";

import React from "react";

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};
