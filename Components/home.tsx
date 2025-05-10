import "../global.css"
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex flex-col items-center justify-center min-h-screen py-2">
      <Text className="text-4xl font-bold">Welcome to Quantia</Text>
      <Text className="mt-4 text-lg mx-5">Mi queridisimo angel tienes que crear archivos tsx e importar el ../global.css :)</Text>
    </View>
  );
}