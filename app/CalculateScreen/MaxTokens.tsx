import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Text, Slider, Icon } from "@rneui/themed";
import { colorPalette, styles } from "../Style";
import { MaxTokensContext } from "../Context";

export default function MaxTokens() {
  const [value, setValue] = useState(200);
  const { maxtokens, setMaxTokens } = useContext(MaxTokensContext);
  React.useEffect(() => {
    setMaxTokens(value);
  }, [value]);
  return (
    <View style={styles.cardY}>
      <View style={{ padding: 15, alignItems: "center" }}>
        <Text style={styles.h1B}>MaxTokens</Text>
      </View>
      <View style={styles.topicContainerY}>
        <View style={[styles.contentView]}>
          <Slider
            value={value}
            onValueChange={(val) => setValue(Math.round(val * 1) / 1)}
            maximumValue={1000}
            minimumValue={0}
            step={0.1}
            allowTouchTrack
            trackStyle={{
              height: 20,
              borderRadius: 30,
            }}
            minimumTrackTintColor={colorPalette.red}
            maximumTrackTintColor={colorPalette.white}
            thumbStyle={{
              height: 25,
              width: 25,
              backgroundColor: colorPalette.black,
            }}
          />
          <Text style={styles.text}>{value}</Text>
        </View>
      </View>
    </View>
  );
}
