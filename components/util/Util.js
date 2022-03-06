import { Platform } from "react-native";

export const isAndroid = () => {
  if(Platform.OS === "android") {
    return true
  } 
  else return false 
}
