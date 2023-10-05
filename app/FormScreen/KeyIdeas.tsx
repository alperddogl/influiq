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
import {
  CategoryContext,
  TopicContext,
  KeysContext,
  ApikeyContext,
} from "../Context";
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
const MAX_TOKENS = 100;

export default function Key() {
  const [showKeys, setShowKeys] = useState(false);
  const { category } = useContext(CategoryContext);
  const { topic } = useContext(TopicContext);
  const [unselectedKeys, setUnselectedKeys] = useState([]);
  const [inputKey, setInputKey] = useState("");
  const { apikey } = useContext(ApikeyContext);
  const [value, setValue] = useState(1);
  const translateY = useSharedValue(500);

  useEffect(() => {
    if (showKeys) {
      translateY.value = withSpring(0);
    } else {
      translateY.value = withSpring(-50);
    }
  }, [showKeys]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const { keys, setKeys } = useContext(KeysContext);

  const toggleKeys = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowKeys(!showKeys);
  };
  const createKey = async () => {
    if (category.length < 1 || category.length > MAX_TOKENS) {
      throw new Error("Invalid category");
    }
    if (topic.length < 1) {
      throw new Error("Invalid topic");
    }

    const prompt = `
    category:${category}
    topic: ${topic}
    Generate a key point to use inside of the video with provided information : [Generated Key point, max characters=50]`;

    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: MAX_TOKENS,
        temperature: value,
      },
      {
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data.choices[0].text.trim().replace(/"/g, "");
  };

  const addNewKey = async () => {
    try {
      const newKey = await createKey();
      setUnselectedKeys([...unselectedKeys, { key: newKey, selected: false }]); // Add newKey to unselectedKeys
    } catch (error) {
      console.error("Error generating Key:", error.message);
      alert(`Error generating new Key: ${error.message}`);
    }
  };

  useEffect(() => {
    setKeys(
      unselectedKeys.filter(({ selected }) => selected).map(({ key }) => key),
    );
  }, [unselectedKeys]);

  return (
    <View style={styles.cardG}>
      <View style={styles.titleContainer}>
        <Text style={styles.h1B}>Generate Key Ideas</Text>
        <Switch
          value={showKeys}
          onValueChange={toggleKeys}
          thumbColor={colorPalette.purple}
          trackColor={{ false: colorPalette.greenD, true: colorPalette.purple }}
        />
      </View>
      {showKeys && (
        <Animated.View style={animatedStyles}>
          <View style={styles.topicContainerG}>
            <Divider width={20} />
            <View style={styles.checkBoxCon}>
              {unselectedKeys.map(({ key, selected }, index) => (
                <CheckBox
                  key={index}
                  title={key}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={selected}
                  onPress={() => {
                    setUnselectedKeys((prevKeys) =>
                      prevKeys.map((item, idx) =>
                        idx === index
                          ? { ...item, selected: !item.selected }
                          : item,
                      ),
                    );
                  }}
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
                maximumValue={1.5}
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
            <TouchableOpacity onPress={addNewKey} style={{ borderRadius: 50 }}>
              <Icon
                name="auto-awesome"
                type="material-icons"
                color={colorPalette.white}
                style={styles.button}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                height: 46,
                paddingHorizontal: 25,
                alignItems: "center",
              }}
            >
              <Input
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={styles.input}
                inputStyle={styles.text}
                placeholder="Enter Key here"
                onChangeText={(text) => setInputKey(text)}
                value={inputKey}
              />
              <View style={{ width: 10 }} />
              <TouchableOpacity
                onPress={() => {
                  setUnselectedKeys((prevKeys) => [
                    ...prevKeys,
                    { key: inputKey, selected: false },
                  ]);
                  setInputKey("");
                }}
                style={{ borderRadius: 50 }}
              >
                <Icon
                  name="add"
                  type="material-icons"
                  color={colorPalette.black}
                  size={35}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  );
}
