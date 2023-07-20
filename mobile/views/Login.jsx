import React from "react";
import { FormControl, Input, Link } from "native-base";
import { StatusBar, Button, Center, Box, VStack } from "native-base";
import { Snackbar } from "react-native-paper";
import useNav from "../hooks/useNav";
const Login = () => {
  const navigation = useNav();
  const [showInfo, setShowInfo] = React.useState(false);
  const onDismissSnackBar = () => setShowInfo(false);
  const onToggleSnackBar = () => setShowInfo(!showInfo);
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="dark-content" />
      <Box height={300}></Box>
      <Center padding={2}>
        <FormControl>
          <VStack space={2}>
            <FormControl.Label>Email Address</FormControl.Label>
            <Input borderRadius={"xl"} backgroundColor={"white"} />
            <FormControl.Label>Password</FormControl.Label>
            <Input borderRadius={"xl"} backgroundColor={"white"} />
            <Link
              alignSelf={"flex-end"}
              onPress={() => navigation.navigate("Register")}
            >
              Have no Account? Register
            </Link>
            <Button
              bg={"#FF5733"}
              _pressed={{ background: "grey" }}
              onPress={onToggleSnackBar}
            >
              Sing In
            </Button>
          </VStack>
        </FormControl>
      </Center>
      <Snackbar
        visible={showInfo}
        onDismiss={onDismissSnackBar}
        action={{
          label: "OK",
          onPress: () => {
            // Do something
          },
        }}
        style={{ backgroundColor: "red" }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
    </>
  );
};

export default Login;
