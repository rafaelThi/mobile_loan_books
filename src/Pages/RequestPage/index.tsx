import React from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import book from '../../../assets/book.png';
import styles from './styles';

export default function RequestPage() {
  const navigation = useNavigation();

  function handleLoginPage() {
    navigation.navigate('LoginPage');
  }

  function handleLoginPageAdmin() {
    navigation.navigate('LoginPageAdmin');
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.search}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 0,
        }}
      >
        <Image source={Logo} style={styles.ImgLogo} />
        <Text style={styles.TextLogo}>
          Books Loan
        </Text>
        <Text
          style={styles.titleHome}
        >
          Requests
        </Text>
        <RectButton onPress={handleLoginPage} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Image source={book} style={styles.ImgButton} />
            <Text>
              Procurar um livro
            </Text>
          </View>
        </RectButton>
      </ScrollView>
    </View>
  );
}
