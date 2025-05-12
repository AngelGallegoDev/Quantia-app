import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import Login from './Views/Login';
import RecoveryPW from './Views/RecoveryPW';
import SignUp from './Views/SignUp';

export default function App() {
  return (
    <View style={styles.body}>
      <SignUp/>    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});