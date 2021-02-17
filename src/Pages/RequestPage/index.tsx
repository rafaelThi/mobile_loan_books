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
          Essas são todas as suas requisições:
        </Text>

        <RectButton onPress={() => { console.log('Ir para as aceitas'); }} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text style={styles.textButton}>
              Ir para as aceitas
            </Text>
          </View>
        </RectButton>
        <View style={styles.containerRequest}>
          <Text>
            Teste
          </Text>
        </View>
        <View style={styles.containerRequest}>
          <Text>
            Teste
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
