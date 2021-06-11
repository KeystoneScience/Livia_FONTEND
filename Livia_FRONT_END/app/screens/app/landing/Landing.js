import React from "react";
import { ScrollView, View } from "react-native";
import SegmentedControl from "@react-native-community/segmented-control";
import colors from "../../../config/colors";
import i18n from "i18n-js";
import Header from "../../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import Card from "./Card";
import Auth from "../auth/Auth";

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
      <Auth />
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
                "https://media-exp3.licdn.com/dms/image/C5603AQEUDjnt1rKu6w/profile-displayphoto-shrink_400_400/0/1583731966978?e=1628726400&v=beta&t=jgpZ6xjV541vSNzO4yx0OJ_g7Vuo18H9Do2NZvT2beQ",
                "https://media-exp3.licdn.com/dms/image/C4E03AQGPWYc9UEBVZw/profile-displayphoto-shrink_400_400/0/1613531143361?e=1628726400&v=beta&t=UyFBtQSpj2tWfqYL4P8vBZzphm8of0v26s1-58RSIUY",
                "https://scontent-den4-1.xx.fbcdn.net/v/t1.6435-1/p480x480/50155029_2111599115554156_3268810862076362752_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=oLgl_i5UrPoAX-CZyO-&_nc_ht=scontent-den4-1.xx&tp=6&oh=47a3791b0800a452472e1a66eda47eca&oe=60C7B3D7",
                "https://media-exp3.licdn.com/dms/image/C5635AQE5CbKsR4rAFg/profile-framedphoto-shrink_800_800/0/1615460226167?e=1623488400&v=beta&t=rHB7k28MqEx9RSuSFrB18pr_OAwtb70FUddzkNn4_P0",
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
