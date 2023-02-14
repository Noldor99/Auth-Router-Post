import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton } from "../components/UI/PrimaryButton";
import { MainContainer } from "../components/UI/MainContainer";
import { Form } from "../components/UI/Form";
import { Input } from "../components/UI/Input";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});


interface UserSubmitForm {
  firstName: string;
  lastName: string;
};


const Auth = () => {


  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<UserSubmitForm>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    // dispatch(setData(data))
    navigate("home");
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Form
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('firstName')}
          id="firstName"
          type="text"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register('lastName')}
          id="lastName"
          type="text"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};


export default Auth