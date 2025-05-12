import "../../global.css";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  Keyboard,
} from "react-native";

export default function Input({ label, placeholder, link, link_funcion }) {
  return (
    <View className="flex flex-col mt-4">
      {label && (
        <Text className="font-bold text-center text-principal mt-3">
          {label}
        </Text>
      )}
      <TextInput
        secureTextEntry={label.toLowerCase() === "password" ? true : false}
        onSubmitEditing={Keyboard.dismiss}
        className="border border-gray-300 rounded-lg h-14 mt-3 w-input text-center bg-white text-segundario"
        placeholder={placeholder}
      />
      {link && (
        <Pressable onPress={() => {link_funcion && link_funcion()}} className="mt-1 self-end">
          <Text className="font-bold text-xs text-segundario">
            {link}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
