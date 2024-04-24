import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "./src/components/Button";
import { Input } from "./src/components/TextInput";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [textButton, setTextButton] = useState("");

  return (
    <View style={styles.container}>
      {/* <Input /> */}
      <View
        style={{
          width: "100%",
        }}
      >
        <Input
          backgroundColor="blue"
          marginHorizontal={32}
          placeholder="Digite alguma coisa"
          textColor="white"
          placeholderTextColor="white"
          padding={24}
          border={16}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <Button
        backgroundColor="aqua"
        borderRadius={16}
        marginLeft={32}
        marginRight={32}
        marginTop={32}
        padding={16}
        textButton="Clique aqui"
        onPress={() => console.log(text)}
      />
      <StatusBar style="auto" />

      <Text
        style={{
          marginTop: 32,
          fontSize: 32,
        }}
      >
        Olá
        {text}
      </Text>

      <Text
        style={{
          marginTop: 32,
          fontSize: 32,
        }}
      >
        {textButton}
      </Text>

      <Button
        backgroundColor="green"
        borderRadius={8}
        marginLeft={32}
        marginRight={32}
        marginTop={32}
        padding={30}
        textButton="Salvar"
        onPress={() => console.log(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
