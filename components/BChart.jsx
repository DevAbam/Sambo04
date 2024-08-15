import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

const BChart = () => {
  const barData = [
    { value: 250, label: "Jan" },
    { value: 500, label: "Feb", frontColor: "#177AD5" },
    { value: 745, label: "Mar", frontColor: "#177AD5" },
    { value: 320, label: "Apr" },
    { value: 600, label: "May", frontColor: "#177AD5" },
    { value: 256, label: "Jun" },
    { value: 300, label: "Jul" },
    { value: 600, label: "Aug", frontColor: "#177AD5" },
    { value: 256, label: "Sep" },
    { value: 300, label: "Oct" },
    { value: 250, label: "Nov" },
    { value: 500, label: "Dec", frontColor: "#177AD5" },
  ];

  const barData2 = [
    { value: 250, label: "Jan" },
    { value: 500, label: "Feb", frontColor: "#177AD5" },
    { value: 745, label: "Mar", frontColor: "#177AD5" },
  ];
  return (
    <BarChart
      isAnimated
      animateOnDataChange
      animationDuration={2000}
      onDataChangeAnimationDuration={300}
      hideRules
      rulesType="solid"
      barWidth={22}
      noOfSections={3}
      barBorderRadius={4}
      frontColor="lightgray"
      data={barData}
      lineData2={barData2}
      yAxisThickness={0}
      xAxisThickness={0}
      yAxisTextStyle={{ color: "#fff5ff", fontFamily: "poppins" }}
      xAxisLabelTextStyle={{ color: "#fff5ff", fontFamily: "poppins" }}
    />
  );
};

export default BChart;

const styles = StyleSheet.create({});
