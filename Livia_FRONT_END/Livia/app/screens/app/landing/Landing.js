import React from "react";
import { View } from "react-native";
import SegmentedControl from "@react-native-community/segmented-control";
import colors from "../../../config/colors";
import i18n from "i18n-js";
import Header from "../../../components/Header";
import { Ionicons } from "@expo/vector-icons";

export default function () {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View>
      <Header />
      <View style={{ padding: 10, zIndex: 5 }}>
        <SegmentedControl
          values={["Global", "Friends"]}
          selectedIndex={selectedIndex}
          onChange={(event) => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
          }}
          activeFontStyle={{ color: colors.white }}
          fontStyle={{ color: colors.primaryText }}
          tintColor={colors.primary}
          backgroundColor={colors.fg06}
        />
      </View>
    </View>
  );
}
