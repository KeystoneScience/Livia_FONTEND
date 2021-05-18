import { t } from "i18n-js";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Header";
import colors from "../../config/colors";
import ChatFooter from "./ChatFooter";
import Message from "./Message";

var ws;
ws = new WebSocket(
  "wss://x644xbwb0d.execute-api.us-east-1.amazonaws.com/staging?userid=tony&groupid=wowThatsADog"
);
export default function Room({}) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    //const tempMessages = messages;
    //setMessages(tempMessages);
    if (true) {
      ws.onopen = () => {
        // connection opened
        //ws.send("something"); // send a message
        console.log("CONNECTED");
      };

      ws.onmessage = (e) => {
        // a message was received
        if (e.data.includes("{")) {
          console.log("DATA", e.data);
          const jsonObj = JSON.parse(e.data.replace(/\'/g, '"'));
          setMessages((oldArray) => [...oldArray, jsonObj]);
        } else if (e.data.includes("Message Delivered")) {
        }
      };

      ws.onerror = (e) => {
        // an error occurred
        console.log("ERROR", e.message);
      };

      ws.onclose = (e) => {
        // connection closed
        console.log("CLOSING");
        console.log(e.code, e.reason);
      };
    }
  }, []);
  return (
    <View
      style={{
        display: "flex",
        backgroundColor: colors.background,
        height: "100%",
        position: "relative",
      }}
    >
      <Header />
      <ScrollView>
        {messages.map((message, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {}}
            style={{ width: "100%" }}
          >
            <Message
              picture="https://media-exp1.licdn.com/dms/image/C5603AQGG6ldcC3m5Aw/profile-displayphoto-shrink_400_400/0/1602037994612?e=1626307200&v=beta&t=4IIJx0vEdAbpNrskW6Ad5TKuhJSdfsQtQjQG6iQT6YM"
              username={message.SenderID}
              message={message.Message}
            />
          </TouchableOpacity>
        ))}
        <View style={{ padding: 50 }}></View>
      </ScrollView>
      <View
        style={{
          bottom: 0,
          position: "absolute",
          width: "100%",
        }}
      >
        <ChatFooter
          onSend={(message) => {
            if (ws.readyState == WebSocket.OPEN) {
              console.log("lol ", message);
              const messagePackage = {
                Msg: message,
                ReceiverID: "jim",
                action: "sendmsg",
              };
              console.log(messagePackage);
              ws.send(JSON.stringify(messagePackage)); // send a message
            }
          }}
        />
      </View>
    </View>
  );
}
