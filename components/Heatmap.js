import React from "react";
import { View } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";

export default function Heatmap({ style, dateDetails, width, height }) {
  const getMonthLabel = (i) => {
    switch (i) {
      case 0:
        return "Jan";
      case 1:
        return "Feb";
      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "May";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
      default:
        return "Jun";
    }
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(127, 63, 152, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={{ ...style }}>
      <ContributionGraph
        values={dateDetails}
        horizontal={false}
        endDate={Date.now()}
        numDays={110}
        showMonthLabels
        width={width || "100%"}
        height={height || 300}
        getMonthLabel={getMonthLabel}
        chartConfig={chartConfig}
        onDayPress={(e) => console.log(e)}
      />
    </View>
  );
}
