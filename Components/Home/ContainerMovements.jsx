import "../../global.css";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import MovementRow from "./MovementRow";
import { MotiView } from "moti";


export default function ContainerMovements() {



    return (
        <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 1800 }}
            className="justify-center items-center"
        >

            <View style={styles.container}>
                <Text className="text-lg text-center mt-3 text-white">
                    Recent Movements
                </Text>
                <>
                    <MovementRow
                        date={"04/29/2025"}
                        concept={"Salary"}
                        amount={1500}
                        method={"transfer"}
                    />
                    <MovementRow
                        date={"04/28/2025"}
                        concept={"Groceries"}
                        amount={-200}
                        method={"card"}
                    />
                    <MovementRow
                        date={"04/27/2025"}
                        concept={"Freelance"}
                        amount={1200}
                        method={"paypal"}
                    />
                    <MovementRow
                        date={"04/26/2025"}
                        concept={"Electricity Bill"}
                        amount={-100}
                        method={"transfer"}
                    />
                    <MovementRow
                        date={"04/25/2025"}
                        concept={"Stocks"}
                        amount={800}
                        method={"broker"}
                    />
                    <MovementRow
                        date={"04/24/2025"}
                        concept={"Restaurant"}
                        amount={-50}
                        method={"card"}
                    />
                </>
            </View>
        </MotiView>
    );
}




const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: "90%",
        height: 280,
        backgroundColor: "#2C3E50",
        marginVertical: 15,
        borderRadius: 20,
    },
});