import React from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';

interface Props {
  onSignIn: (username: string, firstName: string, lastName: string, email: string, password: string) => void;
}

const SignUpScreen: React.FC<Props> = ({ onSignIn }) => {
  const [username, setUsername] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: '500', marginBottom: 25 }}>
        Sign Up
      </Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.inputField}
      />
      <TextInput
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.inputField}
      />
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
      <Pressable onPress={() => onSignIn(username, firstName, lastName, email, password)} style={styles.button}>
        <Text style={{color: 'white'}}>
          Sign Up
        </Text>
      </Pressable>
        
    </View>
  );
};

export default SignUpScreen;

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
  }
})