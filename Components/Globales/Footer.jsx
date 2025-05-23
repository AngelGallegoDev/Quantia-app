import Icon from "react-native-vector-icons/Feather";
import "../../global.css";
import { Pressable, View } from "react-native";
import { MotiView } from "moti";
import { useNavigation } from "@react-navigation/native";

export default function Footer({ location }) {
    const navigation = useNavigation();


    return (
        <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 600 }}
            className="justify-center items-center absolute bottom-0 left-0 right-0"
        >
            <View className="absolute flex-row h-22 bottom-0 left-0 right-0 bg-[#2C3E50] items-center justify-center">
                <Pressable className="w-1/3 mb-2 h-20 items-center justify-center" onPress={() => { navigation.navigate("Home") }}>
                    <Icon name="home" size={30} color={location.toLowerCase() === "home" ? "#A9A9A9" : "#fff"} />
                </Pressable>
                <Pressable className="w-1/3 mb-2 h-20 items-center justify-center"  onPress={() => { navigation.navigate("History") }}>
                    <Icon name="calendar" size={30} color={location.toLowerCase() === "history" ? "#A9A9A9" : "#fff"} />
                </Pressable>
                <Pressable className="w-1/3 mb-2 h-20 items-center justify-center" onPress={() => { navigation.navigate("Settings") }}>
                    <Icon name="settings" size={30} color={location.toLowerCase() === "settings" ? "#A9A9A9" : "#fff"} />
                </Pressable>
            </View>
        </MotiView>
    );
}
