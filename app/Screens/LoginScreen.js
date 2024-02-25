import React, { useState } from "react";
import { StyleSheet, Image, Button } from "react-native";
import * as Yup from "yup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
  AppFormPicker,
} from "../components/Form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        {/* <AppText style={{ color: "red" }}>{errors.email}</AppText> */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        {/* <AppText style={{ color: "red" }}>{errors.password}</AppText> */}
        <SubmitButton title="Login" />
        {/* <AppButton title="Login" onPress={handleSubmit} /> */}
      </AppForm>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Login")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
