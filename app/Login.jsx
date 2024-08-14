import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const index = () => {
  const handleMoveToHome = () => {
    router.replace("(tabs)");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          backgroundColor: colors.bg,
          flex: 1,
        }}
      >
        <ScrollView>
          <View className=" flex flex-row  p-2 items-center gap-4 mb-16 ">
            <Pressable
              onPress={router.back}
              className=" flex-row justify-center items-center border-[1px] border-[#777a92]  rounded-xl  w-12 h-12"
            >
              <FontAwesome name="angle-left" size={40} color="white" />
            </Pressable>
            <Text className=" text-white text-3xl tracking-widest font-poppins">
              Log in
            </Text>
          </View>

          <Text className=" text-[#777a92] mb-6 font-poppins">
            Login with one of the following methods
          </Text>
          {/* google and fb part */}
          <View className="flex-row items-center justify-between mb-9">
            <View className=" w-[48%] border-1 border-red flex items-center justify-center h-16 rounded-2xl border-[#777a92] bg-[#39304d] ">
              <FontAwesome name="google" size={25} color="white" />
            </View>
            <View className=" w-[48%] border-1 border-red flex items-center justify-center h-16 rounded-2xl border-[#777a92] bg-[#39304d]">
              <FontAwesome name="facebook" size={25} color="white" />
            </View>
          </View>
          {/* forms part */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className=" text-white pb-2 font-poppins">Email</Text>
            <View className=" bg-[#39304d] flex-row  items-center justify-between border-2  border-[#777a92] rounded-2xl mb-9">
              <TextInput className=" w-[88%] h-16 text-xl pl-3 pr-2 text-white rounded-2xl" />
              <View className=" bg-[#1f1a30] w-[10%] flex items-center justify-center rounded-full p-2 mr-[2.5%] ">
                <FontAwesome name="close" size={18} color="#777a92" />
              </View>
            </View>
            <Text className=" text-white pb-2 font-poppins">Passwordss</Text>
            <View className=" bg-[#39304d] flex-row  items-center justify-between border-2  border-[#777a92] rounded-2xl mb-9">
              <TextInput
                secureTextEntry={true}
                className=" w-[88%] h-16 text-xl pl-3 pr-2 text-white rounded-2xl"
              />
              <View className=" bg-[#1f1a30] w-[10%] flex items-center justify-center rounded-full p-2 mr-[2.5%] ">
                <FontAwesome name="eye" size={18} color="#777a92" />
              </View>
            </View>

            <Pressable
              title="Login"
              className=" h-16 border-2  border-purple-950 bg-gradient  bg-[#f472b6] rounded-2xl mb-3 flex items-center justify-center"
              onPress={handleMoveToHome}
            >
              <Text className=" text-white font-poppins">Login</Text>
            </Pressable>
            <Text className=" text-center text-[#777a92] font-poppins">
              Dont have an account?{"  "}
              <Link
                href={"Signup"}
                className=" text-white text-lg font-poppins"
              >
                Signup
              </Link>
            </Text>
          </ScrollView>
          {/* Enf of form */}
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default index;

const styles = StyleSheet.create({});
