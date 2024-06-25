import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button, Icon, Avatar, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ProfileSettingsScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: 'Nataniel',
    profileImage: require('./path/to/profile/image.jpg'),
  });

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    navigation.navigate('EditProfile');
  };

  const handleLogout = () => {
    // Handle logout logic
    // For example, clear user data and navigate to login screen
    console.log('Logout triggered');
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Avatar.Image
          size={60}
          source={user.profileImage}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ConnectAccounts')}>
          <View style={styles.option}>
            <Text style={styles.optionText}>Conectar Contas</Text>
            <Icon name="chevron-right" size={20} color="#777" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyAndSecurity')}>
          <View style={styles.option}>
            <Text style={styles.optionText}>Privacidade e Segurança</Text>
            <Icon name="chevron-right" size={20} color="#777" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginSettings')}>
          <View style={styles.option}>
            <Text style={styles.optionText}>Configurações de Login</Text>
            <Icon name="chevron-right" size={20} color="#777" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
          <View style={styles.option}>
            <Text style={styles.optionText}>Dúvidas Recorrentes</Text>
            <Icon name="chevron-right" size={20} color="#777" />
          </View>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        color="#F00" // Set the button color to red
        style={styles.deleteButton}
        onPress={handleLogout}
      >
        <Text style={{ color: 'white' }}>Excluir Conta</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#777',
  },
  profileImage: {
    marginLeft: 15,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#000',
  },
  divider: {
    marginBottom: 20,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    marginTop: 20,
    marginBottom: 30, // Add bottom margin for spacing
    marginHorizontal: 20, // Add horizontal margin for spacing
  },
});

export default ProfileSettingsScreen;
