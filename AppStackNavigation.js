//Using Stack Navigation
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';
import LittleLemonFooter from './components/LittleLemonFooter';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import MenuItems from './components/PressableMenuItems';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerStyle: { justifyContent: 'Center' } }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen}  />
          <Stack.Screen name="Login" component={LoginScreen} options={{title:'Login'}} />
        </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>-
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );          
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});
