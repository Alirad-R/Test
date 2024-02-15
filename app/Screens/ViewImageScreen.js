import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.ImageContainer}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 25,
    left: 15,
    borderRadius: 5,
    padding: 0,
    margin: 0,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 25,
    right: 10,
    // shadowColor: "grey", // iOS
    // shadowOffset: { width: 10, height: 10 }, // iOS
    // shadowOpacity: 1, // iOS
    elevation: 10, //android
  },
  ImageContainer: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
