import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import IconScreen from "./app/Screens/IconScreen";
import AppButton from "./app/components/AppButton";
import CardsScreen from "./app/Screens/CardsScreen";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";

export default function App() {
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <AppButton
    //     title="login"
    //     onPress={() => console.log("Tapped")}
    //   ></AppButton>
    // </View>
    <MessagesScreen />
  );
}
