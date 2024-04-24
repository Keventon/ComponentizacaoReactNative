import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  padding: number;
  borderRadius: number;
  backgroundColor: string;
  textButton: string;
};
