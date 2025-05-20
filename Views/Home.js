import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import "../global.css";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import MovementRow from "../Components/Home/MovementRow";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#ECF0F3]">
      {/* Header Home */}
      <View className="flex-row mx-2 h-16">
        <View className="w-2/5 items-center justify-center h-16">
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>
        <View className="w-1/3 flex-row h-16 items-center justify-center">
          <Image
            source={require("../assets/icon-user.png")}
            style={styles.logo_user}
          />
          <Text className="text-xs mx-2 font-bold text-center text-principal">
            Pepito12345
          </Text>
        </View>
        <View className="w-1/12 mr-5 h-16 justify-center items-center">
          <Icon name="eye-off" size={24} color="#2C3E50" />
        </View>
        <View className="w-1/12 h-16 justify-center items-center">
          <Icon name="bell" size={24} color="#2C3E50" />;
        </View>
      </View>
      <View className="flex items-center mt-6">
        <Text className="text-2xl font-bold text-center text-principal">
          Total Balance
        </Text>
        <Text className="text-5xl font-bold text-center mt-4 text-principal">
          $100.000
        </Text>
      </View>
      <View className="flex-row mt-10">
        <View className="w-1/2 h-16">
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-bold">Montly Earnings</Text>
            <Text className="text-2xl font-bold text-center mt-3 text-green-800">
              $100.000
            </Text>
          </View>
        </View>
        <View className="w-1/2 h-16">
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-bold">Montly Expenses</Text>
            <Text className="text-2xl font-bold text-center mt-3 text-red-800">
              $100.000
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text className="text-lg text-center mt-3 text-white">
          Recent Transactions
        </Text>
<>
  <MovementRow date={"04/29/2025"} concept={"Salary"} amount={1500} method={"transfer"} />
  <MovementRow date={"04/28/2025"} concept={"Groceries"} amount={-200} method={"card"} />
  <MovementRow date={"04/27/2025"} concept={"Freelance"} amount={1200} method={"paypal"} />
  <MovementRow date={"04/26/2025"} concept={"Electricity Bill"} amount={-100} method={"transfer"} />
  <MovementRow date={"04/25/2025"} concept={"Stocks"} amount={800} method={"broker"} />
  <MovementRow date={"04/24/2025"} concept={"Restaurant"} amount={-50} method={"card"} />
    <MovementRow date={"04/24/2025"} concept={"Hacienda"} amount={-9999} method={"resuelve"} />
</>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 125,
    height: 45,
  },
  logo_user: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#2C3E50",
  },
  container: {
    alignSelf: "center",
    width: "90%",
    height: 357,
    backgroundColor: "#2C3E50",
    marginVertical: 15,
    borderRadius: 20,
  },
});
