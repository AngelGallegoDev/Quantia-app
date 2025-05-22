import "../../global.css";
import {
  Text,
  View,
  TextInput,
  Keyboard,
} from "react-native";

export default function Input({ label, placeholder }) {
  return (
    <View className="flex flex-col mt-4">
        <Text className="font-bold text-center text-white">
          {label}
        </Text>
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        className="rounded-lg h-14 mt-1 text-center bg-white text-segundario rounded-full mx-3"
        placeholder={placeholder}
      />
    </View>
  );
}
