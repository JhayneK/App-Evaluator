import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';


import { Card } from 'react-native-paper';


import AssetExample from './components/AssetExample';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <View style={styles.div2}>
          <Text style={styles.paragraph}>
            Login
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor="#455559"
            value={login}
            onChangeText={text => setLogin(text)}
          />
        </View>

        <View style={styles.div3}>
          
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#455559"
            value={senha}
            onChangeText={text => setSenha(text)}
            secureTextEntry={true} 
          />
        </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CACACA',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#DEEFE7',
    width: 300,
    textAlign: 'left',
    padding: 5, 
  },
  div: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#3D5A73',
    padding: 20,
    borderRadius: 10,
  },
  botao: {
    width: 200,
    margin: 20,
    backgroundColor: '#164773',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
