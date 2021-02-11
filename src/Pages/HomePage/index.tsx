import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import book from '../../../assets/book.png';
import styles from './styles';

export default function HomePage() {
  const navigation = useNavigation();

  function handleLoginPage() {
    navigation.navigate('LoginPage');
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
    </View>
  );
}
