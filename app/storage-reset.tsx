import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // handle error
    console.error(e);
  }

  console.log("Local storage is cleared!");
};
