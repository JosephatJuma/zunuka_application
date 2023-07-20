import React from "react";
import { FormControl, Input, Link } from "native-base";
import { StatusBar, Button, Center, Box, VStack } from "native-base";
import useNav from "../hooks/useNav";
const Register = () => {
  const navigation = useNav();
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="dark-content" />
      <Box height={200}></Box>
      <Center padding={2}>
        <FormControl>
          <VStack space={2}>
            <FormControl.Label>Email Address</FormControl.Label>
            <Input borderRadius={"xl"} backgroundColor={"white"} shadow={"5"} />
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input borderRadius={"xl"} backgroundColor={"white"} shadow={"5"} />
            <FormControl.Label>Password</FormControl.Label>
            <Input borderRadius={"xl"} backgroundColor={"white"} shadow={"5"} />
            <Link
              alignSelf={"flex-end"}
              onPress={() => navigation.navigate("Login")}
            >
              Already have an Account? Login
            </Link>
            <Button bg={"#FF5733"} _pressed={{ background: "grey" }}>
              Sing In
            </Button>
          </VStack>
        </FormControl>
      </Center>
    </>
  );
};

export default Register;
