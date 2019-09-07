import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Ajay Yada";
  return (
    <View>
      <Text style={styles.textStyleHeading}>
        Getting started with React Native!
      </Text>
      <Text style={styles.textStyleBody}>May Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleHeading: {
    fontSize: 45
  },
  textStyleBody: {
    fontSize: 20
  }
});

export default ComponentsScreen;
