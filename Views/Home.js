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
import { Shadow } from "react-native-shadow-2";
import Footer from "../Components/Globales/Footer";

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
          from={{ opacity: 0, elevation: 0 }}
          animate={{ opacity: 1, elevation: 20 }}
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
          className="justify-center items-center flex-1 mb-3"
        >
          {/* boton de nuevo movimiento */}
          <Shadow
            distance={5}
            startColor="rgba(0,0,0,0.25)"
            radius={15}
            offset={[0, 1]}
          >
            <Pressable
              onPress={handleMovement}
              style={styles.btnNewMovement}
              className="flex flex-row justify-center items-center "
            >
              <Icon name="edit-2" size={17} color="#fff" />
              <Text className="text-white text-center text-base mx-4">
                New Movement
              </Text>
            </Pressable>
          </Shadow>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 100, elevation: 0 }}
          animate={{ opacity: 1, translateY: 0, elevation: 30 }}
          transition={{ type: "timing", duration: 1750 }}
          className="justify-center items-center flex-1"
        >
          <Shadow
            distance={10}
            startColor="rgba(0,0,0,0.25)"
            radius={50}
            offset={[0, 4]}
          >
            {/* boton de nuevo movimiento por voz */}
            <Pressable
              onPress={handleMovement}
              style={styles.btnMic}
              className="flex flex-row justify-center items-center"
            >
              <Icon name="mic" size={50} color="#fff" />
            </Pressable>
          </Shadow>
        </MotiView>

        {/* footer */}
        <Footer location="home"/>
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
    paddingVertical: 15,
    width: 285,
    borderRadius: 15,
  },
  btnMic: {
    backgroundColor: "#2C3E50",
    width: 250,
    height: 125,
    borderRadius: 50,
  },
});
