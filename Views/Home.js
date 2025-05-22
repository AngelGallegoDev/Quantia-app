import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import "../global.css";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import MovementRow from "../Components/Home/MovementRow";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Modal, PaperProvider, Portal, TextInput } from "react-native-paper";
import Input from "../Components/Home/Input";
import Select from "../Components/Home/Select";
import DateSelect from "../Components/Home/DateSelect";

export default function Home() {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;

  const [modalVisible, setModalVisible] = useState(false);

  const handleMovement = () => {
    setModalVisible(true);
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={modalVisible}
          contentContainerStyle={{
            height: screenHeight * 1.02, // por ejemplo 70% de la pantalla
            justifyContent: "flex-start",
          }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="h-screen">
              <View style={styles.modal}>
                <Text className="text-xl font-bold mt-2 text-black text-principal">
                  New Movement
                </Text>
                <View className="flex-row mb-3">
                  <View className="w-1/2 h-16">
                    <Input label="Category" placeholder="---" />
                  </View>
                  <View className="w-1/2 h-16">
                    <Select
                      label="Payment Method"
                      items={[
                        { label: "Cash", value: "Cash" },
                        { label: "Card", value: "Card" },
                        { label: "Trasfer", value: "Trasfer" },
                      ]}
                    ></Select>
                  </View>
                </View>
                <View className="flex-row mt-4 mb-3">
                  <View className="w-1/2 h-16">
                    <Input
                      label="Email Address"
                      placeholder="Example@gmail.com"
                    />
                  </View>
                  <View className="w-1/2 h-16">
                     <Input label="Tag" placeholder="Work-Home..." />
                  </View>
                </View>
                <View className="flex-row mt-4 mb-3">
                  <View className="w-1/2 h-16">
                    <Select
                      label="Type"
                      items={[
                          { label: "Income", value: "Income" },
                          { label: "Expense", value: "Card" },
                        ]}
                    ></Select>
                  </View>
                  <View className="w-1/2 h-16">
                        <DateSelect/>
                  </View>
                </View>
                <View className="h-40 mt-4 mb-3">
                  <Text className="text-base font-bold my-2 text-black text-principal text-center">
                    Description
                  </Text>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    placeholder=""
                    className="rounded-lg p-3 w-input text-base text-blac bg-white pt-2"
                    textAlignVertical="top" // importante para que el texto comience arriba
                  />
                </View>
                <Pressable
                  className="bg-red-500 px-4 py-2 rounded"
                  onPress={() => setModalVisible(false)}
                >
                  <Text className="text-white text-center">Cerrar</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </Portal>
      <SafeAreaView
        className="flex-1 bg-[#ECF0F3]"
        style={{ paddingBottom: 88 }}
      >
        {/* Header Home */}

        <View className="flex-row mx-2 h-16">
          <View className="w-2/5 items-center justify-center h-16">
            <Image source={require("../assets/logo.png")} style={styles.logo} />
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
        <View className="flex items-center mt-2">
          <Text className="text-2xl font-bold text-center text-principal">
            Total Balance
          </Text>
          <Text className="text-5xl font-bold text-center mt-4 text-principal">
            $100.000
          </Text>
        </View>
        <View className="flex-row mt-6 mb-3">
          <View className="w-1/2 h-16">
            <View className="flex-1 items-center justify-center">
              <Text className="text-lg font-bold">Montly Earnings</Text>
              <Text className="text-2xl font-bold text-center mt-3 text-green-800">
                +$5.500
              </Text>
            </View>
          </View>
          <View className="w-1/2 h-16">
            <View className="flex-1 items-center justify-center">
              <Text className="text-lg font-bold">Montly Expenses</Text>
              <Text className="text-2xl font-bold text-center mt-3 text-red-800">
                -$2.500
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text className="text-lg text-center mt-3 text-white">
            Recent Movements
          </Text>
          <>
            <MovementRow
              date={"04/29/2025"}
              concept={"Salary"}
              amount={1500}
              method={"transfer"}
            />
            <MovementRow
              date={"04/28/2025"}
              concept={"Groceries"}
              amount={-200}
              method={"card"}
            />
            <MovementRow
              date={"04/27/2025"}
              concept={"Freelance"}
              amount={1200}
              method={"paypal"}
            />
            <MovementRow
              date={"04/26/2025"}
              concept={"Electricity Bill"}
              amount={-100}
              method={"transfer"}
            />
            <MovementRow
              date={"04/25/2025"}
              concept={"Stocks"}
              amount={800}
              method={"broker"}
            />
            <MovementRow
              date={"04/24/2025"}
              concept={"Restaurant"}
              amount={-50}
              method={"card"}
            />
          </>
        </View>
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
        <View className="flex-1 items-center justify-center">
          <Pressable
            onPress={handleMovement}
            style={styles.btnMic}
            className="flex flex-row justify-center items-center"
          >
            <Icon name="mic" size={50} color="#fff" />
          </Pressable>
        </View>
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
  container: {
    alignSelf: "center",
    width: "90%",
    height: 280,
    backgroundColor: "#2C3E50",
    marginVertical: 15,
    borderRadius: 20,
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
  modal: {
    alignItems: "center",
    backgroundColor: "rgba(230, 230, 230, 0.8)",
    height: 535,
    paddingTop: 40,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});
