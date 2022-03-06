import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const { wwidth, wheight } = Dimensions.get("window");


export default { width, height, wwidth, wheight };