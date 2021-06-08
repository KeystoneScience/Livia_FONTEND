import React from "react";
import { ScrollView, View } from "react-native";
import SegmentedControl from "@react-native-community/segmented-control";
import colors from "../../../config/colors";
import i18n from "i18n-js";
import Header from "../../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import Card from "./Card";

export default function ({ navigation, route }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [globalGroups, setGlobalGroups] = React.useState([]);
  const [followingGroups, setFollowingGroups] = React.useState([]);

  return (
    <View>
      <Header
        searchVisible={true}
        onSearchPress={() => {
          navigation.navigate("Search");
        }}
        userProfileVisible={true}
        userProfilePress={() => {
          navigation.navigate("Profile");
        }}
      />
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
        {selectedIndex == 0 && (
          <ScrollView style={{ height: "100%" }}>
            <Card
              profilePics={[
                "https://media-exp1.licdn.com/dms/image/C5603AQGG6ldcC3m5Aw/profile-displayphoto-shrink_800_800/0/1602037994612?e=1627516800&v=beta&t=zIABLUVXv0o9zrUXJEy3aQjvSyrWApKpvuSwRU17u2g",
                "https://media-exp1.licdn.com/dms/image/C5603AQFMw-EKLMHeCA/profile-displayphoto-shrink_800_800/0/1580601757924?e=1627516800&v=beta&t=co1NWbZvrz3DaG1eqW9GXA0tni8R9lOtKUM5gh3JtUs",
                "https://media-exp1.licdn.com/dms/image/C5603AQEzW6xEzxsbxw/profile-displayphoto-shrink_800_800/0/1598554057413?e=1627516800&v=beta&t=WmObrLKbGNGBaDVsjDw8myIZdEDx_EM7d_GywEqUPf0",
                "https://media-exp1.licdn.com/dms/image/C5635AQE5CbKsR4rAFg/profile-framedphoto-shrink_800_800/0/1615460226167?e=1621818000&v=beta&t=LaY2b85I8dZu-2NbiE9ZEFyJqIXb8Pf5Q_RUH0shgww",
                "Alex Stone",
                "John Man",
                "lol",
              ]}
              numUsers={5}
              groupName={"Example Group."}
              groupDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, niam, quis nostrud exercitation"
              }
              pressButton={() => {
                navigation.navigate("Room", {
                  roomID: "lolHAHA",
                  name: "Comedy Gold",
                });
              }}
            />
            <View style={{ padding: 30 }}></View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
