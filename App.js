import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { React, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setBackgroundColorAsync } from "expo-system-ui";
import "./global.css";
import Login from "./Views/Login";
import RecoveryPW from "./Views/RecoveryPW";
import SignUp from "./Views/SignUp";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    setBackgroundColorAsync("#ECF0F3"); // tu color de fondo
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.body}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="RecoveryPW" component={RecoveryPW} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ECF0F3",
  },
});
