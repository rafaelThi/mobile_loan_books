import React, { useCallback } from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import styles from './styles';

interface IId {
  id: string;
}

export default function ChoicePageAdmin() {
  const route = useRoute();
  const params = route.params as IId;
  const { id } = params;

  const navigation = useNavigation();
  const handleRegister = useCallback(async () => {
    console.log('NewBookPage', id);
    navigation.navigate('NewBookPage', { id });
  }, [id, navigation]);
  const handleRequisitions = useCallback(async () => {
    console.log('registro de livros');
    navigation.navigate('LoginPage', { id });
  }, [id, navigation]);
  const handleDevolution = useCallback(async () => {
    console.log('Devolução');
    navigation.navigate('DevolutionPage', { id });
  }, [id, navigation]);

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
