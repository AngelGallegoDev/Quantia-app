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

export default function Settings() {
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
     
        {/* footer */}
        <Footer location="settings"/>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
});
