import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Rating, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ItemDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" type="font-awesome" size={20} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Detalhes do Item</Text>

      <Image source={require('./path/to/your/image.jpg')} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Nome:</Text> Mocassim Couro
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Marca:</Text> Oxford
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Coleção:</Text> Inverno 2023
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Grupo:</Text> Sapatos
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Linha:</Text> Sapatos Femininos
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Material:</Text> Couro
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Cores:</Text> Preto/Branco
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Descrição:</Text> Valoriza conforto e elegância.
        </Text>
      </View>

      <View style={styles.rating}>
        <Text style={styles.ratingTitle}>O que achou do item?</Text>
        <Rating
          type="star"
          fractions={1}
          startingValue={3}
          imageSize={20}
          style={{ paddingVertical: 10 }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.ratingTitle}>Compraria este item?</Text>
        <Button
          title="Sim"
          buttonStyle={{ backgroundColor: '#4CAF50', marginRight: 10 }}
          onPress={() => {
            // Handle "Sim" button press
            console.log('Sim pressed');
          }}
        />
        <Button
          title="Não"
          buttonStyle={{ backgroundColor: '#f44336' }}
          onPress={() => {
            // Handle "Não" button press
            console.log('Não pressed');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  details: {
    marginBottom: 20,
  },
  detailItem: {
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  rating: {
    marginBottom: 20,
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ItemDetailsScreen;