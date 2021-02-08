import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import book from '../../../assets/book.png';
import styles from './styles';

interface IId {
  id: string
}
export default function HomePage() {
  const route = useRoute();
  const params = route.params as IId;

  const navigation = useNavigation();

  function handleLoginPage() {
    const email = 'teste@teste.com';
    navigation.navigate('LoginPage', { email });
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Img} />
      <Text style={styles.logo}>
        Books Loan
      </Text>
      <Text
        style={styles.titleHome}
      >
        Sua plaforma para empréstimo
        de livros Mobile!
      </Text>
      <RectButton onPress={handleLoginPage} style={styles.Button}>
        <View style={styles.ViewButton}>
          <Image source={book} style={styles.ImgButton} />
          <Text>
            Procurar um livro
          </Text>
        </View>
      </RectButton>
      <StatusBar style="auto" />
    </View>
  );
}
