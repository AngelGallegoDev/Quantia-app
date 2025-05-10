import "../global.css";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function Home() {
  return (
    <View className="flex flex-col items-center justify-start min-h-screen py-2">
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 334, height: 100, marginTop: 83 }}
      />
      <Text
        className="text-4xl  font-bold text-center mt-5"
        style={{ color: "#2C3E50" }}
      >
        Welcome To Quantia
      </Text>
      <Text
        className="text-lg text-center mx-4 mt-6"
        style={{ color: "#515151" }}
      >
        Your smart way to track expenses and income. Start organizing your
        finances today.
      </Text>
      <View className="flex flex-col items-center mt-12">
        <Text
          className="font-bold"
          style={{ color: "#2C3E50                                " }}
        >
          Email Address
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-lg mt-3 w-80 text-center bg-white"
          placeholder="Example@gmail.com"
        />
      </View>
      <View className="flex flex-col items-center mt-8">
        <Text
          className="font-bold"
          style={{ color: "#2C3E50 " }}
        >
          Password
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-lg mt-3 w-80 text-center bg-white"
          placeholder="*****************"
        />
      </View>
      <Text className="mt-4 text-lg mx-5">
        Mi queridisimo angel tienes que crear archivos tsx e importar el
        ../global.css :)
      </Text>
    </View>
  );
}
