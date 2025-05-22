import React, { useState } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function DateSelect() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button title="Select Date" onPress={() => setOpen(true)} styles={styles.btn}/>
      <Text>Selected: {date.toDateString()}</Text>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date" // puedes cambiar a "time" o "datetime"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#2C3E50",
    padding: 15,
    width: 250,
    borderRadius: 40,
  },
});