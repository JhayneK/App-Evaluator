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
            Bem vindo ao Buy Me
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
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    top:0,
    color:'black'
  },
  input: {
    margin: 5,
    fontSize: 15,
    fontFamily:'Arial' ,
    fontWeight: 'bold',
    backgroundColor: '#DEEFE7',
    width: 300,
    textAlign: 'left',
    padding: 5, 
  },
  div: {
    alignItems: 'center',
    width: '100%',
    height:'100%',
    maxWidth: 600,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  botao: {
    width: 200,
    margin: 20,
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
  
});
