import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        {/* <AppText style={styles.tagline}>Sell what you don't need</AppText> */}
        <Text style={styles.tagline}>Sell what you don't need</Text>
        <AppText>I love react Native</AppText>
      </View>
      {/* <View style={styles.loginButton}></View> */}
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  //   loginButton: {
  //     width: "100%",
  //     height: 50,
  //     backgroundColor: "#fc5c65",
  //   },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  //   registerButton: {
  //     width: "100%",
  //     height: 50,
  //     backgroundColor: "#4ecdc4",
  //   },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "600",
    // fontStyle: "italic",
    color: "tomato",
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 50,
  },
});

export default WelcomeScreen;
