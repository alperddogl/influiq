import React, { useContext, useState, useEffect } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Linking
} from "react-native";

import { ApikeyContext, ScriptsContext } from "../Context";
import { colorPalette, styles } from "../Style";
import { Text, Input, Icon, Switch, Divider, Card } from "@rneui/themed";
import * as Clipboard from "expo-clipboard";
import { Button } from "@rneui/base";
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
export default function Library({ navigation }) {
  const { apikey, setApikey } = useContext(ApikeyContext);
  const { scripts, setScripts } = useContext(ScriptsContext);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(apikey);
  };
  const removeScript = (index) => {
    const newScripts = [...scripts];
    newScripts.splice(index, 1);
    setScripts(newScripts);
  };

  const [showTopics, setShowTopics] = useState(
    new Array(scripts.length).fill(false),
  );

  const toggleTopic = (index) => {
    const newShowTopics = [...showTopics];
    newShowTopics[index] = !newShowTopics[index];
    setShowTopics(newShowTopics);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  const translateY = useSharedValue(500);

  useEffect(() => {
    if (showTopics) {
      translateY.value = withSpring(0);
    } else {
      translateY.value = withSpring(-50);
    }
  }, [showTopics]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <ScrollView style={styles.view}>

      {scripts.map((script, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity
            style={{ margin: 10, alignItems: "center" }}
            onPress={() => toggleTopic(index)}
          >
            <Text style={styles.h1}>{script.substr(0, 30)}</Text>
          </TouchableOpacity>
          {showTopics[index] && (
            <Animated.View style={animatedStyles}>
              <View style={styles.topicContainer}>
                <Divider width={20} />
                <TouchableOpacity
                  onPress={copyToClipboard}
                  style={{
                    margin: 20,
                    backgroundColor: colorPalette.black,
                    borderRadius: 50,
                  }}
                >
                  <Icon
                    name="content-copy"
                    type="material-icons"
                    iconStyle={{ color: colorPalette.white, padding: 10 }}
                  />
                </TouchableOpacity>
                <Input
                  multiline={true}
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                  containerStyle={styles.inputMulti}
                  inputStyle={styles.text}
                  defaultValue={script}
                  editable={false}
                />
                <TouchableOpacity
                  onLongPress={() => removeScript(index)}
                  style={{
                    margin: 20,
                    backgroundColor: colorPalette.black,
                    borderRadius: 50,
                  }}
                >
                  <Icon
                    name="delete"
                    type="material-icons"
                    iconStyle={{ color: colorPalette.red, padding: 10 }}
                    borderRadius={50}
                  />
                </TouchableOpacity>
                <Text  style={{ fontWeight:"400", fontSize:14, marginLeft:10 }}>Hold to {'\n'}discard</Text>

              </View>
            </Animated.View>
          )}
        </View>
      ))}
      <TouchableOpacity
        onPress={() => navigation.navigate("Form")}
        style={{
          margin: 20,
          backgroundColor: colorPalette.black,
          borderRadius: 50,
        }}
      >
        <Icon
          name="add-circle"
          type="material-icons"
          color={colorPalette.white}
          size={50}
        />
      </TouchableOpacity>
      <View style={{ height: 200 }} />
      <TouchableOpacity onPress={() => Linking.openURL('http://devalper.com')}
 style={{ borderRadius:20,
      backgroundColor:colorPalette.blue,
      alignContent:"center",
      alignItems:"center",
      alignSelf:"center" }} >
      <Text style={{    fontSize: 20,
    fontWeight: "bold",    color: colorPalette.white, padding:10 }}>Made By Alper</Text>
</TouchableOpacity>
    </ScrollView>
  );
}
