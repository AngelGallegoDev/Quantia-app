import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import "../global.css";
import Button from "../Components/Login/Button";
import Input from "../Components/Login/Input";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 items-center justify-center bg-[#ECF0F3]">
        <Text className="text-4xl font-bold text-center mt-8 text-principal">
          Sign Up To Get Started
        </Text>
        <View className="justify-center items-center mt-5 mb-8">
          <Input label="Name" placeholder="-------" />
          <Input label="Email Address" placeholder="Example@gmail.com" />
        </View>
          <Button Tag="Sign Up" type="btn" />
        <View className="mt-6 flex flex-row items-center justify-center">
          <Text className="text-lg text-segundario">Have an account?</Text>
          <Pressable onPress={handleLogin}>
            <Text className="font-bold ml-1">Sign In</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
