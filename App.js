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
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/Screens/LoginScreen";
import ListingEditScreen from "./app/Screens/ListingEditScreen";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];

export default function App() {
  // const [firstName, setFirstName] = useState("");
  // const [category, setCategory] = useState();

  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <AppButton
    //     title="login"
    //     onPress={() => console.log("Tapped")}
    //   ></AppButton>
    // </View>
    // <ListingsScreen />
    // --------------------------------------------
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>
    <ListingEditScreen />
  );
}
