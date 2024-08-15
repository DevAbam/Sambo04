import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-gifted-charts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LChart = () => {
  const data = [
    { value: 13, label: "Jan" },
    { value: 10, label: "Feb" },
    { value: 8, label: "Mar" },
    { value: 57, label: "Apr" },
    { value: 56, label: "May" },
    { value: 78, label: "Jun" },
    { value: 74, label: "Jul" },
    { value: 98, label: "Aug" },
    { value: 26, label: "Sep" },
    { value: 40, label: "Oct" },
    { value: 18, label: "Nov" },
    { value: 20, label: "Dec" },
  ];
  const lineData2 = [
    { value: 40, label: "Jan" },
    { value: 20, label: "Feb" },
    { value: 18, label: "Mar" },
    { value: 40, label: "Apr" },
    { value: 36, label: "May" },
    { value: 20, label: "Jun" },
    { value: 18, label: "Jul" },
    { value: 40, label: "Aug" },
    { value: 18, label: "Sep" },
    { value: 40, label: "Oct" },
    { value: 36, label: "Nov" },
    { value: 50, label: "Dec" },
  ];

  return (
    <LineChart
      maxValue={100}
      noOfVerticalLines={12}
      thickness={4}
      area
      data={data}
      data2={lineData2}
      height={hp(30)}
      color="blue"
      color2="orange"
      width={wp(83)}
      curved
      areaChart
      noOfSections={4}
      yAxisThickness={0}
      xAxisThickness={0}
      yAxisColor="white"
      xAxisColor="lightgray"
      yAxisTextStyle={{ color: "#fff5ff", fontFamily: "poppins" }}
      xAxisLabelTextStyle={{ color: "#fff5ff", fontFamily: "poppins" }}
      rulesType="solid"
      rulesColor="gray"
      startFillColor="skyblue"
      endFillColor="blue"
      startOpacity={0.8}
      endOpacity={0.1}
      hideDataPoints
      hideRules
      // hideYAxisText
      showVerticalLines
      verticalLinesColor={"#777a92"}
      startFillColor2="orange"
      isAnimated
      animateOnDataChange
      animationDuration={3000}
      onDataChangeAnimationDuration={300}
      pointerConfig={{
        pointerStripUptoDataPoint: true,
        pointerStripColor: "lightgray",
        pointerStripWidth: 2,
        strokeDashArray: [2, 5],
        radius: 4,
        pointerLabelWidth: 100,
        pointerLabelHeight: 120,
        activatePointersOnLongPress: true,
        activatePointersDelay: 150,
        pointerColor: "blue",
        pointer1Color: "orange",
        pointerLabelComponent: (items) => {
          return (
            <View
              style={{
                height: 120,
                width: 100,
                backgroundColor: "#282C3E",
                borderRadius: 4,
                justifyContent: "center",
                paddingLeft: 16,
              }}
            >
              <Text
                style={{ color: "lightgray", fontSize: 12 }}
                className="font-poppins"
              >
                {2018}
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {items[0].value}
              </Text>
              <Text
                style={{ color: "lightgray", fontSize: 12, marginTop: 12 }}
                className="font-poppins"
              >
                {2019}
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {items[1].value}
              </Text>
            </View>
          );
        },
      }}
    />
  );
};

export default LChart;

const styles = StyleSheet.create({});
