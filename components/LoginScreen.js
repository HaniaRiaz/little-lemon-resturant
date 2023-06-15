import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
export default function LoginScreen({navigation}) {
  const [emailAddress, onChangeEmail] = useState('');
  const [passward, onChangePassward] = useState('');
  const [loggedIn, onLogin] = useState(false);

  return (
    <ScrollView keyboardDismissMode="on-drag" style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}
      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue</Text>
          <TextInput
            style={styles.input}
            value={emailAddress}
            placeholder="Email address"
            onChangeText={onChangeEmail}
            KeyboardType={'email-address'}
          />
          <TextInput
            style={styles.input}
            value={passward}
            placeholder="Passward"
            onChangeText={onChangePassward}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Pressable
            style={styles.button}
            onPress={()=>navigation.navigate('Welcome')}>
            { /*onPress={() => { onLogin(!loggedIn);}}>*/}
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}
// const green = '#495E57';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  headerText: {
    padding: 20,
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 32,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 50,
    margin: 14,
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#d3d3d3',
    borderRadius:4,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#F4CE14',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});
