import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  ScriptContext,
  CategoryContext,
  CommentContext,
  RandomnessContext,
  KeysContext,
  TopicContext,
  MaxTokensContext,
  ApikeyContext,
} from "../Context";
import { styles, colorPalette } from "../Style";
import Randomness from "./Randomness";
import Comment from "./Comment";
import MaxTokens from "./MaxTokens";
import { Icon, darkColors } from "@rneui/themed";
import axios from "axios";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Calculate({ navigation }) {
  const { setScript } = useContext(ScriptContext);
  const { keys } = useContext(KeysContext);
  const { comment } = useContext(CommentContext);
  const { topic } = useContext(TopicContext);
  const { category } = useContext(CategoryContext);
  const { randomness } = useContext(RandomnessContext);
  const { maxtokens } = useContext(MaxTokensContext);
  const translateX = useSharedValue(300);

  useEffect(() => {
    translateX.value = withSpring(0);
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const createScript = async () => {
    if (category.length < 1) {
      throw new Error("Invalid category");
    }
    if (topic.length < 1) {
      throw new Error("Invalid topic");
    }

    const prompt = `
    ${category}
    Video topic: ${topic}
    Key ideas to use inside of video: ${keys}
    
    ${comment}
  
    Generate a YouTube video script with provided information : [Generated script idea, max characters=${maxtokens}]`;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=AIzaSyBEu13nMBwpTnJzEuijDBG7G2suBuIrifg",

      {
        prompt: { text: prompt },
        max_output_tokens: maxtokens,
        temperature: randomness,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data.candidates[0].output.replace(/["*]/g, "");
  };

  const [isLoading, setIsLoading] = useState(false);

  const addNewScript = async () => {
    setIsLoading(true);
    try {
      const newScript = await createScript();
      setScript(newScript);
      navigation.navigate("Script");
    } catch (error) {
      console.error("Error generating script:", error.message);
      alert(`Error generating new script: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.view}>
      <Animated.View style={animatedStyles}>
        <Randomness />
        <Comment />
        <MaxTokens />
        <TouchableOpacity
          onPress={addNewScript}
          style={{
            margin: 20,
            backgroundColor: colorPalette.black,
            borderRadius: 50,
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={colorPalette.white} />
          ) : (
            <Icon
              name="next-plan"
              type="material-icons"
              color={colorPalette.white}
              size={50}
            />
          )}
        </TouchableOpacity>
        <View style={{ height: 200 }} />
      </Animated.View>
    </ScrollView>
  );
}
