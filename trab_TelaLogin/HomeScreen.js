import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const initialUser = {
  name: 'João',
  reviewedProductsCount: 0,
  reviewedCompanies: [
    { id: '1', name: 'Empresa 1', reviews: 0 },
    { id: '2', name: 'Empresa 2', reviews: 0 },
  ],
};

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState(initialUser);

  const addReview = (companyId) => {
    setUser(prevUser => {
      const updatedCompanies = prevUser.reviewedCompanies.map(company =>
        company.id === companyId ? { ...company, reviews: company.reviews + 1 } : company
      );

      const updatedReviewedProductsCount = prevUser.reviewedProductsCount + 1;

      return {
        ...prevUser,
        reviewedProductsCount: updatedReviewedProductsCount,
        reviewedCompanies: updatedCompanies,
      };
    });
  };

  const renderCompany = ({ item }) => (
    <View style={styles.companyCard}>
      <Text style={styles.companyName}>{item.name}</Text>
      <Text style={styles.companyReviews}>{item.reviews} avaliações</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Olá, {user.name}!</Text>
        <Image source={require('./assets/logoSemFundo.png')} style={styles.logo} />
      </View>
      <View style={styles.reviewedCard}>
        <Text style={styles.reviewedText}>Você já avaliou {user.reviewedProductsCount} produtos</Text>
        <Text style={styles.goldText}>Card Gold</Text>
      </View>
      <Text style={styles.reviewedCompaniesHeader}>Empresas avaliadas:</Text>
      <FlatList
        data={user.reviewedCompanies}
        renderItem={renderCompany}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.reviewButton} onPress={() => navigation.navigate('Review', { addReview })}>
        <Text style={styles.reviewButtonText}>Nova avaliação </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  reviewedCard: {
    backgroundColor: '#5F008C',
    borderRadius: 30,
    padding: 10,
    margin: 20,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  goldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  reviewedCompaniesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  companyCard: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#5F008C',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyName: {
    fontSize: 16,
    color: 'white',
  },
  companyReviews: {
    fontSize: 16,
    color: 'white',
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 10,
  },
  reviewButton: {
    backgroundColor: '#5F008C',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    margin: 30,
    
  },
  reviewButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
