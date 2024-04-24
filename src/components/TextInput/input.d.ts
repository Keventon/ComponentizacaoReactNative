import { TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  placeholder: string;
  marginHorizontal: number;
  backgroundColor: string;
  textColor: string;
  padding: number;
  border: number;
};
