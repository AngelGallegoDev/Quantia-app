import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import "../global.css";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { PaperProvider } from "react-native-paper";
import ModalMovement from "../Components/Home/ModalMovement";
import ContainerMovements from "../Components/Home/ContainerMovements";
import BalanceOverview from "../Components/Home/BalanceOverview";
import { MotiView } from "moti";

export default function Home() {
  const navigation = useNavigation();

  // estado del modal
  const [modalVisible, setModalVisible] = useState(false);

  // accion para el estado del modal
  const handleMovement = () => {
    setModalVisible(true);
  };

  return (
    <PaperProvider>
      {/* modal */}
      <ModalMovement state={modalVisible} action={setModalVisible} />
      <SafeAreaView
        className="flex-1 bg-[#ECF0F3]"
        style={{ paddingBottom: 88 }}
      >
        {/* Header Home */}
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 1500 }}
          className="justify-center items-center"
        >
          <View className="flex-row mx-2 h-16">
            <View className="w-2/5 items-center justify-center h-16">
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </View>
            <View className="w-1/3 flex-row h-16 items-center justify-center">
              <Image
                source={require("../assets/icon-user.png")}
                style={styles.logo_user}
              />
              <Text className="text-xs mx-2 font-bold text-center text-principal">
                Pepito12345
              </Text>
            </View>
            <View className="w-1/12 mr-5 h-16 justify-center items-center">
              <Icon name="eye-off" size={24} color="#2C3E50" />
            </View>
            <View className="w-1/12 h-16 justify-center items-center">
              <Icon name="bell" size={24} color="#2C3E50" />
            </View>
          </View>
        </MotiView>

        {/* balance/gasto/ingreso */}
        <BalanceOverview />

        <MotiView
          from={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 1500 }}
          className="justify-center items-center flex"
        >
          {/* contenedor ultimos movimientos realizados por el usuario */}
          <ContainerMovements />
        </MotiView>
        <MotiView
          from={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 1650 }}
          className="justify-center items-center flex-1"
        >
          {/* boton de nuevo movimiento */}
          <View className="flex-1 items-center justify-center">
            <Pressable
              onPress={handleMovement}
              style={styles.btnNewMovement}
              className="flex flex-row justify-center items-center mb-5"
            >
              <Icon name="edit-2" size={17} color="#fff" />
              <Text className="text-white text-center text-base mx-4">
                New Movement
              </Text>
            </Pressable>
          </View>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 1750 }}
          className="justify-center items-center flex-1"
        >
          {/* boton de nuevo movimiento por voz */}
          <View className="flex-1 items-center justify-center">
            <Pressable
              onPress={handleMovement}
              style={styles.btnMic}
              className="flex flex-row justify-center items-center"
            >
              <Icon name="mic" size={50} color="#fff" />
            </Pressable>
          </View>
        </MotiView>

        {/* footer */}
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 1800 }}
          className="justify-center items-center absolute bottom-0 left-0 right-0"
        >
          <View className="absolute flex-row h-22 bottom-0 left-0 right-0 bg-[#2C3E50] items-center justify-center">
            <Pressable className="w-1/3 mb-2 h-20 items-center justify-center">
              <Icon name="home" size={30} color="#fff" />
            </Pressable>
            <Pressable className="w-1/3 mb-2 h-20 items-center justify-center">
              <Icon name="calendar" size={30} color="#fff" />
            </Pressable>
            <Pressable className="w-1/3 mb-2 h-20 items-center justify-center">
              <Icon name="settings" size={30} color="#fff" />
            </Pressable>
          </View>
        </MotiView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 125,
    height: 45,
  },
  logo_user: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#2C3E50",
  },
  btnNewMovement: {
    backgroundColor: "#2C3E50",
    padding: 15,
    width: 275,
    borderRadius: 15,
  },
  btnMic: {
    backgroundColor: "#2C3E50",
    width: 125,
    height: 125,
    borderRadius: 100,
  },
});
