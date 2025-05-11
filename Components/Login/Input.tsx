import "../../global.css";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  Keyboard,
} from "react-native";

export default function Input({ label, placeholder }) {
  return (
    <View className="flex flex-col mt-4">
      {label &&  <Text className="font-bold text-center text-principal mt-3">{label}</Text>}
      <TextInput
        secureTextEntry={label.toLowerCase() === "password" ? true : false}
        onSubmitEditing={Keyboard.dismiss}
        className="border border-gray-300 rounded-lg h-14 mt-3 w-input text-center bg-white text-segundario"
        placeholder={placeholder}
      />
      {label.toLowerCase() === "password" && (
        <View>
          <Text className="font-bold text-xs text-right mt-1 text-segundario">
            Forgot your password?
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "#2C3E50",
    padding: 15,
    width: 260,
    borderRadius: 50,
  },
});
