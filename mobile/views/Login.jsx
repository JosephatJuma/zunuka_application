import React from "react";
import { Formik } from "formik";

import { Snackbar, Text, Button, TextInput } from "react-native-paper";
import useLogin from "../hooks/useLogin";
import useApi from "../hooks/useApi";
import { Canvas, Circle } from "@shopify/react-native-skia";
import { View, Animated, StyleSheet } from "react-native";

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
  const size = 200;
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
    <View style={{ flex: 1 }}>
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
          <View style={{ width: "96%", marginTop: 250, alignSelf: "center" }}>
            <TextInput
              placeholder="Enter Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              fontSize={16}
              left={<TextInput.Icon icon={"email"} />}
              label={"Email Address"}
              mode="outlined"
            />
            {errors.email && touched.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}

            <TextInput
              placeholder="Enter Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              type="password"
              left={<TextInput.Icon icon="fingerprint" />}
              right={<TextInput.Icon icon="eye" />}
              label={"Password"}
              secureTextEntry={true}
              mode="outlined"
            />
            {errors.password && touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}

            <Button
              onPress={handleSubmit}
              disabled={isSending}
              mode={isSending ? "outlined" : "contained"}
            >
              {isSending ? <Spinner size={"lg"} /> : "Sing In"}
            </Button>
            <Text alignSelf={"flex-end"}>Have no Account?</Text>
            <Button onPress={() => navigation.navigate("Register")}>
              Register
            </Button>
          </View>
        )}
      </Formik>

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
    </View>
  );
};

export default Login;
