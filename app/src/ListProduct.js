import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PaperProvider, Button, TextInput, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.categoryCard}>
          <Card.Title title="Categorias" titleStyle={styles.categoryTitle} />
        </Card>

        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('Roupas')}>
            <Card style={styles.categoryCard}>
              <Card.Cover source={require('./images/roupa.jpg')} style={styles.categoryImage} />
              <Card.Title title="Categoria Roupas" titleStyle={styles.categoryTitle} />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('Sapatos')}>
            <Card style={styles.categoryCard}>
              <Card.Cover source={require('./images/sapato.jpg')} style={styles.categoryImage} />
              <Card.Title title="Categoria Sapatos" titleStyle={styles.categoryTitle} />
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.navigationContainer}>
          <Button icon="arrow-left" mode="contained" color="#6200EE" onPress={() => navigation.goBack()} />
          <Button icon="grid" mode="contained" color="#6200EE" />
          <Button icon="bell" mode="contained" color="#6200EE" />
          <Button icon="settings" mode="contained" color="#6200EE" />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  categoryCard: {
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  category: {
    width: '48%',
  },
  categoryImage: {
    height: 200,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default HomeScreen;