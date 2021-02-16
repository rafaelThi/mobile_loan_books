import React, { useCallback } from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import styles from './styles';

export default function ChoicePageAdmin() {
  const navigation = useNavigation();
  const handleRegister = useCallback(async () => {
    console.log('registro de livros');
    navigation.navigate('LoginPage');
  }, [navigation]);
  const handleRequisitions = useCallback(async () => {
    console.log('registro de livros');
    navigation.navigate('LoginPage');
  }, [navigation]);
  const handleDevolution = useCallback(async () => {
    console.log('registro de livros');
    navigation.navigate('LoginPage');
  }, [navigation]);

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
          O que deseja fazer?
        </Text>

        <RectButton onPress={handleRegister} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text style={styles.textButton}>
              Registrar um novo livro
            </Text>
          </View>
        </RectButton>
        <RectButton onPress={handleRequisitions} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text style={styles.textButton}>
              Requisições
            </Text>
          </View>
        </RectButton>
        <RectButton onPress={handleDevolution} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text style={styles.textButton}>
              Devolver um livro
            </Text>
          </View>
        </RectButton>
      </ScrollView>
    </View>
  );
}
