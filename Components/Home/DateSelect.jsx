import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function DateSelect() {
  const [date, setDate] = useState(new Date());
  const [isPickerVisible, setPickerVisible] = useState(false);

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    hidePicker();
  };

  return (
    <View className='justify-center items-center mt-4'>
      <Icon name="calendar" size={25} color="#fff" />
      <Text className='text-white text-lg text-center'>{date.toDateString()}</Text>
      <Pressable
        onPress={showPicker}
        style={
          styles.btn}
      >

        <Text style={styles.btnText}>
          Change Date
        </Text>
      </Pressable>


      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "transparent",
    padding: 15,
    width: 250,
    borderRadius: 40,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  }
});
