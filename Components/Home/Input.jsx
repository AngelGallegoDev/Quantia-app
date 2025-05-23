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
        <Text className="font-bold text-center text-white mb-1">
          {label}
        </Text>
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        className="rounded-lg h-14 mt-1 text-center text-white rounded-full mx-3"
        placeholder={placeholder}
        placeholderTextColor={"#6B7280"}
       style={{ backgroundColor: '#34495E', borderColor: '#fff', borderWidth: 1 }}
      />
    </View>
  );
}
