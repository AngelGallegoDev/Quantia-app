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
import { Checkbox } from "react-native-paper";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  
  // Control Politica de privacidad
  const [checked, setChecked] = useState(false);

  // navegacion/rutas
  const navigation = useNavigation();


  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
   <SafeAreaView className="flex-1">
    {/* Control del teclado  */}
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 items-center justify-center bg-[#ECF0F3] h-screen">
        <Image
          source={require("../assets/sign-icon.png")}
          style={styles.logo}
        />
        <Text className="text-4xl font-bold text-center mt-3 text-principal">
            Sign Up To Get Started
        </Text>
        <View className="justify-center items-center mt-2 mb-4">
          <Input label="Name" placeholder="-------" />
          <Input label="Email Address" placeholder="Example@gmail.com" />
        </View>
        <View className="flex flex-row items-center justify-center mb-3">
          <Text className="text-sm text-segundario">
            I agree to the <Text className="font-bold">Terms of Service</Text>{" "}
            and <Text className="font-bold">Privacy Policy</Text>
          </Text>
          <Checkbox.Android
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
            color="#007AFF"
          />
        </View>

        <Button Tag="Sign Up" type="btn" />
        <View className="mt-4 mb-4 flex flex-row items-center justify-center">
          <Text className="text-lg text-segundario">Have an account?</Text>
          <Pressable onPress={handleLogin}>
            <Text className="font-bold ml-1">Sign In</Text>
          </Pressable>
        </View>
        <Text className="text-lg text-center mx-4 mt-12 text-segundario">
          Having trouble? Contact support
        </Text>
      </View>
    </TouchableWithoutFeedback>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 282,
    height: 242,
  },
});
