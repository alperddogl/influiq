import React, { useContext, useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { ScriptContext, ScriptsContext, TopicContext } from "../Context";
import { colorPalette, styles } from "../Style";
import { Text, Input, Icon, Dialog, CheckBox, Button } from "@rneui/themed";
import * as Clipboard from "expo-clipboard";

export default function Script({ navigation }) {
  const { script } = useContext(ScriptContext);
  const { scripts, setScripts } = useContext(ScriptsContext);
  const { topic } = useContext(TopicContext);
  const [visible5, setVisible5] = useState(false);
  const [checked, setChecked] = useState(1);
  const toggleDialog5 = () => {
    setVisible5(!visible5);
  };
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(script);
  };

  const addNewScript = async () => {
    setScripts([...scripts, topicNScript]);
    navigation.navigate("Library");
  };

  const topicNScript = `${topic}
  
  ${script}`;

  return (
    <View style={styles.viewT}>
      <ScrollView style={styles.viewG}>
        <View style={{ margin: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
                iconStyle={{ color: colorPalette.white }}
                style={{ margin: 20 }}
              />
              <Dialog
                isVisible={visible5}
                onBackdropPress={toggleDialog5}
                overlayStyle={styles.cardY}
              >
                <View style={{flexDirection:"row", }}>
                <TouchableOpacity
                  onLongPress={() => navigation.navigate("Library")}
                  style={{
                    backgroundColor: colorPalette.black,
                    borderRadius: 50,
                    alignSelf: "flex-start",
                  }}
                >
                  <Icon
                    name="delete"
                    type="material-icons"
                    iconStyle={{ color: colorPalette.red }}
                    style={{ margin: 5 }}
                  />
                </TouchableOpacity>
                <Text  style={{ fontWeight:"400", fontSize:14, marginLeft:10 }}>Hold to {'\n'}discard</Text>
                </View><View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <TouchableOpacity
                    onPress={addNewScript}
                    style={{
                      margin: 5,
                      backgroundColor: colorPalette.black,
                      borderRadius: 100,
                      alignSelf: "center",
                    }}
                  >
                    <Icon
                      name="save-alt"
                      type="material-icons"
                      iconStyle={{ color: colorPalette.white }}
                      style={{ margin: 50 }}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={toggleDialog5}
                  style={{
                    backgroundColor: colorPalette.black,
                    borderRadius: 50,
                    alignSelf: "flex-end",
                    marginTop: 20,
                  }}
                >
                  <Text
                    style={{
                      color: colorPalette.white,
                      margin: 5,
                      fontSize: 15,
                      fontWeight: "normal",
                    }}
                  >
                    CANCEL
                  </Text>
                </TouchableOpacity>
              </Dialog>
            </TouchableOpacity>
          </View>
          <Input
            multiline={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={styles.inputMulti}
            inputStyle={styles.text}
            defaultValue={script}
            editable={false}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={toggleDialog5}
              style={{
                margin: 20,
                backgroundColor: colorPalette.black,
                borderRadius: 50,
              }}
            >
              <Icon
                name="home"
                type="material-icons"
                iconStyle={{ color: colorPalette.white }}
                style={{ margin: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 200 }} />
      </ScrollView>
    </View>
  );
}
