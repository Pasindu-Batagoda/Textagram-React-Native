import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./Styles";

//Single chat view component
export default function ChatRoomItem({ chatRoom }) {
  //const chatRoom = props.chatRoom; (ES6 destructuring)
  //const {chatRoom} = props; (destructure further)

  //<Image> represent chat list profile image
  //view for message counter badge
  //everything within return is JSX
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onPress = () => {
    //Navigating to chatRoomScreen and sending ChatRoom ID to ChatRoomScreen
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      {/* Message badge only dispayed if there are messages.
      AND condition used */}
      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
