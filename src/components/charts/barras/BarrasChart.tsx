import React, { useState } from "react";
import { View, Text } from "react-native";
import { BarChart, Grid } from "react-native-svg-charts";
import { Text as SVGText } from "react-native-svg";
import { mainCcolors } from "../../../theme/styles";


interface BarrasChartProps {
  title: string
  alto: number
}

const BarrasChart = (props: BarrasChartProps) => {
  const labels = ["Coniferas", "Frutales", "Caducos", "Perennes"];
  const values = [50, 10, 40, 95];


  // Datos formateados para BarChart
  const data = values.map((value, index) => ({
    value,
    label: labels[index],
    svg: {
      fill: mainCcolors.primary,
      onPress: (a:any,b:any) => {
        console.log(a, b)
      },
    },
  }));

  // Render de labels abajo
  const LabelsBelow = ({ x, y, bandwidth }: any) =>
    labels.map((label, index) => (
      <SVGText
        key={index}
        x={x(index) + bandwidth / 2}
        y={y(0) + 15}
        fontSize="12"
        fill="#444"
        alignmentBaseline="hanging"
        textAnchor="middle"
      >
        {label}
      </SVGText>
    ));

  // Labels arriba de la barra
  const LabelsAbove = ({ x, y, bandwidth }: any) =>
    values.map((value, index) => (
      <SVGText
        key={index}
        x={x(index) + bandwidth / 2}
        y={y(value) - 10}
        fontSize="12"
        fill={mainCcolors.primary}
        fontWeight="bold"
        textAnchor="middle"
      >
        {value}
      </SVGText>
    ));

  return (
    <View style={{ padding: 20, borderWidth: 1, borderColor:mainCcolors.primaryLight, borderRadius:10 }}>
      <View>
        <Text> {props?.title} </Text>
        <BarChart
          style={{ height: props?.alto || 250 }}
          data={data}
          yAccessor={({ item }) => item.value}
          contentInset={{ top: 30, bottom: 30 }}
          spacingInner={0.3}
          gridMin={0}
        >
          <Grid />
          <LabelsBelow />
          <LabelsAbove />
        </BarChart>
      </View>
    </View>
  );
};

export default BarrasChart;
