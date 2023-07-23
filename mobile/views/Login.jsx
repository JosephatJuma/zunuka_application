import React from "react";
import { FormControl, Input, Link, Spinner } from "native-base";
import { Formik } from "formik";
import { StatusBar, Center, Box, VStack, Pressable } from "native-base";
import { Button } from "@rneui/base";
import { Snackbar, Text } from "react-native-paper";
import useLogin from "../hooks/useLogin";
import useApi from "../hooks/useApi";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Canvas, Circle } from "@shopify/react-native-skia";
import { View, Animated, StyleSheet } from "react-native";
import BackButton from "../components/shared/BackButton";
import * as Yup from "yup";
const Login = () => {
  const { message, clearErr, submitData, isSending, navigation } = useLogin();
  const apiUrl = useApi();

  // validate form
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const firstCircleAnim = new Animated.Value(-50);
  const secondCircleAnim = new Animated.Value(-50);
  const size = 500;
  const r = size * 0.33;

  React.useEffect(() => {
    Animated.timing(firstCircleAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();

    Animated.timing(secondCircleAnim, {
      toValue: 1,
      duration: 2000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  // Calculate the circle positions based on Animated values
  const firstCircleTop = firstCircleAnim.interpolate({
    inputRange: [-50, size - r],
    outputRange: [-50, size - r],
  });

  const secondCircleBottom = secondCircleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50], // Adjust the position as needed
  });

  return (
    <Box flex={1}>
      <StatusBar bg="#3700B3" barStyle="dark-content" />
      <BackButton />
      {/* First Canvas */}
      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateY: firstCircleTop }],
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <Circle cx={size - r} cy={r} r={r} color="orange" />
        </Canvas>
      </Animated.View>
      <Center padding={2} marginTop={200}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => submitData(`${apiUrl}auth/login`, values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <VStack space={2} width={"98%"}>
              <FormControl.Label>Email Address</FormControl.Label>

              <Input
                shadow={"2"}
                placeholder="Enter Email"
                borderRadius={"xl"}
                backgroundColor={"white"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                fontSize={16}
                InputLeftElement={
                  <MaterialIcons
                    name="email"
                    size={25}
                    color="gray"
                    style={{ margin: 2, marginLeft: 10 }}
                  />
                }
              />
              {errors.email && touched.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}
              <FormControl.Label>Password</FormControl.Label>
              <Input
                shadow={"2"}
                placeholder="Enter Password"
                borderRadius={"xl"}
                backgroundColor={"white"}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                fontSize={16}
                type="password"
                InputLeftElement={
                  <MaterialIcons
                    name="fingerprint"
                    size={25}
                    color="gray"
                    style={{ margin: 2, marginLeft: 10 }}
                  />
                }
                InputRightElement={
                  <Pressable m="2" ml="3" size="6">
                    <Ionicons name="eye" size={20} color="gray" />
                  </Pressable>
                }
              />
              {errors.password && touched.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}

              <Button
                //buttonStyle={{ backgroundColor: "#FF5733" }}
                onPress={handleSubmit}
                disabled={isSending}
                title={isSending ? <Spinner size={"lg"} /> : "Sing In"}
              />
              <Text alignSelf={"flex-end"}>Have no Account?</Text>
              <Link
                alignSelf={"flex-end"}
                onPress={() => navigation.navigate("Register")}
              >
                Register
              </Link>
            </VStack>
          )}
        </Formik>
      </Center>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateY: secondCircleBottom }],
          zIndex: -1,
          position: "absolute",
          marginTop: "130%",
        }}
      >
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <Circle cx={r / r} cy={r} r={120} color="orange" />
        </Canvas>
      </Animated.View>
      <Snackbar
        visible={message}
        onDismiss={clearErr}
        action={{
          label: "OK",
          onPress: () => {},
        }}
        style={{ backgroundColor: "red" }}
      >
        {message}
      </Snackbar>
    </Box>
  );
};

export default Login;
