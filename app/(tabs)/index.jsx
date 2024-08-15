import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Feather,
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { BlurView } from "expo-blur";
import LChart from "../../components/LChart";
import BChart from "../../components/BChart";

const Home = () => {
  const [seasonLength, setSeasonLength] = useState("30%");
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 8,
        paddingTop: 20,
        backgroundColor: colors.bg,
        flex: 1,
      }}
    >
      <View className=" flex flex-row items-center justify-around mb-3">
        <View
          S
          className="h-14 w-14 flex items-center justify-center border-2 border-neutral-500 rounded-full p-2"
        >
          <Image
            className=" h-14 w-14 rounded-full absolute "
            source={require("../../assets/images/beto.jpeg")}
          />
        </View>
        <View>
          <Text className=" text-white text-xl tracking-wide font-poppins">
            Leslie Abam
          </Text>
        </View>
        <View className=" flex flex-row gap-5">
          <View className=" h-11 w-11  rounded-xl flex items-center justify-center">
            <Ionicons name="moon" color={"white"} size={20} />
          </View>
          <View className=" h-11 w-11  rounded-xl flex items-center justify-center">
            <Feather name="menu" color={"white"} size={20} />
          </View>
        </View>
      </View>
      <ScrollView>
        <View className="rounded-xl  overflow-hidden mb-3  ">
          <BlurView intensity={10} style={{}} className="mb-5 pb-2">
            <View className="mx-2 flex mt-2 flex-row items-center justify-between">
              <Text className="text-borders font-poppins">Match day </Text>
              <Text className="text-borders font-poppins">
                <Text className="text-blue-400">15</Text>/50
              </Text>
            </View>
            <View className="mx-2 text-white font-poppins  border-2 border-borders rounded-lg mt-2 mb-1">
              <View
                style={{ width: seasonLength }}
                className="bg-blue-400   h-2 rounded-full "
              ></View>
            </View>
          </BlurView>
          <Text className="text-white font-poppins text-xl mx-3">
            Points Performance
          </Text>
        </View>
        <View
          // style={{ borderRadius: 10, overflow: "hidden" }}
          className=" rounded-2xl overflow-hidden"
        >
          <BlurView
            intensity={10}
            style={{ backgroundColor: "rgba(0.5,0.5,215,0.5)" }}
            className="  rounded-xl bg-boxes"
          >
            <View className="mx-4 mb-4 mt-3 flex flex-row justify-between  p-2">
              <View>
                <View className="flex items-center flex-row gap-3 ">
                  <View className="h-4 w-4 bg-blue-600 rounded-full"></View>
                  <Text className=" text-text font-poppins text-3xl">87</Text>
                  <Text className=" text-text font-poppins">Points</Text>
                </View>
                <View className="flex items-center flex-row gap-3 ">
                  <View className="h-4 w-4 bg-orange-600 rounded-full"></View>
                  <Text className=" text-text font-poppins text-3xl">53</Text>
                  <Text className=" text-text font-poppins">Points</Text>
                </View>
              </View>
              <View>
                {/* <SimpleLineIcons name="options" color={"white"} size={20} /> */}
                <SimpleLineIcons
                  name="options-vertical"
                  color={"white"}
                  size={20}
                />
                {/* <Text className="font-poppins text-white">menu</Text> */}
              </View>
            </View>
            <LChart />
            <View className=" mb-4 flex flex-row gap-8 mx-3 pt-5">
              <View className="flex flex-row items-center justify-center gap-2">
                <View className="h-2 w-2 bg-orange-600 rounded-full"></View>
                <Text className=" text-borders font-poppins text-md">
                  Last Season
                </Text>
              </View>
              <View className="flex flex-row items-center justify-center gap-2">
                <View className="h-2 w-2 bg-blue-600 rounded-full"></View>
                <Text className=" text-borders font-poppins text-md">
                  Current Season
                </Text>
              </View>
            </View>
          </BlurView>
        </View>

        <View>
          <Text className="font-poppins text-white text-xl mx-3 mt-7 mb-6">
            Halve performance
          </Text>
        </View>

        {/* Barchart */}
        <BlurView
          intensity={10}
          style={{ backgroundColor: "rgba(0,0,255,0.5)" }}
          className="  rounded-xl bg-boxes pb-6 pt-4"
        >
          <BChart />
        </BlurView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
