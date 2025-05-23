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
import { MotiView } from "moti";
import Icon from "react-native-vector-icons/Feather";


export default function ModalMovement({ state, action }) {

  const tag = [
    // 🏠 Personales / Hogar
    { label: "Home", value: "home" },
    { label: "Rent", value: "rent" },
    { label: "Utilities", value: "utilities" },
    { label: "Groceries", value: "groceries" },
    { label: "Maintenance", value: "maintenance" },

    // 💼 Trabajo / Profesional
    { label: "Work", value: "work" },
    { label: "Freelance", value: "freelance" },
    { label: "Office Supplies", value: "office_supplies" },
    { label: "Business Trip", value: "business_trip" },

    // 🎓 Educación
    { label: "Studying", value: "studying" },
    { label: "Books", value: "books" },
    { label: "Courses", value: "courses" },
    { label: "Tuition", value: "tuition" },

    // 🚗 Vehículo
    { label: "Car", value: "car" },
    { label: "Fuel", value: "fuel" },
    { label: "Insurance", value: "insurance" },
    { label: "Maintenance (Car)", value: "car_maintenance" },

    // 🎉 Ocio y vida social
    { label: "Fun", value: "fun" },
    { label: "Dining Out", value: "dining" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Subscriptions", value: "subscriptions" },

    // 💰 Finanzas
    { label: "Income", value: "income" },
    { label: "Salary", value: "salary" },
    { label: "Savings", value: "savings" },
    { label: "Investments", value: "investments" },
    { label: "Debt", value: "debt" },

    // 🌍 Otros
    { label: "Other", value: "other" },
  ]

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
        onDismiss={() => action(false)}
      >
        <MotiView
          from={{ opacity: 0, translateY: -500 }}
          animate={{ opacity: 1, translateY: -5 }}
          transition={{ type: "timing", duration: 1000 }}
          className="justify-start items-center flex flex-col"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="h-screen">
              <View style={styles.modal}>
                <Text className="text-2xl font-bold mt-8 mb-2 text-black text-white">
                  New Movement
                </Text>
                <View className="flex-row h-32">
                  <View className="w-1/2 h-16">
                    <Input label="Concept" placeholder="---" />
                  </View>
                  <View className="w-1/2 h-16">
                    <Select
                      label="Type"
                      items={[
                        { label: "Income", value: "Income" },
                        { label: "Expense", value: "Card" },
                      ]}
                    ></Select>
                  </View>
                </View>
                <View className="h-22 flex mt-2">
                  <Text className="font-bold text-lg text-center text-white">
                    Amount
                  </Text>
                  <View className="flex-row justify-center items-center mt-4">
                    <Icon name="dollar-sign" size={30} color="#fff" />
                    <TextInput
                      onSubmitEditing={Keyboard.dismiss}
                      className="text-white font-bold text-5xl text-segundario mx-1 pt-5"
                      placeholder="0.00"
                      placeholderTextColor="#fff"
                      keyboardType="decimal-pad"
                    />
                  </View>
                </View>
                <View className="flex-row mt-4 mb-3">
                  <View className="w-1/2 h-16">
                    <DateSelect/>
                  </View>
                </View>
                <View className="flex-row mt-4 mb-3">
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
                  <View className="w-1/2 h-16">
                    <Select
                      label="Tag"
                      items={tag}
                    ></Select>
                  </View>
                </View>
                <View className="h-40 mt-4 mb-3">
                  <Text className="text-base font-bold my-2 text-black text-white text-center">
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
                  onPress={() => action(false)}
                  style={styles.btnClose}
                  className="flex flex-row justify-center items-center"
                >
                  <Icon name="edit-2" size={17} color="#fff" />
                  <Text className="text-center text-lg mx-4 text-white">
                    Corfirm Movement
                  </Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </MotiView>
      </Modal>
    </Portal>
  );
}




const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    backgroundColor: "rgba(44, 62, 80, 1)",
    paddingTop: 40,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  }, btnClose: {
    borderColor: "#2C3E50",
    border: 1,
    padding: 15,
    width: "100%",
    borderRadius: 15,
  },
});