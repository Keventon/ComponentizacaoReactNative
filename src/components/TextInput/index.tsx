import { TextInput, View } from "react-native";
import { InputProps } from "./input";
import { styles } from "./styles";

export function Input({
  backgroundColor,
  marginHorizontal,
  placeholder,
  textColor,
  padding,
  border,
  ...rest
}: InputProps) {
  return (
    <View style={{ width: "100%", justifyContent: "center" }}>
      <TextInput
        placeholder={placeholder}
        style={{
          textAlign: "right",
          backgroundColor: backgroundColor,
          marginHorizontal: marginHorizontal,
          color: textColor,
          padding: padding,
          borderRadius: border,
        }}
        {...rest}
      />
    </View>
  );
}
