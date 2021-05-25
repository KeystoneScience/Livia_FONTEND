import React, { useRef } from "react";
import { View, Dimensions } from "react-native";
import YourInfo from "./YourInfo";
import Header from "../../../components/Header";
import { Modalize } from "react-native-modalize";
import colors from "../../../config/colors";
import EditProfile from "./EditProfile";

export default function () {
  const modalizeRef = useRef();
  return (
    <View style={{ flex: 1 }}>
      <Header backVisible={true} onBackPress={() => {}} />
      <YourInfo
        name="Nate Stone"
        username="nateasstone"
        bio="lol man"
        onChangePicture={() => modalizeRef.current.open()}
      />
      <Modalize
        modalHeight={Math.floor(Dimensions.get("screen").height * 0.8)}
        ref={modalizeRef}
        handlePosition="inside"
        modalStyle={{ backgroundColor: colors.fg06 }}
        childrenStyle={{
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          overflow: "hidden",
        }}
      >
        <EditProfile
          name="Nate Stone"
          username="nateasstone"
          bio="lol man"
          picture="https://media-exp1.licdn.com/dms/image/C5603AQGG6ldcC3m5Aw/profile-displayphoto-shrink_400_400/0/1602037994612?e=1626307200&v=beta&t=4IIJx0vEdAbpNrskW6Ad5TKuhJSdfsQtQjQG6iQT6YM"
        />
      </Modalize>
    </View>
  );
}
