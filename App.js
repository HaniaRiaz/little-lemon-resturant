import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Drawer.Navigator useLegacyImplementation initialRouteName='Login'>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        </Drawer.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4CE14',
  },
  footerContainer: {
    backgroundColor: '#F4CE14',
  },
});
