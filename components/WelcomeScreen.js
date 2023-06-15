import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from 'react-native';
export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.logo}
          resizeMode="cover"
          accessibilityLabel={'Little Lemon Logo'}
          accessible={true}
          source={require('../Images/LittleLemonLogo.png')}
        />
        <Text
          style={[
            styles.headerText,
            colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
          ]}>
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.innerText,
          colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
        ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  innerText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 2,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
