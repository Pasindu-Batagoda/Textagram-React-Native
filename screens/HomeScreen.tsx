import * as React from "react";

import { Text, Image, View, StyleSheet, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";

import chatRoomsData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
  //FlatList implemented to display chatRoomItem components for each set of data in Array
  //FlatList smartly displays data in a scrollable list
  //data,renderItem are props passed for FlatList

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        //Remove scroll bar
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
