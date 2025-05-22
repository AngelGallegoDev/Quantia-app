import "../../global.css";
import {
  Pressable,
  Text,
  View,
  TextInput,
  Keyboard,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { Modal, Portal } from "react-native-paper";
import Select from "./Select";
import Input from "./Input";
import DateSelect from "./DateSelect";


export default function ModalMovement({ state, action }) {

  // manejo de altura para el modal
  const screenHeight = Dimensions.get("window").height;


  return (
    <Portal>
      <Modal
        visible={state}
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
                  {/* <DateSelect /> */}
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
                onPress={() => action(false)}
              >
                <Text className="text-white text-center">Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Portal>
  );
}




const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    backgroundColor: "rgba(230, 230, 230, 0.8)",
    height: 535,
    paddingTop: 40,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});