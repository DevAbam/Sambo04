import { StyleSheet, Text, View, Image } from "react-native";
import LottieView from "lottie-react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// const CustomTitle = ({ text, color }) => (
//   <Text
//     className=" font-poppins  text-4xl text-slate-100 pt-2 "
//     style={{ color: color }}
//   >
//     {text}
//   </Text>
// );
const Slide1Text = () => (
  <View className="flex flex-row flex-wrap items-center  justify-center">
    <Text className="text-4xl font-poppins text-orange-200">Management </Text>
    <Text className="text-4xl font-poppins text-[#f1f5f9]">&</Text>
    <Text className="text-4xl font-poppins text-[#f1f5f9]">Records</Text>
  </View>
);
const Slide2Text = () => (
  <View className="flex flex-row flex-wrap items-center justify-center">
    <Text className="text-4xl font-poppins text-[#f1f5f9]">Performance </Text>
    <Text className="text-4xl font-poppins text-[#f1f5f9]">&</Text>
    <Text className="text-4xl font-poppins text-yellow-100">Analytics</Text>
  </View>
);
const Slide3Text = () => (
  <View className="flex flex-row flex-wrap items-center justify-center">
    <Text className="text-4xl font-poppins text-[#f1f5f9]">Team </Text>
    <Text className="text-4xl font-poppins  text-orange-500">News</Text>
    <Text className="text-4xl font-poppins text-[#f1f5f9]"> & Information</Text>
  </View>
);
const CustomSubTitle = ({ text }) => (
  <Text className=" font-poppins text-borders">{text}</Text>
);

const NextBtn = () => (
  <Text className=" font-poppins tracking-widest">Next</Text>
);
const SkipBtn = () => (
  <Text className=" font-poppins tracking-widest">Skip</Text>
);

const Onboardingscreen = () => {
  const handleDone = () => {
    router.push("/Login");
  };
  return (
    <View className="flex-1 ">
      <Onboarding
        pages={[
          {
            backgroundColor: "#1f1a30",
            image: (
              <View
                style={{ height: 400, width: 300 }}
                className="flex items-center justify-center"
              >
                <LottieView
                  source={require("../assets/animations/Animation - 1722198898379.json")}
                  autoPlay
                  loop
                  duration={800}
                  style={{ height: hp(50), width: wp(90) }}
                />
              </View>
            ),
            title: (
              // <CustomTitle text={"Performance & Analytics"} color={"#f1f5f9"} />
              <Slide1Text />
            ),
            subtitle: <CustomSubTitle text={"Team data ready at a go"} />,
          },
          {
            backgroundColor: "#1f1a30",
            image: (
              <View
                style={{ height: 400, width: 300 }}
                className="flex items-center justify-center"
              >
                <LottieView
                  source={require("../assets/animations/Animation - 1722205587007.json")}
                  autoPlay
                  loop
                  duration={4500}
                  style={{ height: hp(50), width: wp(90) }}
                />
              </View>
            ),
            title: (
              // <CustomTitle text={"Performance & Analytics"} color={"#f1f5f9"} />
              <Slide2Text />
            ),
            subtitle: (
              <CustomSubTitle
                text={"monitor performance of team and players"}
              />
            ),
          },
          {
            backgroundColor: "#1f1a30",
            image: (
              <View
                style={{ height: 400, width: 300 }}
                className="flex items-center justify-center"
              >
                <LottieView
                  source={require("../assets/animations/Animation - 1722213216109.json")}
                  autoPlay
                  loop
                  style={{ height: hp(50), width: wp(90) }}
                />
              </View>
            ),
            title: (
              // <CustomTitle
              //   text={"Team News & Informations"}
              //   color={"#f1f5f9"}
              // />
              <Slide3Text />
            ),
            subtitle: (
              <CustomSubTitle text={"check out all trending team news"} />
            ),
          },
        ]}
        transitionAnimationDuration={500}
        onDone={handleDone}
        onSkip={handleDone}
        nextLabel={<NextBtn />}
        skipLabel={<SkipBtn />}
      />
    </View>
  );
};

export default Onboardingscreen;
