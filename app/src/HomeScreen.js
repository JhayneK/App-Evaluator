import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Card, Avatar, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Olá, Nataniel!</Text>
        <Avatar.Image
          size={40}
          source={{ uri: 'https://i.pravatar.cc/300' }}
          style={styles.avatar}
        />
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Avaliados</Text>
          <Text style={styles.cardValue}>1.234 Itens</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://i.imgur.com/16KqX0c.png' }} />
      </Card>
      <View style={styles.companies}>
        <Text style={styles.sectionTitle}>Empresas</Text>
        <View style={styles.company}>
          <View style={styles.companyIcon}>
            <Icon name="store" size={30} color="white" />
          </View>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>Loja de Roupas</Text>
            <Text style={styles.companyVotes}>12 Votos</Text>
          </View>
        </View>
        <View style={styles.company}>
          <View style={styles.companyIcon}>
            <Icon name="home" size={30} color="white" />
          </View>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>Utensílios Domésticos</Text>
            <Text style={styles.companyVotes}>10 Votos</Text>
          </View>
        </View>
        <View style={styles.company}>
          <View style={styles.companyIcon}>
            <Icon name="furniture" size={30} color="white" />
          </View>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>Loja de Móveis</Text>
            <Text style={styles.companyVotes}>2 Votos</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          icon="home"
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          Home
        </Button>
        <Button
          icon="account-circle"
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          Profile
        </Button>
        <Button
          icon="bell"
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Notifications')}
        >
          Notifications
        </Button>
        <Button
          icon="settings"
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          Settings
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    marginLeft: 20,
  },
  card: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  companies: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  company: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  companyIcon: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyVotes: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    flex: 1,
    margin: 5,
  },
});

const App = () => {
  const [avaliados, setAvaliados] = useState(1234);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Nataniel!</Text>
        <Text style={styles.role}>Avaliador</Text>
        <Image source={require('./avatar.svg')} style={styles.avatar} />
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Avaliados</Text>
          <Text style={styles.cardValue}>{avaliados} Itens</Text>
          <Text style={styles.cardTitle}>Card</Text>
          <Text style={styles.cardValue}>Ouro</Text>
        </View>
        <View style={styles.cardDecor}>
          {/* Design das bordas circulares */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  role: {
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#553886',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  cardValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDecor: {
    // Implemente o design das bordas circulares
  },
});

export default HomeScreen;
