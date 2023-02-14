import { Container } from "@mui/material";
 

export const MainContainer = ({ children, ...props }) => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
      {...props}
    >
      {children}
    </Container>
  );
};
