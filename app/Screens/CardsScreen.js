import React from "react";
import { View } from "react-native";
import Card from "../components/Card";

function CardsScreen(props) {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        tilte="Red jacket for sale"
        subtitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
}

// const styles = StyleSheet.create({});
export default CardsScreen;
