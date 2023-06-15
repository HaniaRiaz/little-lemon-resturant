import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>Little Lemon Restaurant</Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "#F4CE14",
  },
  headerText: { marginTop: 30, padding: 30, fontSize: 28, color: "black" },
});
