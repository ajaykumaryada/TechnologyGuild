import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GuildDetail from "../components/GuildDetail";

const GuildMain = () => {
  return (
    <View>
      <GuildDetail title="Machine Learning" />
      <GuildDetail title="Cloud Native" />
      <GuildDetail
        title="Blockchain"
        imageSource={require("../../assets/bc.jpeg")}
        imageScore="9"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GuildMain;
