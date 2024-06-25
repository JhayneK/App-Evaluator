import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { PaperProvider, Button, Title, Paragraph, Divider, useTheme, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login with username:', username);
    console.log('Login with email:', email);
    console.log('Login with password:', password);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Avatar.Image
          size={100}
          source={require('./your_logo.png')} // Replace with your logo image
          style={styles.logo}
        />
        <Title style={styles.title}>Junte-se à comunidade dedicada ao futuro!</Title>

        <Paragraph style={styles.subtitle}>Cadastre-se com</Paragraph>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.googleButton}
            mode="contained"
            onPress={() => console.log('Google Sign In')}>
            <Text style={styles.buttonText}>Google</Text>
          </Button>
          <Button
            style={styles.facebookButton}
            mode="contained"
            onPress={() => console.log('Facebook Sign In')}>
            <Text style={styles.buttonText}>Facebook</Text>
          </Button>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.formContainer}>
          <TextInput
            label="Usuário"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          <TextInput
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <Button
          style={styles.loginButton}
          mode="contained"
          onPress={handleLogin}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Já possui conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: '#4285F4',
    width: '48%',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  divider: {
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#6200EE',
    marginTop: 20,
    width: '80%',
  },
  link: {
    marginTop: 10,
    color: '#6200EE',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;