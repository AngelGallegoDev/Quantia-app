import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import "react-native-reanimated";
import "../global.css";
import Button from "../Components/Login/Button";
import Input from "../Components/Login/Input";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiView } from "moti";

export default function Login() {
  // Navegaciones/rutas
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  const handleRecoveryPW = () => {
    navigation.navigate("RecoveryPW");
  };

  return (
    <SafeAreaView className="flex-1">
      {/* Control del teclado  */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 items-center justify-center bg-[#ECF0F3] h-screen">
          <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 1500 }}
            className="justify-center items-center"
          >
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text className="text-4xl font-bold text-center mt-8 text-principal">
              Welcome To Quantia
            </Text>
            <Text className="text-lg text-center mx-4 mt-6 text-segundario">
              Your smart way to track expenses and income. Start organizing your
              finances today.
            </Text>
          </MotiView>
          <MotiView
            from={{ opacity: 0, translateY: -20}}
            animate={{ opacity: 1, translateY: 0}}
            transition={{ type: "timing", duration: 1350 }}
            className="justify-center items-center"
          >
            <Input label="Email Address" placeholder="Example@gmail.com" />
            <Input
              label="Password"
              placeholder="*******************"
              link="Forgot your password?"
              link_funcion={handleRecoveryPW}
            />
            <View className="flex flex-col items-center mt-9">
              <Button Tag="Login" type="btn" funcion={handleLogin} />
              <View className="flex-row mt-9 mb-5">
                <View style={styles.linea}></View>
                <Text className="text-gray-400">O</Text>
                <View style={styles.linea}></View>
              </View>
              <Button Tag="Sign Up" type="btn" funcion={handleSignUp} />
              <Text className="text-lg text-center mx-4 mt-12 text-segundario">
                Having trouble? Contact support
              </Text>
            </View>
          </MotiView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
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
