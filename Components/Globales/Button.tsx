import { Shadow } from "react-native-shadow-2";
import "../../global.css";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ Tag, funcion, type }) {
  return (
    // te permite mediante seleccionar un link convertirlo tanto en boton como link
    <Shadow
      distance={5}
      startColor="rgba(0,0,0,0.25)"
      containerStyle={{ borderRadius: 40}}
      offset={[0, 2]}
    >
      <Pressable
        onPress={() => {
          funcion && funcion();
        }}
        style={type === "btn" ? styles.btn : styles.enlace}
        className="flex flex-row justify-center items-center"
      >
        <Text className="text-white text-center font-bold text-xl">{Tag}</Text>
      </Pressable>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#2C3E50",
    padding: 15,
    width: 250,
    borderRadius: 40,
  },
  enlace: {},
});
