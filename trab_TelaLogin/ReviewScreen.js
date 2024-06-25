import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const companies = [
  { id: '1', name: 'Empresa 1', product: 'Produto A', description: 'Produto A é uma solução inovadora para tecnologia avançada.' },
  { id: '2', name: 'Empresa 2', product: 'Produto B', description: 'Produto B é ecológico e sustentável, perfeito para o meio ambiente.' },
];

export default function ReviewScreen({ navigation, route }) {
  const { addReview } = route.params;

  const handleRatingCompleted = (companyId, rating) => {
    addReview(companyId, rating);
    setTimeout(() => {
      navigation.goBack();
    }, 1000); 
  };

  const renderCompany = ({ item }) => (
    <View style={styles.companyCard}>
      <Text style={styles.companyName}>{item.name}</Text>
      <Text style={styles.productName}>{item.product}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <AirbnbRating
        count={5}
        reviews={["Péssimo", "Ruim", "Ok", "Bom", "Ótimo"]}
        defaultRating={0}
        size={20}
        onFinishRating={(rating) => handleRatingCompleted(item.id, rating)}
        selectedColor="#FFD700"
        starContainerStyle={styles.starContainer}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Avaliar Empresas</Text>
        <Image source={require('./assets/logoSemFundo.png')} style={styles.logo} />
      </View>
      <FlatList
        data={companies}
        renderItem={renderCompany}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    margin: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 10,
  },
  list: {
    paddingHorizontal: 20,
  },
  companyCard: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#5F008C',
    borderRadius: 10,
    alignItems: 'center',
  },
  companyName: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
    color: '#FFD700',
    marginBottom: 5,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  starContainer: {
    marginVertical: 10,
  },
});
