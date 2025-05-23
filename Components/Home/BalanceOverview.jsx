import { MotiView } from "moti";
import "../../global.css";
import {
    Text,
    View,
} from "react-native";

export default function BalanceOverview() {

    return (
        <MotiView
            from={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "timing", duration: 1500 }}
            className="justify-center items-center"
        >

            <View className="flex items-center mt-2">
                <Text className="text-2xl font-bold text-center text-principal">
                    Total Balance
                </Text>
                <Text className="text-5xl font-bold text-center mt-4 text-principal">
                    $100.000
                </Text>
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
            </View>
        </MotiView>
    );
}
