import React from "react";
import { ScrollView, View } from "react-native";
import { Formik } from "formik";
import { TextInput, Text, Snackbar, Button } from "react-native-paper";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import * as Yup from "yup";
import useApi from "../hooks/useApi";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const apiUrl = useApi(); //use api hook
  const { message, submitData, isSending, clearErr, navigation } =
    useRegister();

  // validate form
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const size = 500;
  const r = size * 0.33;
  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          marginTop: 50,
        }}
      >
        <Group blendMode="multiply">
          <Circle cx={size - r} cy={r} r={r} color="orange" />
        </Group>
      </Canvas>

      <Formik
        initialValues={{ name: "", email: "", phone: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => submitData(`${apiUrl}auth/register`, values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ width: "96%", marginTop: 150, alignSelf: "center" }}>
            <TextInput
              label="Full Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              fontSize={18}
              mode="outlined"
              error={errors.name}
            />
            {errors.name && touched.name && (
              <Text style={{ color: "red" }}>{errors.name}</Text>
            )}

            <TextInput
              label="Email Address"
              mode="outlined"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              fontSize={18}
              error={errors.email}
            />
            {errors.email && touched.email && (
              <Text style={{ color: "red" }}>{errors.email} </Text>
            )}
            <TextInput
              mode="outlined"
              label="Phone Number"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              fontSize={18}
              error={errors.phone}
              keyboardType="phone-pad"
            />
            {errors.phone && touched.phone && (
              <Text style={{ color: "red" }}>{errors.phone} </Text>
            )}

            <TextInput
              secureTextEntry={true}
              label="Password"
              mode="outlined"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
            />
            {errors.password && touched.password && (
              <Text style={{ color: "red" }}>{errors.password} </Text>
            )}

            <Button
              onPress={handleSubmit}
              disabled={isSending}
              mode={isSending ? "outlined" : "contained"}
            >
              {isSending ? "Signing up...." : "Sing In"}
            </Button>
            <Text alignSelf={"flex-end"}>Already have an Account?</Text>
            <Button onPress={() => navigation.navigate("Login")}>Login</Button>
          </View>
        )}
      </Formik>

      <Snackbar
        visible={message}
        onDismiss={clearErr}
        action={{
          label: "OK",
          onPress: () => {
            // Do something
          },
        }}
        style={{ backgroundColor: "red" }}
      >
        {message}
      </Snackbar>
    </ScrollView>
  );
};

export default Register;
