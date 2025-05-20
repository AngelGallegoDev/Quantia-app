import "../../global.css";
import { Text, View } from "react-native";

export default function MovementRow({ date, concept, amount, method }) {
    return (
        <View className="flex-row mt-4 mx-2 my-2">
            <View className="w-1/4 h-6">
                <View className="flex-1 items-center justify-center">
                    <Text className="text-white text-sm items-center">{date}</Text>
                </View>
            </View>
            <View className="w-1/4 h-5">
                <View className="flex-1 items-center justify-center">
                    <Text className="text-white text-base font-bold">{concept}</Text>
                </View>
            </View>
            <View className="w-1/4 h-5">
                <View className="flex-1 items-center justify-center">
                    <Text className={amount.toString().includes("-") ? "text-red-500 font-bold text-base" : "text-green-500 font-bold text-base"}>$ {amount.toString().replace("-", "")}</Text>
                </View>
            </View>
            <View className="w-1/4 h-5">
                <View className="flex-1 items-center justify-center">
                    <Text className="text-white text-base">{method}</Text>
                </View>
            </View>
        </View>
    );
}


