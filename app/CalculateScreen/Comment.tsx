import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Text, Slider, Icon, Input } from "@rneui/themed";
import { colorPalette, styles } from "../Style";
import { CommentContext } from "../Context";

export default function Comment() {
  const { comment, setComment } = useContext(CommentContext);

  return (
    <View style={styles.cardY}>
      <View style={{ padding: 15, alignItems: "center" }}>
        <Text style={styles.h1B}>Additional Comments</Text>
      </View>
      <View style={styles.topicContainerY}>
        <View style={[styles.contentView]}>
          <Input
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={styles.input}
            inputStyle={styles.text}
            placeholder="Enter your additional comments here"
            onChangeText={(comment) => setComment(comment)}
            value={comment}
          />
        </View>
      </View>
    </View>
  );
}
