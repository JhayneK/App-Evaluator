// CompanyList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const companies = [
  { id: '1', name: 'Loja de Roupas', votes: 12, color: 'black' },
  { id: '2', name: 'Utensílios Domésticos', votes: 10, color: 'blue' },
  { id: '3', name: 'Loja de Móveis', votes: 2, color: 'cyan' },
];

const CompanyList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Avatar.Text size={50} label=" " style={{ backgroundColor: item.color }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.voted}>Item votado</Text>
      </View>
      <Text style={styles.votes}>{item.votes}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Empresas</Text>
        <Text style={styles.headerText}>Votos</Text>
      </View>
      <FlatList
        data={companies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
  },
  voted: {
    color: 'gray',
  },
  votes: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CompanyList;
