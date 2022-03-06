import 'react-native-gesture-handler';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, StatusBar } from 'react-native';
import MyStack from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <View style={{ flex: 1 }} >

      <NavigationContainer>
        <StatusBar />
        <MyStack />

      </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
