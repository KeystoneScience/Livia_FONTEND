import React, { useEffect, useState, useRef } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import Header from "../../../components/Header";
import colors from "../../../config/colors";
import ChatFooter from "./ChatFooter";
import Message from "./Message";
import cache from "../../../utility/cache";
// import { useIsFocused } from "@react-navigation/native";
import i18n from "i18n-js";
var ws;

var lastTimeStamp = "";
var inChat = true;

export default function Room() {
  const [messages, setMessages] = useState([]);
  const [shareVisible, setShareVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const groupID = "HAHAHA"; //route.params.groupID;
  var scrollRef = useRef();
  const isFocused = false; //useIsFocused();

  async function storeLatestChat(chatID) {
    //   // cache.storeData(
    //   //   "LIVIA::" + route.params?.groupID + "::lastMessage",
    //   //   chatID
    //   // );
  }

  useEffect(() => {
    inChat = true;
    if (!ws || ws.readyState != WebSocket.OPEN) {
      ws = new WebSocket(
        "wss://fnom55ol37.execute-api.us-east-1.amazonaws.com/production?groupid=" +
          groupID
      );
    }
    setWebsocketStates();
  }, []);

  function setWebsocketStates() {
    ws.onopen = () => {
      console.log("CONNECTED");
      inChat = true;
    };

    ws.onmessage = (e) => {
      // a message was received
      if (e.data.includes("{")) {
        const jsonObj = JSON.parse(e.data.replace(/\'/g, '"'));
        if (groupID === jsonObj.groupID) {
          storeLatestChat(jsonObj.Message + jsonObj.SenderID);
          if (jsonObj.Message + jsonObj.SenderID === lastTimeStamp) {
            lastTimeStamp = "";
          } else {
            setMessages((oldArray) => [...oldArray, jsonObj]);
          }
        }
      } else if (e.data.includes("Message Delivered")) {
      }
    };

    ws.onerror = (e) => {
      console.log(e);
    };

    ws.onclose = (e) => {
      console.log(e);
      if (isFocused && inChat) {
        ws = new WebSocket(
          "wss://fnom55ol37.execute-api.us-east-1.amazonaws.com/production?groupid=" +
            groupID
        );
        setWebsocketStates();
      }
    };
  }

  function toUnicode(str) {
    return str
      .split("")
      .map(function (value, index, array) {
        var temp = value.charCodeAt(0).toString(16).toUpperCase();
        if (temp.length > 2) {
          return "\\u" + temp;
        }
        return value;
      })
      .join("");
  }

  function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi, function (match) {
      return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
    });
  }

  return (
    <KeyboardAvoidingView
      style={{
        display: "flex",
        backgroundColor: colors.background,
        height: "100%",
        position: "relative",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header
        backVisible={true}
        groupInfoVisble={true}
        onGroupInfoPress={() => {
          setShareVisible(true);
        }}
        onBackPress={() => {
          inChat = false;
          ws.close();
          // navigation.navigate("Swipe");
        }}
      />
      <ScrollView
        ref={scrollRef}
        onContentSizeChange={() => {
          if (scrollRef.current) {
            scrollRef.current.scrollToEnd({ animated: false });
          }
        }}
        keyboardDismissMode="interactive"
        style={{ overflow: "visible" }}
      >
        {messages.map((message, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {}}
            style={{ width: "100%" }}
          >
            <Message
              picture="https://media-exp1.licdn.com/dms/image/C5603AQGG6ldcC3m5Aw/profile-displayphoto-shrink_400_400/0/1602037994612?e=1626307200&v=beta&t=4IIJx0vEdAbpNrskW6Ad5TKuhJSdfsQtQjQG6iQT6YM"
              username={unicodeToChar(message.SenderID)}
              message={unicodeToChar(message.Message)}
            />
          </TouchableOpacity>
        ))}
        <View style={{ padding: 10 }}></View>
      </ScrollView>
      <View
        style={{
          bottom: 0,
        }}
      >
        <ChatFooter
          onSend={async (message) => {
            if (ws.readyState == WebSocket.OPEN) {
              const screenName = await cache.getData(
                "FLIXPIX::SCREENNAME",
                false
              );
              const messagePackage = {
                Msg: toUnicode(message),
                SenderID: toUnicode(screenName),
                ReceiverID: groupID,
                action: "sendmsg",
              };
              lastTimeStamp = messagePackage.Msg + messagePackage.SenderID;
              ws.send(JSON.stringify(messagePackage)); // send a message
              setMessages((oldArray) => [
                ...oldArray,
                {
                  Message: toUnicode(message),
                  SenderID: toUnicode(screenName),
                  timestamp: Date.now(),
                },
              ]);
            }
          }}
          onInteract={() => {
            scrollRef.current.scrollToEnd({ animated: true });
          }}
          onfocus={() => {
            scrollRef.current.scrollToEnd({ animated: true });
          }}
        />
        <View
          style={{ backgroundColor: colors.fg06, width: "100%", height: 5 }}
        ></View>
      </View>
    </KeyboardAvoidingView>
  );
}
