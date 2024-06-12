import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <Image source={require('./assets/logo.jpeg')} style={styles.logo} />
        <Text style={styles.paragraph}>
          Bem vindo ao Buy Me
        </Text>
        <Text style={styles.entrarComText}>
          Entrar com
        </Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Text style={styles.textoBotaoSocial}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Text style={styles.textoBotaoSocial}>Google</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#455559"
          value={login}
          onChangeText={text => setLogin(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#455559"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry={true} 
        />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.cadastrarText}>
          Ainda não é cadastrado? <Text style={styles.cadastrarLink}>Cadastrar</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
    marginBottom: 40,
  },
  entrarComText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginVertical: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialButton: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#db4a39',
  },
  textoBotaoSocial: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    margin: 10,
    fontSize: 15,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    backgroundColor: '#DEEFE7',
    width: 300,
    textAlign: 'left',
    height: 40,
    padding: 5,
    borderRadius: 10,
  },
  div: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  botao: {
    width: 200,
    margin: 30,
    backgroundColor: '#5F008C',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cadastrarText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  cadastrarLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
