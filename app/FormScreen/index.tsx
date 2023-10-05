import React, { useEffect } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { colorPalette, styles } from "../Style";
import Topics from "./Topics";
import Category from "./Category";
import Key from "./KeyIdeas";
import { Icon } from "@rneui/themed";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Form({ navigation }) {
  const translateX = useSharedValue(300);

  useEffect(() => {
    translateX.value = withSpring(0);
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <ScrollView style={styles.view}>
      <Animated.View style={animatedStyles}>
        <Category />
        <Topics />
        <Key />
        <TouchableOpacity
          onPress={() => navigation.navigate("Calculate")}
          style={{
            margin: 20,
            backgroundColor: colorPalette.black,
            borderRadius: 50,
          }}
        >
          <Icon
            name="next-plan"
            type="material-icons"
            color={colorPalette.white}
            size={50}
          />
        </TouchableOpacity>
        <View style={{ height: 200 }} />
      </Animated.View>
    </ScrollView>
  );
}
