import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Text, Slider, Icon } from "@rneui/themed";
import { colorPalette, styles } from "../Style";
import { RandomnessContext } from "../Context";

export default function Randomness() {
  const [value, setValue] = useState(0.7);
  const { randomness, setRandomness } = useContext(RandomnessContext);
  React.useEffect(() => {
    setRandomness(value);
  }, [value]);
  return (
    <View style={styles.cardY}>
      <View style={{ padding: 15, alignItems: "center" }}>
        <Text style={styles.h1B}>Randomness</Text>
      </View>
      <View style={styles.topicContainerY}>
        <View style={[styles.contentView]}>
          <Slider
            value={value}
            onValueChange={(val) => setValue(Math.round(val * 10) / 10)}
            maximumValue={1}
            minimumValue={0}
            step={0.1}
            allowTouchTrack
            minimumTrackTintColor={colorPalette.red}
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
          <Text style={styles.text}>{value}</Text>
        </View>
      </View>
    </View>
  );
}
