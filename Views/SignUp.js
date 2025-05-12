import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import "../global.css";
import Button from "../Components/Login/Button";
import Input from "../Components/Login/Input";

export default function SignUp() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex flex-col items-center justify-center">
        <Text className="text-4xl font-bold text-center mt-8 text-principal">
          Sign Up To Get Started
        </Text>
        <Input label="Name" placeholder="-------" />
        <Input label="Email Address" placeholder="Example@gmail.com" />
        <View className="flex flex-col items-center mt-9">
          <Button Tag="Sign Up" />
          <Text className="text-lg text-center mx-4 mt-12 text-segundario">
            Have an acoount? <Text className="font-bold">Sign In</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
