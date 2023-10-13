import React, { useContext, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import {
  CheckBox,
  Input,
  Switch,
  Text,
  Divider,
  Icon,
  Slider,
} from "@rneui/themed";
import axios from "axios";
import { colorPalette, styles } from "../Style";
import { CategoryContext, TopicContext, ApikeyContext } from "../Context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Topic() {
  const [topics, setTopics] = useState([]);
  const [showTopics, setShowTopics] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const { category } = useContext(CategoryContext);
  const { topic, setTopic } = useContext(TopicContext);
  const [value, setValue] = useState(0.7);
  const translateY = useSharedValue(500);

  useEffect(() => {
    if (showTopics) {
      translateY.value = withSpring(0);
    } else {
      translateY.value = withSpring(-50);
    }
  }, [showTopics, topics]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  React.useEffect(() => {
    setTopic(selectedTopic);
  }, [selectedTopic]);
  const toggleTopics = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowTopics(!showTopics);
  };



const createTopic = async () => {

  const prompt = `Generate a YouTube video topic idea in  ${category} category: [Generated topic idea, max characters=50]`;

  const response = await axios.post(
'https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=AIzaSyBEu13nMBwpTnJzEuijDBG7G2suBuIrifg',

    {
      prompt: {text:prompt},
      max_output_tokens: 50,
      temperature: value,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );


  return response.data.candidates[0].output.replace(/["*]/g, "");

};
  const addNewTopic = async () => {
    try {
      const newTopic = await createTopic();
      setTopics([...topics, newTopic]);
      setSelectedTopic(newTopic);
    } catch (error) {
      console.error("Error generating topic:", error.message);
      alert(`Error generating new topic: ${error.message}`);
    }
  };

  return (
    <View style={styles.cardG}>
      <View style={styles.titleContainer}>
        <Text style={styles.h1B}>Generate YouTube Topics</Text>
        <Switch
          value={showTopics}
          onValueChange={toggleTopics}
          thumbColor={colorPalette.purple}
          trackColor={{ false: colorPalette.greenD, true: colorPalette.purple }}
        />
      </View>
      {showTopics && (
        <Animated.View style={animatedStyles}>
          <View style={styles.topicContainerG}>
            <Divider width={20} />
            <View style={styles.checkBoxCon}>
              {topics.map((topic, index) => (
                <CheckBox
                  key={index}
                  title={topic}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={selectedTopic === topic}
                  onPress={() => setSelectedTopic(topic)}
                  containerStyle={styles.checkBox}
                  textStyle={styles.text}
                  checkedColor={colorPalette.green}
                />
              ))}
            </View>
            <View style={{ width: "100%" }}>
              <Slider
                value={value}
                onValueChange={(val) => setValue(Math.round(val * 10) / 10)}
                maximumValue={1}
                minimumValue={0}
                step={0.1}
                allowTouchTrack
                minimumTrackTintColor={colorPalette.purple}
                maximumTrackTintColor={colorPalette.white}
                trackStyle={{
                  height: 20,
                  borderRadius: 30,
                }}
                thumbStyle={{
                  height: 25,
                  width: 25,
                  backgroundColor: colorPalette.black,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={addNewTopic}
              style={{ borderRadius: 50 }}
            >
              <Icon
                name="auto-awesome"
                type="material-icons"
                color={colorPalette.white}
                style={styles.button}
              />
            </TouchableOpacity>
            <Input
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={styles.input}
              inputStyle={styles.text}
              placeholder="Enter topic here"
              onChangeText={(topic) => setSelectedTopic(topic)}
              value={topic}
            />
          </View>
        </Animated.View>
      )}
    </View>
  );
}
