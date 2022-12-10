import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './screens/index';

export default function App() {
  return (
  <NavigationContainer>
    <Screens />
  </NavigationContainer>
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
