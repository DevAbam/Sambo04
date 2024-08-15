import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";
import React from "react";

const News = () => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: colors.bg,
        flex: 1,
      }}
    ></SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({});
