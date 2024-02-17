import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import IconScreen from "./app/Screens/IconScreen";
import AppButton from "./app/components/AppButton";
import CardsScreen from "./app/Screens/CardsScreen";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import AccountScreen from "./app/Screens/AccountScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <AppButton
    //     title="login"
    //     onPress={() => console.log("Tapped")}
    //   ></AppButton>
    // </View>
    // <ListingsScreen />
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}
