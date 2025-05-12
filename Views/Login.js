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

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex flex-col items-center justify-center">
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text className="text-4xl font-bold text-center mt-8 text-principal">
          Welcome To Quantia
        </Text>
        <Text className="text-lg text-center mx-4 mt-6 text-segundario">
          Your smart way to track expenses and income. Start organizing your
          finances today.
        </Text>
        <Input label="Email Address" placeholder="Example@gmail.com" />
        <Input label="Password" placeholder="*******************" />
        <View className="flex flex-col items-center mt-9">
          <Button Tag="Login" />
          <View className="flex-row my-8">
            <View style={styles.linea}></View>
            <Text className="text-gray-400">O</Text>
            <View style={styles.linea}></View>
          </View>
          <Button Tag="Sign Up" />
          <Text className="text-lg text-center mx-4 mt-12 text-segundario">
            Having trouble? Contact support
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 334,
    height: 100,
  },
  linea: {
    width: 150,
    backgroundColor: "rgb(156, 163, 175)",
    height: 1,
    alignSelf: "center",
    marginHorizontal: 12,
  },
});
