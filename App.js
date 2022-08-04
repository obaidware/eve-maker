import 'react-native-gesture-handler';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, StatusBar } from 'react-native';
import MyStack from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "./src/store/index";

export default function App() {
  return (
    <Provider>

      <View style={{ flex: 1 }} >
        <NavigationContainer>
          <StatusBar  />
          <MyStack />
        </NavigationContainer>
      </View>
    </Provider>
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
