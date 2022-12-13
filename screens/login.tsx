import React from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';

interface Props {
  onLogin: (username: string, password: string) => void;
}

const LoginScreen: React.FC<Props> = ({ onLogin }) => {
 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40, fontWeight: '500', marginBottom: 25 }}>
            Login
        </Text>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.inputField}
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.inputField}
        />
        <Pressable onPress={() => onLogin(email, password)} style={styles.button}>
            <Text style={{color: 'white'}}>
                Sign Up
            </Text>
        </Pressable>
        <Pressable onPress={() => {}}>
            <Text style={styles.text}>
                Forgot password
            </Text>
        </Pressable>
        <Pressable onPress={() => {}}>
            <Text style={styles.text}>
                Don't have and account? - Sign Up
            </Text>
        </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#4B56D2',
    width: 300,
    margin: 10
  },
  inputField: {
    textAlign: 'center', 
    height: 50, 
    width: 300, 
    borderWidth: 1, 
    borderColor: 'grey', 
    borderRadius: 5, 
    margin: 10  
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4B56D2',
    marginTop: 15
  }
})