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
import { useState } from "react";


export default function ModalMovement({ state, action }) {

  const tag = [
    { label: "Home", value: "home" },
    { label: "Work", value: "work" },
    { label: "Studying", value: "studying" },
    { label: "Car", value: "car" },
    { label: "Fun", value: "fun" },
  ]

  const [close, SetClose] = useState(false)
  // manejo de altura para el modal
  const screenHeight = Dimensions.get("window").height;

  const handleClose = async() => {
    SetClose(true)
    setTimeout(() => {
      action(false)
    }, 600);
      setTimeout(() => {
      SetClose(false)
    }, 650);
  }


  return (

    <Portal>
      <Modal
        visible={state}
        contentContainerStyle={{
          height: screenHeight * 1.02,
          justifyContent: "flex-start",
        }}
        onDismiss={() => action(false)}
      >
        <MotiView
          from={{ opacity: 0, translateY: -500 }}
          animate={{
            opacity:
              (close ? 0 : 1),
            translateY:
              (close ? -500 : -5)
          }}
          transition={{ type: "timing", duration: 600 }}
          className="justify-start items-center flex flex-col"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="h-screen">
              <View style={styles.modal}>
                <Text className="text-2xl font-bold text-white mt-6">
                  New Movement
                </Text>
                <View className="flex justify-center items-center">
                  <DateSelect />
                </View>
                <View className="flex-row h-32">
                  <View className="w-1/2 h-16">
                    <Input label="Concept" placeholder="----------" />
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
                <View className="h-22 flex">
                  <Text className="font-bold text-lg text-center text-white">
                    Amount
                  </Text>
                  <View className="flex-row justify-center items-center mt-2">
                    <Icon name="dollar-sign" size={30} color="#fff" />
                    <TextInput
                      onSubmitEditing={Keyboard.dismiss}
                      className="text-white font-bold text-5xl text-segundario mx-1 mt-3 "
                      placeholder="0.00"
                      placeholderTextColor="#fff"
                      keyboardType="decimal-pad"
                    />
                  </View>
                </View>
                <View className="flex-row mb-5">
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
                <View className="mt-4 mb-3">
                  <Text className="text-base font-bold my-2 text-black text-white text-center">
                    Description
                  </Text>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    placeholder=">"
                    className="rounded-lg p-3 w-input h-20 text-base bg-white pt-2"
                    textAlignVertical="top"
                    placeholderTextColor="#6B7280"
                    style={{
                      borderColor: '#fff',
                      borderRadius: 10,
                      backgroundColor: '#34495E',
                      borderColor: '#fff',
                      borderWidth: 1
                    }}
                  />
                </View>
                <View className="flex-row">
                  <View className="w-1/2 justify-center">
                    <Pressable
                      onPress={handleClose}
                      style={styles.btnClose}
                      className="flex-row justify-start items-center"
                    >
                      <Icon name="arrow-up" size={17} color="#EF4444" />
                      <Text className="text-red-500">Close</Text>
                    </Pressable>
                  </View>
                  <View className="w-1/2">
                    <Pressable
                      onPress={() => console.log("A")}
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