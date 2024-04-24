import { Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "./button";

export function Button({
  backgroundColor,
  borderRadius,
  marginLeft,
  marginRight,
  marginTop,
  padding,
  textButton,
  ...rest
}: ButtonProps) {
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          padding: padding,
          justifyContent: "center",
          alignItems: "center",
        }}
        {...rest}
      >
        <Text>{textButton}</Text>
      </TouchableOpacity>
    </View>
  );
}
