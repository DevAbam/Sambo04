import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { BlurView } from "expo-blur";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fef9c3",
        tabBarBackground: () => {
          return (
            <BlurView
              tint="light"
              intensity={3}
              style={{
                height: 60,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              }}
            />
          );
        },
        tabBarStyle: {
          backgroundColor: "#1f1a30",
          borderColor: "#1f1a30",
          borderTopWidth: 0,

          // paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabelStyle: { fontFamily: "poppins" },
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Fixtures"
        options={{
          tabBarLabelStyle: { fontFamily: "poppins" },

          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="soccer-ball-o" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="News"
        options={{
          tabBarLabelStyle: { fontFamily: "poppins" },

          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "#DE3163", color: "white" },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="newspaper-o" color={color} size={20} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
