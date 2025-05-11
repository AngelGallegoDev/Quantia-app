import "../../global.css";
import { Pressable, Text,StyleSheet } from "react-native";

export default function Button({Tag, type}) {
  return (
    <Pressable onPress={() => console.log(Tag)} style={styles.btn}>
      <Text className="text-white text-center font-bold text-xl">{Tag}</Text>
    </Pressable>
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

