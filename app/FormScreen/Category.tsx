import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { Input, Text, Divider } from "@rneui/themed";
import { styles } from "../Style";
import { CategoryContext } from "../Context";

export default function Category() {
  const { category, setCategory } = useContext(CategoryContext);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const categoryPrompt = `Youtube Channel Category: ${inputValue}`;
    setCategory(categoryPrompt);
  }, [inputValue]);

  return (
    <View style={styles.cardG}>
      <View style={{ padding: 15, alignItems: "center" }}>
        <Text style={styles.h1B}>Category</Text>
      </View>

      <View style={styles.topicContainerG}>
        <Divider width={20} />
        <Input
          textAlign="center"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={styles.input}
          inputStyle={styles.text}
          placeholder="Enter Category here"
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
      </View>
    </View>
  );
}
