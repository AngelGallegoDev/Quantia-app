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

export default function RecoveryPW() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 items-center justify-center bg-[#ECF0F3]">
        <Image
          source={require("../assets/passwordlogo.png")}
          style={styles.logo}
        />
        <Text className="text-4xl font-bold text-center mt-7 mb-3 text-principal">
          Password Recovery
        </Text>
        <Input label="" placeholder="Email Address" />

        <Text className="text-lg text-center mx-4 mt-3 text-segundario">
          We’ll send you a link to reset your password.
        </Text>
        <View className="mb-7 mt-11">
          <Button Tag="Send" type="btn" />
        </View>
        <Pressable onPress={handleBack} className="mt-1 self-center">
          <Text className="font-bold text-segundario">Go Back</Text>
        </Pressable>
        <Text className="text-lg text-center mx-4 mt-12 text-segundario">
          Having trouble? Contact support
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 282,
    height: 242,
  },
});
