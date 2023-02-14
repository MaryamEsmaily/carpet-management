import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import logoImg from "assets/images/logo.png";
import Input from "components/custom/Input";
import { usePostLogin } from "hook/api/useAuthApi";
import useToast from "hook/useToast";
import { useFormik } from "formik";
import PasswordInput from "components/custom/PasswordInput";
import { useNavigate } from "react-router-dom";
//
const initialValues = {
  companyId: "",
  email: "",
  password: "",
};
//
function Login() {
  //
  const bgColor = useColorModeValue("#fff", "#212B36");
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  const postLogin = usePostLogin();
  //
  const handleSubmit = (values) => {
    postLogin.mutate(values, {
      onSuccess: (res) => {
        toast.success({ res });
        navigate("/app/cartable");
        formik.resetForm();
      },
      onError: (err) => {
        toast.error({ err });
        navigate("/app/cartable");
      },
    });
  };
  //
  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues: initialValues,
  });
  //
  return (
    <Grid templateColumns="repeat(4,minmax(0,1fr))" h="100vh" p={6}>
      <GridItem colSpan={1}>
        <Flex
          justify="center"
          align="center"
          h="100%"
          bg={bgColor}
          borderRadius="16px"
        >
          <Image src={logoImg} width="200px" height="200px" objectFit="cover" />
        </Flex>
      </GridItem>
      <GridItem colSpan={3}>
        <Stack justify="center" align="center" h="100%">
          <Box width="100%" maxW="400px">
            <Text fontSize={24} fontWeight="bold">
              ورود
            </Text>
            <Text color="text-primary" mt={2}>
              لطفا ایمیل و رمز عبور خود را وارد کنید.
            </Text>
            <Stack
              spacing={14}
              mt={10}
              as="form"
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={6}>
                <FormControl variant="floating">
                  <Input {...formik.getFieldProps("companyId")} />
                  <FormLabel fontSize="sm">شناسه کارخانه</FormLabel>
                </FormControl>
                <FormControl variant="floating">
                  <Input {...formik.getFieldProps("email")} />
                  <FormLabel fontSize="sm">ایمیل</FormLabel>
                </FormControl>
                <FormControl variant="floating">
                  <PasswordInput {...formik.getFieldProps("password")} />
                  <FormLabel fontSize="sm">رمزعبور</FormLabel>
                </FormControl>
              </Stack>
              <Button type="submit" rounded="8px">
                ورود
              </Button>
            </Stack>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default Login;
