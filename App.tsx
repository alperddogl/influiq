import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./app/FormScreen";
import Calculate from "./app/CalculateScreen";
import Script from "./app/ScriptScreen";
import {
  CategoryProvider,
  KeysProvider,
  TopicProvider,
  RandomnessProvider,
  CommentProvider,
  ScriptProvider,
  MaxTokensProvider,
  ApikeyProvider,
  ScriptsProvider,
} from "./app/Context";
import Library from "./app/LibraryScreen";
import { colorPalette } from "./app/Style";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <CategoryProvider>
        <KeysProvider>
          <TopicProvider>
            <RandomnessProvider>
              <CommentProvider>
                <ScriptProvider>
                  <MaxTokensProvider>
                    <ApikeyProvider>
                      <ScriptsProvider>
                        <NavigationContainer>
                          <Stack.Navigator
                            screenOptions={{
                              headerTintColor: "white",
                              headerStyle: {
                                backgroundColor: colorPalette.black,
                              },
                              headerTitleAlign: "center",
                            }}
                          >
                            <Stack.Screen name="Library" component={Library} />
                            <Stack.Screen name="Form" component={Form} />
                            <Stack.Screen
                              name="Calculate"
                              component={Calculate}
                            />
                            <Stack.Screen name="Script" component={Script} />
                          </Stack.Navigator>
                        </NavigationContainer>
                      </ScriptsProvider>
                    </ApikeyProvider>
                  </MaxTokensProvider>
                </ScriptProvider>
              </CommentProvider>
            </RandomnessProvider>
          </TopicProvider>
        </KeysProvider>
      </CategoryProvider>
    </SafeAreaProvider>
  );
}

export default App;
