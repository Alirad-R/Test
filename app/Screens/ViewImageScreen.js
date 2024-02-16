import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
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
    position: "absolute",
    top: 25,
    left: 15,
    // borderRadius: 5,
    // padding: 0,
    // margin: 0,
  },
  deleteIcon: {
    position: "absolute",
    top: 25,
    right: 10,
    // shadowColor: "grey", // iOS
    // shadowOffset: { width: 10, height: 10 }, // iOS
    // shadowOpacity: 1, // iOS
    // elevation: 10, //android
  },
  ImageContainer: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
