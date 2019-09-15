import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Enter Deloitte Technology Guild"
        onPress={() => navigation.navigate("Guild")}
      />
      <Button
        title="Enter Color Screen Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
      title="Enter Square Screen Demo"
      onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
