import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");

  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Open up App.js to start working on your app!
      </Text>
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
        <Image
          fadeDuration={1000}
          blurRadius={4}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback>
      <Image source={require("./assets/favicon.png")} />
      <Button
        title="Click me"
        onPress={() =>
          // Alert.alert("My title", "My message", [
          //   { text: "Yes", onPress: () => console.log("Yes") },
          //   { text: "No", onPress: () => console.log("No") },
          // ])
          Alert.prompt(
            "My title",
            "My message",
            (text) => {
              console.log(text);
              setInputValue(text);
            },
            undefined,
            "plain-text",
            inputValue
          )
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
